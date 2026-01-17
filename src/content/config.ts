import { defineCollection, z } from 'astro:content';

const news = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        image: image().optional(),
    }),
});

const guides = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        game: z.string().optional(),
        image: image().optional(),
    }),
});

const tutorials = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        level: z.enum(['Principiante', 'Intermedio', 'Avanzado']),
        image: image().optional(),
    }),
});

export const collections = { news, guides, tutorials };
