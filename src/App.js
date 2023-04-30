import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Formulario from "./componetes/Formulario/Formulario";
import { Header } from "./componetes/Header/Header";
import MiOrg from "./componetes/MiOrg";
import Equipo from "./componetes/Equipo";
import Footer from "./componetes/Footer";

function App() {
    //los useState son funciones que activan o desactivan codigo
    //para activarlo se hace const[nombreVariable, funcionAActualizar] = useState (true o false)
    const [mostrarFormulario, actualizarMostrar] = useState(true);
    const [colaboradores, acturalizarColaboradores] = useState([]);
    //Ternario --> condicion ? seMuestra : noSeMuestra

    const registrarColaborador = (colaborador) => {
        console.log("nuevo colaborador", colaborador);
        //una manera de agregar el elemento que escribe el usuario del
        // formulario seia poner acturalizarColaboradores.push, pero no es
        // lo mas recomendable, por ello se va a usar Spread operator el cual
        // solo es poner tres puntos dentro de un array asi: [...] y despues
        // el nombre del primer elemento del useState en este caso colaboradores
        // lo que va  hacer esto es tomar los valores actuales del arreglo
        // colaboradores, los va a copiar y despues agregará un nuevo arreglo
        acturalizarColaboradores([...colaboradores, colaborador]);
    };

    const eliminarColaborador = (id) => {
        console.log("eliminar colaborador", id);
        const nuevosColaboradores = colaboradores.filter((colaborador) => {
            return colaborador.id !== id;
        });
        acturalizarColaboradores(nuevosColaboradores);
    };

    //actualizar color equipo
    const actualizarColor = (color, id) => {
        console.log("Actualizar: ", color, id);
        // aqui toma la informacion de equipos.js y por medio de map
        //comprueba el cambio que se hizo por el actual y reemplaza su
        //valor dentro del arreglo
        const equiposActualizados = equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorPrimario = color;
            }

            return equipo;
        });

        actualizarEquipos(equiposActualizados);
    };

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario);
    };

    const crearEquipo = (nuevoEquipo) => {
        console.log(nuevoEquipo);
        actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid }]);
    };

    const like = (id) => {
        console.log("like: ", id);
        const colaboradoreActuralizados = colaboradores.map((colaborador) => {
            //si el colaborador.id es igual al id que toma la
            //funcion like entonces va a cambiar el valos de verdad
            //del colaborador.fav osea lo pasa de verdadero a falso
            //o biceversa
            if (colaborador.id === id) {
                colaborador.fav = !colaborador.fav;
            }
            return colaborador;
        });
        actualizarColor(colaboradoreActuralizados);
    };

    const [equipos, actualizarEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programación",
            colorPrimario: "#57C278",
            colorSecundario: "#D9F7E9",
        },
        {
            id: uuid(),
            titulo: "Front End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF",
        },
        {
            id: uuid(),
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2",
        },
        {
            id: uuid(),
            titulo: "Devops",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8",
        },
        {
            id: uuid(),
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5",
        },
        {
            id: uuid(),
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9",
        },
        {
            id: uuid(),
            titulo: "Innovación y Gestión",
            colorPrimario: "#FF8A29",
            colorSecundario: "#FFEEDF",
        },
    ]);

    return (
        <div className="App">
            {/* //maneras de llamar los componentes
            // entre llavaes: {Header}
            // entre diagonales: <Header></Header> */}
            <Header />
            {/* aqui abajo hicimos una condicional donde si el formulario es
            verdadero muestra el modululo formulario sino muestra un div
        vacio y quien se va a encargar de activarlo o no va a ser el modulo mi org
        donde por medios de props activa la funcion de mas arriba que es cambiarMostrar*/}
            {mostrarFormulario === true ? (
                <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    crearEquipo={crearEquipo}
                />
            ) : (
                <></>
            )}
            <MiOrg cambiarMostrar={cambiarMostrar} />
            {equipos.map((equipo) => {
                return (
                    <Equipo
                        datos={equipo}
                        key={equipo.titulo}
                        //la propiedad filter como su nombre los dice va a filtrar
                        //los elementos y solo pondra los que cumplan con la condicion
                        // en este caso revisara a que equipo pertenece y solo pondrá
                        // el colaborador en el titulo que conincida
                        colaboradores={colaboradores.filter(
                            (colaborador) =>
                                colaborador.equipo === equipo.titulo
                        )}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                        like={like}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
