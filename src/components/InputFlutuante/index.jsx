import InputPesquisa from "components/Input_Pesquisa";
import { CodigoContext } from "contexts/CodigoContexto";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./InputFlutuante.module.css";

const InputFlutuante = () => {
    const { clickPesquisa, setClickPesquisa } = useContext(CodigoContext);
    return (<>
        {clickPesquisa
            ? <span className={styles.input_span_code_edition}>
                <InputPesquisa placText='Busque por algo' text='text' stilos='input_flutuante' />
                <IoClose onClick={() => { setClickPesquisa((prev) => prev = !prev) }} size={28} color='white' />
            </span>
            : <></>
        }
    </>
    )
}

export default InputFlutuante;