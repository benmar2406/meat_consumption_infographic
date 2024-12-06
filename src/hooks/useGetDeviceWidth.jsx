import { useEffect, useState, useContext } from "react";
import { DeviceContext } from "../context/deviceContext";
  
const useGetDeviceWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { notDesktop, setNotDesktop } = useContext(DeviceContext);

    useEffect(() => {

        setNotDesktop(window.innerWidth < 900);

        const handleResize = () =>  {
            setScreenWidth(window.innerWidth);
            setNotDesktop(screenWidth < 900);
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth]);

    return { notDesktop };
}
        }, [screenWidth]);
  
}export default useGetDeviceWidth;