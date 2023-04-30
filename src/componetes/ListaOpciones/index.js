import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    // para recorrer un arreglo debemos usar el metodo map
    // arreglo.map((equipo, index osa la posicion) => {
    //  return <option></option>
    //})

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    };

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>
                    Seleccionar equipo
                </option>
                {props.equipos.map((equipo, index) => {
                    // la key es super importante para darle un valor
                    // unico a cada elemento option y equipo entre llaves
                    // va a enviar el contenido de cada elemento en su llave
                    // osea lo que está escrito en comillas
                    return (
                        <option key={index} value={equipo}>
                            {equipo}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default ListaOpciones;
