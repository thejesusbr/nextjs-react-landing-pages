import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = {}) => {
  pagesData = pagesData?.data || [{}];
  return pagesData.map((data) => {
    const {
      attributes: {
        title = '',
        slug = '',
        footer: footerHtml = '',
        sections = [],
        menu = {},
      } = '',
    } = data;
    return {
      title,
      slug,
      footerHtml,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

// const dados = require('./dados.json');
// console.log(mapData(dados.data));
