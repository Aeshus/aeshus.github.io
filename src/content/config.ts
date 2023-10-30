import { z, defineCollection } from "astro:content";

const writingsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      startDate: z.date(),
      endDate: z.date(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
    })
});

export const collections = {
  writings: writingsCollection,
  projects: projectsCollection
};
