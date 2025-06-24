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
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-shadow">
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
          <span className="text-sm font-medium text-secondary-500 bg-secondary-900 px-2 py-1 rounded-full">
            {category}
          </span>
          <time className="text-sm text-gray-400">
            {format(new Date(date), 'MMMM d, yyyy')}
          </time>
        </div>
        <Link href={`/${category}/${slug}`}>
          <h2 className="text-xl font-semibold text-white mb-2 hover:text-accent-500 transition-colors">
            {title}
          </h2>
        </Link>
        <p className="text-gray-300 mb-4">
          {excerpt}
        </p>
        <Link
          href={`/${category}/${slug}`}
          className="text-secondary-400 hover:text-secondary-300 font-medium transition-colors"
        >
          Read more →
        </Link>
      </div>
    </div>
  )
} 