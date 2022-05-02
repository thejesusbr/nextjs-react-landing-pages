export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { image_grid = [], text_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapSectionGridText(section);
      }
      if (image_grid.length > 0) {
        return mapSectionGridImage(section);
      }
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: imgSrc = '' } = '' } = '' } = '',
    metadata: {
      background: background = false,
      section_id: sectionId = '',
    } = '',
  } = section;
  return {
    component,
    sectionId,
    title,
    text,
    imgSrc,
    background,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;
  return {
    component,
    sectionId,
    title,
    html,
    background,
  };
};

export const mapSectionGridText = (section = {}) => {
  const {
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;
  return {
    component: 'section.section-grid-text',
    sectionId,
    title,
    description,
    grid: grid.map((item) => {
      const { title, description } = item;
      return {
        title,
        description,
      };
    }),
    background,
  };
};

export const mapSectionGridImage = (section = {}) => {
  const {
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;
  return {
    component: 'section.section-grid-image',
    sectionId,
    title,
    description,
    grid: grid.map((img) => {
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
    background,
  };
};
