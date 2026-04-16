import { glob } from 'astro/loaders';
import { defineCollection } from 'astro/content/config';
import { z } from 'astro/zod'

const projects = defineCollection({
    loader: glob({pattern: "src/content/projects/**/*.md"}),
    schema: ({image}) => z.object({
        id: z.number(),
        title: z.string().max(50),
        slug: z.string(),
        category: z.preprocess(
                    (val) => (Array.isArray(val) ? val : [val]),
                    z.array(z.enum(["Placeholder 1", "Placeholder 2"]))),
        year: z.string().max(4),
        featuredImage: image().optional(),
        liveSite: z.url().optional(),
        github: z.url().optional(),
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean()
    })
});

const blog = defineCollection({
    loader: glob({pattern: "src/content/blog/**/*.md"}),
    schema: ({image}) => z.object({
        id: z.number(),
        slug: z.string().max(50),
        title: z.string().max(50),
        publishedDate: z.date(),
        image: image(),
        category: z.enum(["Placeholder 1", "Placeholder 2"]), // change and add blog categories here
        isDraft: z.boolean()
    })
})


export const collections = { projects, blog };