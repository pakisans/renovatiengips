import ResponsiveGallery from 'react-responsive-gallery';
import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';


// const images=[
//           {
//               src: '/images/plaster/image1.jpg'
//           },
//           {
//               src: '/images/plaster/image2.jpg'
//           },
//           {
//               src: '/images/plaster/image3.jpg'
//           },
//           {
//               src: '/images/plaster/image4.jpg'
//           },
//           {
//               src: '/images/plaster/image5.jpg'
//           },
//           {
//               src: '/images/plaster/image6.jpg'
//           },
//           {
//               src: '/images/plaster/image7.jpg'
//           },
//           {
//               src: '/images/plaster/image8.jpg'
//           },
//           {
//               src: 'images/plaster/image9.jpg'
//           },
//           {
//               src: '/images/plaster/image10.jpg'
//           },
//           {
//               src: '/images/plaster/image1.jpg'
//           },
//           {
//               src: '/images/plaster/image1.jpg'
//           },
//         ];
    
const ResponsiveGallerys = (props) => {
    console.log(props)
    const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
//   const images = [
//     '../images/plaster/image1.jpg',
//     '../images/plaster/image2.jpg',
//     '../images/plaster/image3.jpg',
//     '../images/plaster/image4.jpg',
//     '../images/plaster/image5.jpg',
//     '../images/plaster/image6.jpg',
//     '../images/plaster/image7.jpg',
//     '../images/plaster/image8.jpg',
//     '../images/plaster/image9.jpg',
//     '../images/plaster/image10.jpg',
//     '../images/plaster/image11.jpg',
//     '../images/plaster/image12.jpg',
//     '../images/plaster/image13.jpg',
//   ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {props.images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          height="300"
          key={ index }
          style={{ margin: '8px', borderRadius: '15px' }}
          alt="newImage"
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ props.images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
    //   return <ResponsiveGallery images={images}/>
}

export default ResponsiveGallerys;
    