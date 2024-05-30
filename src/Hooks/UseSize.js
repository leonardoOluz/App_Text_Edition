import { CodigoContext } from "context/CodigoContexto";
import { useEffect, useContext } from "react";

const useSize = () => {
    const { setWindowSize, windowSize, setClickPesquisa } = useContext(CodigoContext);

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener("resize", windowSizeHandler)
        setClickPesquisa((prev) => {
            if(windowSize[0] > 768) return false;
        })
        return () => {
            window.removeEventListener("resize", windowSizeHandler)
        }
    }, [windowSize, setWindowSize, setClickPesquisa])

    return windowSize;
}

export default useSize;