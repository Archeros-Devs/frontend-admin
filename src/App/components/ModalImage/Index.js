import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import {Image} from 'react-bootstrap'
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 
export default class LightboxExample extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: this.props.images,
  };
 
  render() {
    const { photoIndex, isOpen } = this.state;
    const { images, alt } = this.props
 
    return (
      <div>
        <div className='img-container'>
        {images &&
            images.map((image, id) => {
                return  <img className='img' src={image} alt={`${alt}#${id}`} key={id} onClick={() => this.setState({ isOpen: true, photoIndex: id })}/>
            })
        }
        </div>
        {isOpen && (
          <Lightbox
            reactModalStyle={{overlay: {zIndex: 9999}}}
            mainSrc={images[photoIndex]}
            nextSrc={images.length > 1 && images[(photoIndex + 1) % images.length]}
            prevSrc={images.length > 1 && images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}