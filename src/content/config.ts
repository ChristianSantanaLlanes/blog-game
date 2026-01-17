import { defineCollection, z } from 'astro:content';

const news = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        image: z.string().optional(),
    }),
});

const guides = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        game: z.string().optional(),
        image: z.string().optional(),
    }),
});

const tutorials = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        level: z.enum(['Principiante', 'Intermedio', 'Avanzado']),
        image: z.string().optional(),
    }),
});

export const collections = { news, guides, tutorials };

