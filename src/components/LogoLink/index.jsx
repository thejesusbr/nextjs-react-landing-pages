import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, imgSrc = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.MyStyle href={link}>
        {!!imgSrc && <img src={imgSrc} alt={text} />}
        {!imgSrc && text}
      </Styled.MyStyle>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imgSrc: P.string,
  link: P.string.isRequired,
};
