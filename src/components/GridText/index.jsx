import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({
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
            <Styled.GridElement key={el.title}>
              <Heading as="h3" size="normal" darkBG={background}>
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  sectionId: P.string,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({ title: P.string.isRequired, description: P.string.isRequired })
      .isRequired,
  ),
  background: P.bool,
};
