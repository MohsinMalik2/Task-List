import React from 'react';

export const Footer = () => {

    let footerStyle = {
        position:"fixed",
        bottom: "0",
        width:"100%"
    }
  return <footer className='bg-dark text-center text-white' style={footerStyle}  >
      <p className='py-4 mb-0'>Copyrights saved with us</p>
  </footer>;
};
