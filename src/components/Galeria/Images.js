import React from 'react';
import styled, { keyframes } from 'styled-components';
import Column from '../Column/Column';
// import PropTypes from 'prop-types';
// import { colors } from '../../utils/colors';
import { gallery } from '../../utils/gallery';

const images = ctg =>
  gallery.filter(item => item.category === ctg).map(item => item.path);

const rotate = keyframes`
  from {
    margin-left: 15px;
    opacity: 0;
  }

  to {
    margin-left: 0px;
    opacity: 1;
  }
`;

const StyledImages = styled.div`
  width: 100%;
`;

const StyledImagesItem = styled.div`
  animation: ${rotate} 0.6s ease-out;
  padding: 5px;
`;

const Image = styled.img`
  width: 100%;
`;

const GalleryImages = ({ activeCategory }) => (
  <StyledImages>
    {images(activeCategory).map(image => {
      return (
        <Column nopadd key={image} xs="12" sm="6" md="3">
          <StyledImagesItem>
            <Image src={image} alt="zachód słońca nad jeziorem" />
          </StyledImagesItem>
        </Column>
      );
    })}
  </StyledImages>
);

//   GalleryImages.propTypes = {
//     wichCategoryImage: PropTypes.string,
//   };

//   GalleryImages.defaultProps = {
//     wichCategoryImage: 'Widoki',
//   };

export default GalleryImages;
