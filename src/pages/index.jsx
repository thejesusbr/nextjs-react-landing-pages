import P from 'prop-types';
import React from 'react';
import config from '../config';
import { mapData } from '../api/map-data';
import * as qs from 'qs';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const slug = config.defaultSlug;
  const query = qs.stringify(
    {
      filters: { slug: slug },
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
  console.log(config.url + query);
  const raw = await fetch(config.url + query);
  const json = await raw.json();
  const data = mapData(json);
  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.object,
};
