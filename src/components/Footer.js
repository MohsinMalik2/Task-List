import React from 'react';

export const Footer = () => {

    let footerStyle = {
        position:"absolute",
        top: "90vh",
        width:"100%"
    }
  return <footer className='bg-dark text-center text-white' style={footerStyle}  >
      <p className='py-4 mb-0'>Copyrights saved with us</p>
  </footer>;
};
