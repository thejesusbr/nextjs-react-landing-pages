import { mapData } from './map-data';
import data from './dados.json';

// Data form json for conference
const { title, slug, footer: footerHtml } = data.data[0].attributes;

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData()[0];
    expect(pageData.title).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.footerHtml).toBe('');
  });

  it('should map data if there is data', () => {
    const pageData = mapData(data)[0];
    expect(pageData.title).toBe(title);
    expect(pageData.slug).toBe(slug);
    expect(pageData.footerHtml).toBe(footerHtml);
  });
});
