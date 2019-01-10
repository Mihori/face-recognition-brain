import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center'>
      <img src={imageUrl} alt='' width='500px' height='auto' />
    </div>
  )
}

export default FaceRecognition;
