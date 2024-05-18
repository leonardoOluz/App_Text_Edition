import ConteudoDaSecao from "components/ConteudoDaSecao";
import { useLocation } from "react-router-dom";

const EditorDoCodigo = () => {
    let location = useLocation();
    return (<main>
        <ConteudoDaSecao to={location.pathname} />
    </main>)
}

export default EditorDoCodigo;