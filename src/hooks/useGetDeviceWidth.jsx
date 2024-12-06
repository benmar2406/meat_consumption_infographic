import { useContext } from "react";
import { DeviceContext } from "../context/deviceContext";

const useGetDeviceWidth = () => {
    const { notDesktop } = useContext(DeviceContext);
    return { notDesktop };
};

export default useGetDeviceWidth;
