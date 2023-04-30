import { useState } from "react";
import Campo from "../Campo";
import "./Formulario.css";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { v4 as uuid } from "uuid";

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        //super importante poner este evento o sino
        //la pagina se recargará cada vez que se oprima click
        // en el boton, se puede escribir como evento, event
        // o simplemente e y funciona
        e.preventDefault();
        console.log("manejar el envio");
        let datosAEnviar = {
            id: uuid(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
            fav: false,
        };
        registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
    };
    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formularo para crear el colaborador.</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <Campo
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Boton>crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formularo para crear el equipo.</h2>
                <Campo
                    titulo="Título"
                    placeholder="Ingresar título"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar el color en Hexadecimal"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton>Registrar Equipo</Boton>
            </form>
        </section>
    );
};

export default Formulario;
