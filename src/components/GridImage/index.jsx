import P from 'prop-types';
import * as Styled from './styles';
import {} from '../GridContent';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({
  title,
  sectionId = '',
  description,
  grid,
  background = false,
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading as="h2" size="huge" uppercase darkBG={background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.GridContainer>
          {grid.map((el) => (
            <Styled.GridElement key={el.imgSrc}>
              <Styled.Image src={el.imgSrc} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  sectionId: P.string,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      imgSrc: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
