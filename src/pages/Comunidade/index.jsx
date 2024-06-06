import Postagem from "components/Postagem";
import Secao from "components/Secao";
import { CodigoContext } from "contexts/CodigoContexto";
import { useContext } from "react";
// import poster from "json/postagem.json"

const Comunidade = () => {
    const {poster,  setPoster, usuarios } = useContext(CodigoContext);

    function liked(id) {
        setPoster(poster.map((item) => {

            if (item.id === id && !item.curtidas.id_usuario.includes(usuarios[1].id)) {
                item.curtidas.id_usuario.push(usuarios[1].id);
            } else if (item.id === id && item.curtidas.id_usuario.includes(usuarios[1].id)) {
                let newItem = item.curtidas.id_usuario.filter(id => id !== usuarios[1].id)
                item.curtidas.id_usuario = newItem;
            }
            return item
        }))
    }

    return (<main>
        <Secao>
            {
                poster.map((postado) => <Postagem
                    poster={postado}
                    like={liked}
                    usuario={usuarios.find((usuario) => usuario.id === postado.id_usuario)}
                    logado={usuarios[1].id}
                    key={postado.id}
                />)
            }
        </Secao>
    </main>)
};

export default Comunidade;