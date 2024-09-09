import React from 'react';

const Footer = () => {
  return (
    <div className='flex h-56 justify-around pb-10 items-end font-light text-sub-text'>
        <div>Made with &#10084; by Kaitlyn Vo</div>
        <div className='flex flex-row'>
            <div className='font-normal'>Contact</div>
            <div> - <a href='mailto:kqvo@ucdavis.edu'>Email</a> | <a href='https://www.linkedin.com/in/kaitlynqvo' target='_blank' rel='noopener noreferrer'>LinkedIn</a></div>
        </div>
    </div>
  )
}

export default Footer;