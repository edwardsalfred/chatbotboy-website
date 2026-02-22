---
description: Create a new blog post
---

When the user asks you to create a new blog post, follow these steps:

1. Request or confirm the title and content of the blog post from the user.
2. Ask if the user wants an image generated or if they have one. If generated, use the `generate_image` tool.
3. Once the content and image are ready, create the new blog post page at `src/app/insights/slugified-title/page.tsx`.
4. The blog post page should contain:
   - Header and Footer components.
   - The generated or provided hero image.
   - A Table of Contents section right above the main content of the post.
   - The main text of the post with each heading properly containing an `id` that matches the corresponding Table of Contents link.
5. Update `src/app/insights/page.tsx` and `src/components/LowerSections.tsx` to add the new blog post to the `posts` array, making sure to provide the `link` and `image` fields.
