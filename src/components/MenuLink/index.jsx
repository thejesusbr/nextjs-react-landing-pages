import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, url, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
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
