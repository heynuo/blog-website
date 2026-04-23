import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { format } from 'date-fns';
import { marked } from 'marked';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await marked(post.content);

  return (
    <article>
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 font-semibold transition"
      >
        ← Back to Blog
      </Link>

      {/* Post Header */}
      <header className="mb-8 pb-8 border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {post.frontmatter.title}
        </h1>
        <p className="text-gray-600 text-lg">
          📅 Published on {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
        </p>
      </header>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="text-gray-800 leading-relaxed"
        />
      </div>

      {/* Post Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
