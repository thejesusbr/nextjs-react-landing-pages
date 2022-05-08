import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';
import { Base } from '../Base';
import Head from 'next/head';
// import { useEffect, useState } from 'react';
// import * as qs from 'qs';
import { PageNotFound } from '../PageNotFound';
// import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
// import { useLocation } from 'react-router-dom';
import config from '../../config';
// import { mapData } from '../../api/map-data';

function Home({ data = null }) {
  // const [data, setData] = useState([]);
  // const location = useLocation();

  // useEffect(() => {
  //   const pathname = location.pathname.replace(/[^a-zA-Z0-9-]/gi, '');
  //   const slug = pathname ? pathname : config.defaultSlug;

  //   const load = async () => {
  //     try {
  //       const query = qs.stringify(
  //         {
  //           filters: { slug: slug },
  //           populate: [
  //             'menu',
  //             'menu.logo',
  //             'menu.menu_link',
  //             'sections',
  //             'sections.image',
  //             'sections.image_grid',
  //             'sections.image_grid.image',
  //             'sections.text_grid',
  //             'sections.metadata',
  //           ],
  //         },
  //         { encodeValuesOnly: true },
  //       );
  //       const data = await fetch(config.url + query);
  //       const json = await data.json();
  //       if (json.error) throw new Error(json.error);
  //       const pageData = mapData(json);
  //       setData(pageData[0]);
  //     } catch (e) {
  //       console.log('Error: ', e.message);
  //       setData(undefined);
  //     }
  //   };
  //   load();
  // }, [location]);

  // useEffect(() => {
  //   console.log('data: ', data);
  //   if (data === undefined) {
  //     document.title = `Página não encontrada. | ${config.siteName}`;
  //   }
  //   if (data && !data.slug) {
  //     document.title = `Carregando... | ${config.siteName}`;
  //   }
  //   if (data && data.title) {
  //     document.title = `${data.title} | ${config.siteName}`;
  //   }
  // }, [data]);

  // if (!data) {
  //   return <PageNotFound />;
  // }

  // if (data && !data.slug) {
  //   return <Loading />;
  // }

  const { menu, sections, footerHtml, title } = data[0];
  const { links, text, link, imgSrc } = menu;
  // console.log('data: ', data);

  return (
    <Styled.Wrapper>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, imgSrc }}
      >
        <Head>
          <title>
            {title} | {config.siteName}
          </title>
        </Head>
        {sections.map((section, index) => {
          const { component } = section;
          if (component === 'section.section-two-columns') {
            return <GridTwoColumns key={index} {...section} />;
          }
          if (component === 'section.section-content') {
            return <GridContent key={index} {...section} />;
          }
          if (component === 'section.section-grid-text') {
            return <GridText key={index} {...section} />;
          }
          if (component === 'section.section-grid-image') {
            return <GridImage key={index} {...section} />;
          }
        })}
      </Base>
    </Styled.Wrapper>
  );
}

export default Home;

Home.propTypes = {
  data: P.object,
};
