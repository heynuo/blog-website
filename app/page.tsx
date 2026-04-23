import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { format } from 'date-fns';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to My Blog</h2>
        <p className="text-gray-600 text-lg">
          Here you'll find my daily posts, thoughts, and experiences. Each day brings new stories to share.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 border-l-4 border-indigo-500"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-bold text-gray-900 flex-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-indigo-600 transition"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                📅 {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
              </p>
              <p className="text-gray-700 mb-4">
                {post.frontmatter.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
