import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.MyStyle aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.url} url={link.url} newTab={link.newTab}>
          {link.text}
        </MenuLink>
      ))}
    </Styled.MyStyle>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node,
      url: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
