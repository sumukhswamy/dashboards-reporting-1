/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: false,
});

export const converter = {
  makeHtml: (markdown: string): string => md.render(markdown ?? ''),
};
