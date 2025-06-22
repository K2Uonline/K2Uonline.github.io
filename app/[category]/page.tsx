import { getPostsByCategory } from '@/app/lib/mdx'
import PostCard from '@/app/components/PostCard'

const categoryTitles: { [key: string]: string } = {
  life: 'Life',
  work: 'Work',
  jesus: 'Jesus',
  projects: 'Projects',
  resources: 'Resources',
  response: 'Response',
}

export default function Category({
  params,
}: {
  params: { category: string }
}) {
  const posts = getPostsByCategory(params.category)
  const title = categoryTitles[params.category] || 'Category'

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          All posts in the {title.toLowerCase()} category
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No posts found in this category.
          </p>
        )}
      </section>
    </div>
  )
} 