'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handlePickImageClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          id={name}
          className={classes.input}
          type={'file'}
          accept={'image/png, image/jpg'}
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <div className={classes.preview}>
          {pickedImage
            ? (
              <Image
                src={pickedImage}
                alt={'The image selected by the user'}
                fill
              />
            )
            : <p>No image picked yet</p>
          }
        </div>
        <button
          className={classes.button}
          onClick={handlePickImageClick}
          type={'button'}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
