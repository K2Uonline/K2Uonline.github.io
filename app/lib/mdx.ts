import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  title: string
  date: string
  category: string
  excerpt: string
  coverImage?: string
  slug: string
  content: string
}

export async function getPostBySlug(category: string, slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(process.cwd(), 'content', category, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      slug,
      content,
    }
  } catch (error) {
    console.error(`Error reading post: ${error}`)
    return null
  }
}

export function getAllPosts(): Omit<Post, 'content'>[] {
  const categories = ['life', 'work', 'jesus', 'projects', 'resources', 'response']
  const posts: Omit<Post, 'content'>[] = []

  categories.forEach((category) => {
    const postsDirectory = path.join(process.cwd(), 'content', category)
    if (fs.existsSync(postsDirectory)) {
      const fileNames = fs.readdirSync(postsDirectory)
      fileNames.forEach((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        
        posts.push({
          title: data.title,
          date: data.date,
          category: data.category,
          excerpt: data.excerpt,
          coverImage: data.coverImage,
          slug,
        })
      })
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByCategory(category: string): Omit<Post, 'content'>[] {
  const postsDirectory = path.join(process.cwd(), 'content', category)
  const posts: Omit<Post, 'content'>[] = []

  if (fs.existsSync(postsDirectory)) {
    const fileNames = fs.readdirSync(postsDirectory)
    fileNames.forEach((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      posts.push({
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        slug,
      })
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
} 