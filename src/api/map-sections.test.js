import {
  mapSections,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSectionGridText,
  mapSectionGridImage,
} from './map-sections';
import sectionData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const section = mapSections();
    expect(section).toEqual([]);
  });

  it('tests sending invalid data', () => {
    let section = mapSections([{}]);
    expect(section).toEqual([{}]);
    section = mapSections([
      { __component: 'section.section-grid', text_grid: [], image_grid: [] },
    ]);
    expect(section).toEqual([
      { __component: 'section.section-grid', text_grid: [], image_grid: [] },
    ]);
    section = mapSections([{ __component: 'section.section-grid' }]);
    expect(section).toEqual([{ __component: 'section.section-grid' }]);
  });

  it('it should map section-two-columns with empty data', () => {
    const section = mapSectionTwoColumns();
    expect(section.title).toBe('');
    expect(section.text).toBe('');
    expect(section.imgSrc).toBe('');
    expect(section.background).toBe(false);
  });

  it('it should map section-two-columns with data', () => {
    const data = [sectionData.data[0].attributes.sections[0]];
    const section = mapSections(data)[0];
    expect(section.title).toBe(data[0].title);
    expect(section.text).toBe(data[0].description);
    expect(section.imgSrc).toBe(data[0].image.data.attributes.url);
    expect(section.background).toBe(data[0].metadata.background);
  });

  it('it should map section-content with empty data', () => {
    const section = mapSectionContent();
    expect(section.title).toBe('');
    expect(section.html).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.background).toBe(false);
  });

  it('it should map section-content with data', () => {
    const data = [sectionData.data[0].attributes.sections[1]];
    const section = mapSections(data)[0];
    expect(section.title).toBe(data[0].title);
    expect(section.html).toBe(data[0].content);
    expect(section.sectionId).toBe(data[0].metadata.section_id);
    expect(section.background).toBe(data[0].metadata.background);
  });

  it('it should map section-grid with empty data', () => {
    const section = mapSectionGridText();
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.grid).toEqual([]);
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('it should map section-grid with text', () => {
    const data = [sectionData.data[0].attributes.sections[2]];
    const image_grid = data[0].text_grid.map((item) => {
      const { title, description } = item;
      return {
        title,
        description,
      };
    });

    const section = mapSections(data)[0];
    expect(section.title).toBe(data[0].title);
    expect(section.description).toBe(data[0].description);
    expect(section.grid).toEqual(image_grid);
    expect(section.background).toBe(data[0].metadata.background);
    expect(section.sectionId).toBe(data[0].metadata.section_id);
  });

  it('it should map image-grid with empty data', () => {
    const section = mapSectionGridImage();
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.grid).toEqual([]);
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('tests image-grid with invalid data', () => {
    const data = {
      title: '',
      description: '',
      image_grid: [{ image: { data: { attributes: {} } } }],
      metadata: { section_id: '', background: false },
    };
    const section = mapSectionGridImage(data);
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.grid).toEqual([{ altText: '', imgSrc: '' }]);
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('it should map section-grid with images', () => {
    const data = [sectionData.data[0].attributes.sections[3]];
    const section = mapSections(data)[0];
    expect(section.title).toBe(data[0].title);
    expect(section.description).toBe(data[0].description);
    expect(section.grid).toEqual(
      data[0].image_grid.map((img) => {
        const {
          image: {
            data: {
              attributes: { url: imgSrc = '', alternativeText: altText = '' },
            },
          },
        } = img;
        return {
          altText,
          imgSrc,
        };
      }),
    );
    expect(section.sectionId).toBe(data[0].metadata.section_id);
    expect(section.background).toBe(data[0].metadata.background);
  });
});
