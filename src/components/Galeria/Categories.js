import React, { useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { gallery } from '../../utils/gallery';

const categories = gallery.map(item => {
  return item.category;
});
const categoriesUnique = categories.filter((item, index) => {
  return categories.indexOf(item) >= index;
});

const StyledCategories = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledCategoriesLink = styled.div`
  font-weight: 800;
  font-size: 20px;
  margin-top: 0.5rem;
  color: ${colors.dark};
  position: relative;
  padding: 10px;

  ::before {
    content: '';
    position: absolute;
    width: 35px;
    height: 2px;
    background-color: ${colors.primary};
    top: 38px;
  }
`;

const GalleryCategories = () => {
  const [categoryx, setCategoryState] = useState('Widoki');

  const changeCategory = x => {
    setCategoryState(categoryx === x);
  };

  return (
    <StyledCategories wichCategory={categoryx}>
      {categoriesUnique.map(category => {
        return (
          <StyledCategoriesLink
            onClick={() => changeCategory(category)}
            key={category}
          >
            {category}
          </StyledCategoriesLink>
        );
      })}
    </StyledCategories>
  );
};

export default GalleryCategories;
