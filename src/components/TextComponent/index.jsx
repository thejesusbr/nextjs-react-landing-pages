import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children = '' }) => {
  return <Styled.SimpleText dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.string,
};
