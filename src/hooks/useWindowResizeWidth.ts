import { useEffect, useState } from "react";

export default function useWindowResizeWidth(){
    const [screenSize, setScreenSize] = useState(0);
    const resize = () => setScreenSize(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize);
    }, []);

    return screenSize;
}
