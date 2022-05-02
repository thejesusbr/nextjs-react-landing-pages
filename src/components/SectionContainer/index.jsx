import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return <Styled.MyStyle>{children}</Styled.MyStyle>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
