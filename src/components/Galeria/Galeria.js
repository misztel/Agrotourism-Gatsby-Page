import React, { useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import GalleryCategories from './Categories';
import Row from '../Row/Row';
import Column from '../Column/Column';
import Container from '../Container/Container';
import GalleryImages from './Images';
import { colors } from '../../utils/colors';
import { gallery } from '../../utils/gallery';
import Footer from '../Footer/Footer';

const categories = gallery.map(item => {
  return item.category;
});
const categoriesUnique = categories.filter((item, index) => {
  return categories.indexOf(item) >= index;
});

const StyledCategories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0px;
`;

const StyledCategoriesLink = styled.div`
  font-weight: 800;
  font-size: 20px;
  margin: 0.5rem 10px 0 10px;
  color: ${colors.dark};
  position: relative;
  padding: 10px 0px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  ::before {
    content: '';
    position: absolute;
    width: 35px;
    height: 2px;
    background-color: ${colors.primary};
    top: 38px;
    transition: all 0.5s ease-in-out;
  }
  :hover {
    ::before {
      width: 100%;
    }
  }
  &.active {
    ::before {
      width: 100%;
    }
  }
`;

const Gallery = () => {
  const [categoryx, setCategoryState] = useState('Widoki');

  return (
    <>
      <Row>
        <Container>
          <Column xs="12">
            <StyledCategories>
              {categoriesUnique.map(category => {
                return (
                  <StyledCategoriesLink
                    onClick={() => setCategoryState(category)}
                    key={category}
                    className={category === categoryx ? 'active' : ''}
                  >
                    {category}
                  </StyledCategoriesLink>
                );
              })}
            </StyledCategories>
          </Column>
        </Container>
      </Row>
      <Row>
        <Container>
          <GalleryImages activeCategory={categoryx} />
        </Container>
      </Row>
      <Footer />
    </>
  );
};

export default Gallery;
