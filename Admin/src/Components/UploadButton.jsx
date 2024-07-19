import React from 'react';

const UploadButton = () => {
    const text_style={
        
            width: '244px',
            height: '19px',
            gap: '0px',
            opacity: '0px',
            fontFamily: 'Roboto',
            fontSize: '20px',
            fontWeight: '300',
            lineHeight: '18.75px',
            textAlign: 'left',
            background: '#FFFFFF',
            padding: '1px', // Adjust padding as needed
            borderRadius: '4px', // Optional: Add border radius for rounded corners
          
    };
  return (
    <div className="mt-2 text-xs text-gray-600 font-pop flex items-center ">
        <button className="bg-gray text-black flex items-center justify-center w-14 h-14 rounded-full">
        <span className="text-xl font-bold">+</span>
      </button>
      <span
        className="ml-2 flex-grow"
        style={text_style}>
        Keep up with the latest in any topic
      </span>
    </div>
  );
};

export default UploadButton;
