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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
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
          <span className="text-sm font-medium text-secondary-500 bg-secondary-50 px-2 py-1 rounded-full">
            {category}
          </span>
          <time className="text-sm text-gray-500">
            {format(new Date(date), 'MMMM d, yyyy')}
          </time>
        </div>
        <Link href={`/${category}/${slug}`}>
          <h2 className="text-xl font-semibold text-primary-500 mb-2 hover:text-secondary-500 transition-colors">
            {title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">
          {excerpt}
        </p>
        <Link
          href={`/${category}/${slug}`}
          className="text-secondary-500 hover:text-secondary-600 font-medium transition-colors"
        >
          Read more →
        </Link>
      </div>
    </div>
  )
} 