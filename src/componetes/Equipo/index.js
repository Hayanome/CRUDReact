import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";
const Equipo = (props) => {
    //Destructuracion
    //para no poner tanti props.datos se crea esta variable la cual
    //indica que cada dato titulo etc vienen del valor props.datos
    const { colorPrimario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
    return (
        //recordar que en react todo debe estar en <>
        // se hizo una condicial donde si los elementos de los cargos
        // como ahora son un arreglo estan vacios no los muestre en
        // la pagina principal
        <>
            {colaboradores.length > 0 && (
                //para poner estilos de css debemos poner el estilo como un diccionarioi
                // osea entre llaves {{}} y si el estilo tenia un guion - se elimina y la
                //siguiente palabra se deja con una mayuscula ejemplo
                //font-size --> fontSize
                <section
                    className="equipo"
                    style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}
                >
                    <input
                        type="color"
                        className="input-color"
                        value={colorPrimario}
                        //en este caso la funcion de app,js actualizarColor
                        // esta recibiendo el valor del color que pone el usuario
                        //y el nombre del titulo del que se está tomando
                        onChange={(evento) => {
                            actualizarColor(evento.target.value, id);
                        }}
                    />
                    <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                    <div className="colaboradores">
                        {colaboradores.map((colaborador, index) => (
                            <Colaborador
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                like={like}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Equipo;
