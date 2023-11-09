import { z, defineCollection } from 'astro:content';

const writingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z
      .object({
        url: z.string(),
        alt: z.string()
      })
      .optional(),
    tags: z.array(z.string()).optional()
  })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      startDate: z.date(),
      endDate: z.date().optional(),
      image: z
        .object({
          url: image(),
          alt: z.string()
        })
        .optional(),
      socials: z
        .object({
          github: z.string().optional()
        })
        .optional()
    })
});

export const collections = {
  writings: writingsCollection,
  projects: projectsCollection
};
