
interface SingleImage {
  imageUrl: string;
  caption?: string;
  altName?: string;
}

export const images: SingleImage[] = [
  {
    imageUrl: 'imageslider/img1.jpg',
    caption: 'This is a caption for image number 1, you can change it to whatever you want.',
    altName: 'Image 1',
  },
  {
    imageUrl: 'imageslider/img2.jpg',
    caption: 'This is a caption for image number 2, you can change it to whatever you want.',
    altName: 'Image 2',
  },
  {
    imageUrl: 'imageslider/img3.jpg',
    caption: 'This is a caption for image number 3, you can change it to whatever you want.',
    altName: 'Image 3',
  },
  {
    imageUrl: 'imageslider/img4.jpg',
    caption: 'This is a caption for image number 4, you can change it to whatever you want. Let\'s make this caption a bit longer to see how it looks like. Let\'s make it even longer now to see if the wrapper is functioning properly.',
    altName: 'Image 4',
  },
  {
    imageUrl: 'imageslider/img5.jpg',
    caption: 'This is a caption for image number 5, you can change it to whatever you want.',
    altName: 'Image 5',
  },
];
