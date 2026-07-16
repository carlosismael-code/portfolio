import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).min(1),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    status: z.enum(['wip', 'shipped', 'archived']).default('shipped'),
    role: z.string().optional(),
    year: z.number().optional(),
    github: z.string().url().or(z.literal('')).optional(),
    demo: z.string().url().or(z.literal('')).optional(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
