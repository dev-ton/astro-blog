import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { PostModule } from '../types/types';

// TODO: currently it fails on build. Fix it and perhaps utilize the collections.

export const GET: APIRoute = async ({ site }) => {
    const posts = await getCollection('posts'); // collection not defined for now, refer to: https://docs.astro.build/en/guides/content-collections/

    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: site?.toString() || '',
        items: posts.map((post: PostModule) => ({
            title: post.frontmatter.title,
            pubDate: post.frontmatter.pubDate,
            description: post.frontmatter.description,
            link: `/posts/${post.frontmatter.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
