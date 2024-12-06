  import React, { useState, useEffect } from 'react';
  
  const useGetDeviceWidth = () => {
  
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [notDesktop, setNotDesktop] = useState();
    
    console.log(notDesktop)

    useEffect(() => {

        setNotDesktop(screenWidth < 900);

        const handleResize = () =>  {
            setScreenWidth(window.innerWidth);
            setNotDesktop(screenWidth < 900);
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
        }, [screenWidth]);
  
}

export default useGetDeviceWidth;