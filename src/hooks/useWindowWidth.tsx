import { useState, useEffect } from 'react';

const  breakpoints ={
  "phone": 481,
  "smallTablet": 769,
  "smallLaptop": 960,
  "mediaTablet": 1024,
  "tablet": 1280
}

export const useWindowWidth = (): {
  width: number;
  isPhone: boolean;
  isSmallTablet: boolean;
  isTablet: boolean;
  isMediaTablet: boolean;
  isLaptop: boolean;
  isSmallLaptop: boolean;
} => {
  const [width, setWidth] = useState(window?.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    width,
    isPhone: width < breakpoints.phone,
    isSmallTablet: width < breakpoints.smallTablet,
    isTablet: width < breakpoints.tablet,
    isMediaTablet: width < breakpoints.mediaTablet,
    isLaptop: width >= breakpoints.tablet,
    isSmallLaptop: width > breakpoints.smallLaptop,
  };
};
