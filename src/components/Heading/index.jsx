import * as Styled from './styles';
import P from 'prop-types';

export const Heading = ({
  children,
  darkBG = false,
  as = 'h1',
  size = 'normal',
  uppercase = false,
}) => {
  return (
    <Styled.Title darkBG={darkBG} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  darkBG: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'normal', 'large', 'huge']),
  uppercase: P.bool,
};
