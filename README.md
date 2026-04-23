# 📝 My Daily Blog

A beautiful, fast, and easy-to-use daily blog website built with Next.js and TypeScript.

## ✨ Features

- 📅 **Daily Blog Posts** - Post your thoughts and experiences
- 🎨 **Beautiful Design** - Modern, responsive, and elegant UI with Tailwind CSS
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 📝 **Markdown Support** - Write posts in simple markdown format
- 🔍 **SEO Optimized** - Built-in meta tags and metadata
- 📱 **Fully Responsive** - Works great on all devices
- 🚀 **Easy Deployment** - Ready for Vercel, Netlify, or any Node.js host

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/heynuo/blog-website.git
   cd blog-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Visit `http://localhost:3000`

## 📝 How to Add Blog Posts

### Create a New Post

1. Create a new markdown file in the `posts/` folder
2. Name it with a slug format (e.g., `my-first-post.md`)
3. Add frontmatter at the top with metadata
4. Write your post content in markdown

### Example Post Structure

```markdown
---
title: My First Blog Post
date: 2026-04-23
excerpt: A brief summary of what this post is about
---

# My First Blog Post

Your content here...

## Section Heading

More content with **bold**, *italic*, and [links](https://example.com).
```

### Frontmatter Fields

- **title** (required): The title of your blog post
- **date** (required): Publication date (YYYY-MM-DD format)
- **excerpt** (required): Brief summary shown on the blog homepage

## 📁 Project Structure

```
blog-website/
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx          # Individual blog post page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Main layout with header/footer
│   └── page.tsx                  # Homepage with all posts
├── lib/
│   └── posts.ts                  # Post fetching and processing logic
├── posts/
│   └── welcome-to-my-blog.md    # Your blog posts folder
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Customization

### Change Blog Title and Description

Edit `app/layout.tsx`:
```tsx
// Update the title in the header
<h1 className="text-3xl font-bold">Your Blog Name</h1>

// Update the metadata
export const metadata: Metadata = {
  title: 'Your Blog Title',
  description: 'Your blog description',
};
```

### Customize Colors

Edit `tailwind.config.js` to change the primary and secondary colors:
```js
theme: {
  extend: {
    colors: {
      primary: '#1f2937',      // Change this
      secondary: '#6366f1',    // And this
    },
  },
},
```

### Modify Styles

Edit `app/globals.css` to customize fonts, spacing, and other styles.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

That's it! Your blog is now live.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

### Deploy to Other Platforms

See [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)

## 📦 Build for Production

```bash
npm run build
npm start
```

The `build` command creates an optimized production build.

## 📚 Markdown Tips

Your blog supports full markdown formatting:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
~~Strikethrough~~

- Bullet point
- Another point

1. Numbered item
2. Another item

[Link text](https://example.com)

![Image alt text](image-url.jpg)

`inline code`

```
code block
```

> Blockquote
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **gray-matter** - Parse YAML frontmatter from posts
- **marked** - Parse markdown to HTML
- **date-fns** - Date formatting utilities

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips & Tricks

- Posts are automatically sorted by date (newest first)
- File names become post slugs (URL-friendly names)
- The blog automatically picks up new markdown files
- Posts support all standard markdown syntax
- Use consistent date formatting: YYYY-MM-DD

## 🤝 Support

If you have questions or need help:

1. Check the Next.js documentation: https://nextjs.org/docs
2. Review the example post in `posts/welcome-to-my-blog.md`
3. Feel free to customize the code to fit your needs

## 🎉 Next Steps

1. ✅ Install dependencies
2. ✅ Start the dev server
3. ✅ Create your first post
4. ✅ Customize the styling
5. ✅ Deploy to the web

Happy blogging! 📝✨
