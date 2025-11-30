import Link from 'next/link'
import { categories } from '@/data/categories'

export function CategoryStrip() {
  return (
    <div className="bg-gray-900 py-6 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 overflow-x-auto border border-gray-700">
          <div className="flex gap-8 justify-start">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories?filter=${category.slug}`}
                className="flex flex-col items-center gap-2 min-w-[80px] group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-3xl group-hover:bg-orange-500/20 transition-colors border border-gray-600 group-hover:border-orange-500/50">
                  {category.icon}
                </div>
                <span className="text-sm text-gray-300 text-center whitespace-nowrap group-hover:text-orange-400 transition-colors font-medium">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
