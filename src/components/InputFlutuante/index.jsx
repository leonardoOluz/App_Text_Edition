import InputPesquisa from "components/Input_Pesquisa";
import { CodigoContext } from "contexts/CodigoContexto";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./InputFlutuante.module.css";
import { usePost } from "hooks/usePost";

const InputFlutuante = () => {
    const { clickPesquisa, setClickPesquisa } = useContext(CodigoContext);
    const {searchPost} = usePost();
    return (<>
        {clickPesquisa
            ? <span className={styles.input_span_code_edition}>
                <InputPesquisa change={searchPost} placText='Busque por algo' text='text' stilos='input_flutuante' />
                <IoClose onClick={() => { setClickPesquisa((prev) => prev = !prev) }} size={28} color='white' />
            </span>
            : <></>
        }
    </>
    )
}

export default InputFlutuante;