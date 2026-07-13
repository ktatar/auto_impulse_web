import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://kivanctatar.com',
  devToolbar: { enabled: false },
  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener', 'noreferrer']
          }
        ]
      ]
    })
  },
  trailingSlash: 'ignore'
});
