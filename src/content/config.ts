// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({ 
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
  }),
});

const projectsCollection = defineCollection({ 
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
};
