import type { MarkdownInstance } from 'astro';
import type { RSSFeedItem } from '@astrojs/rss';

interface PostMetadata {
    title: string,
    pubDate: string,
    description: string,
    author: string,
    image: {
        url: string,
        alt: string
    },
    tags: string[],
    slug: string
}


type PostModule = MarkdownInstance<PostMetadata>;

interface MyFeedItem extends RSSFeedItem {
    tags?: string[]
}