import { UseState, useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    const [mostrar, actualizarMostrar] = useState(true);
    /*const manejarClick = () => {
        // hooks
        // useState
        console.log(props);
        console.log("mostrar/ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar);
    };*/
    return (
        <section className="orSection">
            <h3 className="tittle">Mi Organización</h3>
            <img src="img/boton.png" onClick={props.cambiarMostrar}></img>
        </section>
    );
};
export default MiOrg;
