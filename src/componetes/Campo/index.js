import "./Campo.css";

const Campo = (props) => {
    // asi le podriamos poner tres puntos al final del texto
    const placeholderModificado = `${props.placeholder}...`;

    //Desctructuracion crea un objeto que saco la informacion de props

    const { type = "text" } = props;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    };

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo.toUpperCase()}</label>
            <input
                placeholder={placeholderModificado}
                required={props.required}
                /* value va a controlar como se manejan los input */
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    );
};

export default Campo;
