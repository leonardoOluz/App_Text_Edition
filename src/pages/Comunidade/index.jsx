import ConteudoDaSecao from "components/ConteudoDaSecao";
import { useLocation } from "react-router-dom";

const Comunidade = () => {
    let location = useLocation();
    console.log(location.pathname)
    return (<main>
        <ConteudoDaSecao to={location.pathname}/>
    </main>)
};

export default Comunidade;