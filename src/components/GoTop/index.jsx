import P from 'prop-types';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#">
      <KeyboardArrowUp aria-label="Go to top" title="Go to top" />
    </Styled.Container>
  );
};
