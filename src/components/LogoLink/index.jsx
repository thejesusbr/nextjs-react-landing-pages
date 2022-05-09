import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';

export const LogoLink = ({ text, imgSrc = '', link }) => {
  const nextLink = link.match(/^\//) ? true : false;
  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.MyStyle>
            {!!imgSrc && <img src={imgSrc} alt={text} />}
            {!imgSrc && text}
          </Styled.MyStyle>
        </Link>
      </Heading>
    );
  }
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
