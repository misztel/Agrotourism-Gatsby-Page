import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Dialog } from '@reach/dialog';
import Column from '../Column/Column';
import { colors } from '../../utils/colors';
// import PropTypes from 'prop-types';
// import { colors } from '../../utils/colors';
import { gallery } from '../../utils/gallery';
import '@reach/dialog/styles.css';

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

const Button = styled.button`
  position: absolute;
  top: -21px;
  right: -21px;
  font-size: 1em;
  line-height: 1.5;
  font-weight: 600;
  border: 2px ${colors.primary} solid;
  padding: 0.3rem 0.7rem;
  border-radius: 1.2rem;
  background-color: ${props => (props.secondary ? '#fff' : colors.primary)};
  color: ${props => (props.secondary ? colors.primary : colors.white)};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: ${props =>
      props.secondary ? colors.primary : colors.secondary};
    border-color: ${props =>
      props.secondary ? colors.primary : colors.secondary};
    color: ${colors.white};
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class GalleryImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null,
    };
  }

  render() {
    const { activeCategory } = this.props;
    const { selectedImage, showLightbox } = this.state;
    return (
      <StyledImages>
        {images(activeCategory).map(image => {
          return (
            <Column nopadd key={image} xxs="12" xs="6" sm="4" md="3">
              <StyledImagesItem
                className="gallery-button"
                type="button"
                onClick={() =>
                  this.setState({ showLightbox: true, selectedImage: image })
                }
              >
                <Image src={image} alt="zachód słońca nad jeziorem" />
              </StyledImagesItem>
            </Column>
          );
        })}
        {showLightbox && (
          <Dialog>
            <Button
              secondary
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
              X
            </Button>
            <Image src={selectedImage} alt="zachód słońca nad jeziorem" />
          </Dialog>
        )}
      </StyledImages>
    );
  }

  //   GalleryImages.propTypes = {
  //     wichCategoryImage: PropTypes.string,
  //   };

  //   GalleryImages.defaultProps = {
  //     wichCategoryImage: 'Widoki',
  //   };
}
