export const mapMenu = (menu = {}) => {
  const {
    new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { data: { attributes: { url: imgSrc = '' } = '' } = '' } = '',
    menu_link: links = [],
  } = menu;
  return {
    newTab,
    text,
    link,
    imgSrc,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const { link_text: text = '', url = '', new_tab: newTab = false } = item;
    return {
      text,
      url,
      newTab,
    };
  });
};
