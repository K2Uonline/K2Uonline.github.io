# Personal Website

This is a personal website built with Next.js 14, TypeScript, and Tailwind CSS. The website features multiple content sections where you can share your thoughts, experiences, and resources.

## 📚 Website Structure

The website consists of the following pages:

- **Home**: Landing page showing the three most recent posts from all categories
- **Life**: Personal posts about your life experiences and thoughts
- **Work**: Professional experiences, career updates, and work-related content
- **Jesus**: Faith-related content and reflections
- **Projects**: Showcase of your personal and professional projects
- **Resources**: Helpful links, tools, and resources you want to share
- **Response**: A page for responses and interactions

## 📁 Project Structure

```
├── app/                  # Main application directory
│   ├── components/      # Reusable UI components
│   ├── lib/            # Utility functions and data handling
│   ├── (routes)/       # Website pages
│   └── layout.tsx      # Root layout component
├── content/            # Your content files
│   ├── life/          # Life-related posts
│   ├── work/          # Work-related posts
│   ├── jesus/         # Faith-related posts
│   ├── projects/      # Project posts
│   └── resources/     # Resource posts
├── public/            # Static files (images, etc.)
└── types/             # TypeScript type definitions
```

## 🔧 Post Structure

Each post is written in Markdown format with front matter and has the following structure:

```markdown
---
title: "Post Title"
date: "2024-03-20"
category: "life" # (life, work, jesus, projects, resources, response)
excerpt: "A brief description of the post"
coverImage: "/images/post-image.jpg" # (optional)
---

Post content goes here...
```

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Creating New Posts

To create a new post:

1. Create a new markdown file in the appropriate content directory
2. Add the required front matter (title, date, category, excerpt)
3. Write your content using Markdown
4. Add any images to the `public/images` directory

## 💡 Features

- 📱 Responsive design that works on all devices
- 🎨 Modern and clean user interface
- 🔍 SEO optimized
- 📊 Fast page loads
- 📝 Easy content management using Markdown
- 🖼️ Support for images and media
- 🔗 Easy link sharing
- 🏠 Featured posts on homepage

## 🛠️ Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- MDX for content
- React 