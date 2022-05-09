import Link from 'next/link';
import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, url, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = url.match(/^\//) ? true : false;
  if (nextLink) {
    return (
      <Link href={url} passHref>
        <Styled.MyStyle href={url} target={target}>
          {children}
        </Styled.MyStyle>
      </Link>
    );
  }
  return (
    <Styled.MyStyle href={url} target={target}>
      {children}
    </Styled.MyStyle>
  );
};

MenuLink.propTypes = {
  children: P.node,
  url: P.string.isRequired,
  newTab: P.bool,
};
