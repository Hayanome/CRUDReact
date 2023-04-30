import "./Footer.css";
const Footer = () => {
    return (
        <footer
            className="footer"
            style={{ backgroundImage: "url(/img/footer.png)" }}
        >
            <div className="redes">
                <a href="https://www.linkedin.com/in/miguel-angel-antonio-fernandez-1b2844120/">
                    <img src="/img/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/hayanome93">
                    <img src="/img/twitter.png" alt="twitter" />
                </a>
                <a href="https://github.com/Hayanome">
                    <img src="/img/github.png" alt="Github" />
                </a>
            </div>
            <img src="/img/Logo.png" alt="org" />
            <strong>
                Desarrollado por Miguel Antonio
                <br />
                con apoyo de Alura Latam
            </strong>
        </footer>
    );
};

export default Footer;
