import React from 'react';
import ImageGallery from "react-image-gallery";
<<<<<<< HEAD:src/components/property-page/PropertyGallery.jsx
import '../src/components/property-page/PropertyGallery.css' 
=======
import '../components/PropertyGallery.css' 
>>>>>>> parent of 8c30fae (created a property-page folder and broke everything.):src/components/PropertyGallery.jsx
import 'react-image-gallery/styles/css/image-gallery.css';

export default function PropertyGallery(){

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];


return(
<div className="myGalleryContainer">
    
<ImageGallery
thumbnailPosition={'right'}
showPlayButton={false}
items={images} />
    </div>

);
}

/*https://www.npmjs.com/package/react-image-gallery*/