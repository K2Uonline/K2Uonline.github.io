import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

interface PostCardProps {
  title: string
  date: string
  excerpt: string
  category: string
  coverImage?: string
  slug: string
}

export default function PostCard({
  title,
  date,
  excerpt,
  category,
  coverImage,
  slug,
}: PostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {coverImage && (
        <div className="relative h-48">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {category}
          </span>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(date), 'MMMM d, yyyy')}
          </time>
        </div>
        <Link href={`/${category}/${slug}`}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
            {title}
          </h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {excerpt}
        </p>
        <Link
          href={`/${category}/${slug}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  )
} 