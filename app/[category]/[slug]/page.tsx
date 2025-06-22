import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/app/lib/mdx'
import Image from 'next/image'
import { format } from 'date-fns'

export default async function Post({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const post = await getPostBySlug(params.category, params.slug)

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600">Post not found</h1>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 mb-6">
          <span className="capitalize">{post.category}</span>
          <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
        </div>
        {post.coverImage && (
          <div className="relative h-64 md:h-96 mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </header>
      <div className="prose dark:prose-invert max-w-none">
        {/* @ts-ignore */}
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
} 