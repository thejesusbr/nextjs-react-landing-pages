import * as qs from 'qs';
import config from '../config';
import { mapData } from '../api/map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? slug.replace(/[^a-z0-9-_]/gi) : '';
  // const slug = config.defaultSlug;
  const query = slug
    ? qs.stringify(
        {
          filters: { slug: cleanSlug },
          populate: [
            'menu',
            'menu.logo',
            'menu.menu_link',
            'sections',
            'sections.image',
            'sections.image_grid',
            'sections.image_grid.image',
            'sections.text_grid',
            'sections.metadata',
          ],
        },
        { encodeValuesOnly: true },
      )
    : qs.stringify(
        {
          populate: [
            'menu',
            'menu.logo',
            'menu.menu_link',
            'sections',
            'sections.image',
            'sections.image_grid',
            'sections.image_grid.image',
            'sections.text_grid',
            'sections.metadata',
          ],
        },
        { encodeValuesOnly: true },
      );
  const url = `${config.url}/pages?`;
  const raw = await fetch(url + query);
  const json = await raw.json();
  const data = mapData(json);

  return data;
};
