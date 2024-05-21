import ConteudoDaSecao from "components/ConteudoDaSecao";
import { useLocation } from "react-router-dom";

const EditorDoCodigo = () => {
    let location = useLocation();
    console.log(location.pathname)
    return (<main>
        <ConteudoDaSecao to={location.pathname} />
    </main>)
}

export default EditorDoCodigo;