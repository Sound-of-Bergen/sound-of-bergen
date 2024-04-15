import { z, defineCollection } from 'astro:content';


const artistCollection = defineCollection({
    type: 'content',
    schema: z.object({
        artist: z.string(),
        imagePath: z.string(),
        altText: z.string(),
        youtubeLink: z.string(),
        spotifyLink: z.string(),
    }),
});

export const collections = {
    artists: artistCollection,
};
