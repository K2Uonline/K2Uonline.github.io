import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostCard from './components/PostCard'

interface Post {
  title: string
  date: string
  category: string
  excerpt: string
  coverImage?: string
  slug: string
}

function getAllPosts(): Post[] {
  const categories = ['life', 'work', 'jesus', 'projects']
  const posts: Post[] = []

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

export default function Home() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 3)

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">K2U Personal Website</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Getting better at showing people what I'm working on and what I'm thinking about
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
} 