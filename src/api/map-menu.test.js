import { mapMenu, mapMenuLinks } from './map-menu';
import data from './dados.json';

const { menu: menuData } = data.data[0].attributes;
const {
  new_tab,
  logo_text,
  logo: {
    data: {
      attributes: { url: imgSrc },
    },
  },
  logo_link,
  menu_link,
} = menuData;

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.imgSrc).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match required keys and values', () => {
    const menu = mapMenu(menuData);
    expect(menu.newTab).toBe(menuData.new_tab);
    expect(menu.text).toBe(menuData.logo_text);
    expect(menu.imgSrc).toBe(menuData.logo.data.attributes.url);
    expect(menu.link).toBe(menuData.logo_link);
    expect(menu.links[0].url).toBe(menuData.menu_link[0].url);
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should return a default object if empty array is passed', () => {
    const links = mapMenuLinks([{}]);
    expect(links).toEqual([{ text: '', url: '', newTab: false }]);
  });

  it('should map links if value is passed', () => {
    const links = mapMenuLinks(menuData.menu_link);
    expect(links[0].text).toEqual(menuData.menu_link[0].link_text);
    expect(links[0].url).toEqual(menuData.menu_link[0].url);
    expect(links[0].newTab).toEqual(menuData.menu_link[0].new_tab);
  });
});
