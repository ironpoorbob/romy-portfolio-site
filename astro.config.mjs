// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const base = normalizeBase(process.env.BASE_PATH);

function normalizeBase(value) {
    if (!value || value === '/') return '/';
    return `/${value.replace(/^\/|\/$/g, '')}`;
}

function withBase(path) {
    if (!path || base === '/' || !path.startsWith('/')) return path;
    return `${base}${path}`;
}

function prefixMarkdownRootPaths() {
    return (tree) => {
        const visit = (node) => {
            if (!node || typeof node !== 'object') return;

            if (node.type === 'element' && node.properties) {
                if (node.tagName === 'img' && typeof node.properties.src === 'string') {
                    node.properties.src = withBase(node.properties.src);
                }

                if (node.tagName === 'a' && typeof node.properties.href === 'string') {
                    node.properties.href = withBase(node.properties.href);
                }
            }

            if (Array.isArray(node.children)) {
                node.children.forEach(visit);
            }
        };

        visit(tree);
    };
}

// https://astro.build/config
export default defineConfig({
    site: 'https://clay-astro-theme.netlify.app',
    base,
    integrations: [sitemap()],
    markdown: {
        rehypePlugins: [prefixMarkdownRootPaths],
    },
});
