import React, { useRef} from 'react';
import Webcam from 'react-webcam';
import { Button  } from '@chakra-ui/react'

const CameraComponent = ({capturedImage, setCapturedImage}) => {
  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const reCaputeImage = () => {
    setCapturedImage('')
  }

  return (
    <div className='cameraWrapper'>
      {capturedImage ? (
        <>
        <img src={capturedImage} alt="Captured" />
        <Button colorScheme='blue' onClick={reCaputeImage}>ReCapture</Button>
        </>
      ):(
          <>
        <Webcam audio={false} ref={webcamRef} height={250} width={400} />
        <Button colorScheme='blue' onClick={captureImage}>Capture Photo</Button>
          </>

      )}
    </div>
  );
};

export default CameraComponent;
