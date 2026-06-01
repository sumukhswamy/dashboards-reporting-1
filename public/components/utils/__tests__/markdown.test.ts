/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { converter } from '../markdown';

describe('markdown converter', () => {
  it('renders basic markdown', () => {
    expect(converter.makeHtml('**bold**')).toContain('<strong>bold</strong>');
  });

  it('renders tables', () => {
    const table = '| A | B |\n|---|---|\n| 1 | 2 |';
    const html = converter.makeHtml(table);
    expect(html).toContain('<table>');
    expect(html).toContain('<td>1</td>');
  });

  it('renders strikethrough', () => {
    expect(converter.makeHtml('~~deleted~~')).toContain('<s>deleted</s>');
  });

  it('linkifies URLs', () => {
    expect(converter.makeHtml('https://example.com')).toContain(
      '<a href="https://example.com"'
    );
  });

  it('passes through inline HTML', () => {
    expect(converter.makeHtml('<b>bold</b>')).toContain('<b>bold</b>');
  });

  it('handles null/undefined input', () => {
    expect(converter.makeHtml(null as any)).toBe('');
    expect(converter.makeHtml(undefined as any)).toBe('');
  });
});
