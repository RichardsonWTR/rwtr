import { defineCollection, z } from 'astro:content';
import formatDate from '@/utils/parseStringToDate';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.union([z.string(), z.date()]).transform((val) => formatDate(val)),
    updatedDate: z.union([z.string(), z.date()]).optional().transform((val) => val ? formatDate(val) : undefined),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Thêm readingTime vào schema nhưng đặt là optional
    readingTime: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};

