import "./../styles/services.css";

function Services() {

    return (
        <section className="services" id="services">

            <h3>Servicios</h3>

            <div className="container">

                <a className="service" href="https://www.inelcosrl.com.ar/automatizacion" target="_blank">
                    <img src="/automatizacion.png" alt="" />
                    <span>Automatización</span>
                </a>

                <a className="service" href="https://www.inelcosrl.com.ar/industriales" target="_blank">
                    <img src="/industriales.png" alt="" />
                    <span>Industriales</span>
                </a>

                <a className="service" href="https://www.inelcosrl.com.ar/electricos" target="_blank">
                    <img src="/electricos.png" alt="" />
                    <span>Eléctricos</span>
                </a>

                <a className="service" href="https://www.inelcosrl.com.ar/gas" target="_blank">
                    <img src="/gas.png" alt="" />
                    <span>Gas</span>
                </a>
                <a className="service" href="https://www.inelcosrl.com.ar/energias-renovables" target="_blank">
                    <img src="/energias-alternativas.png" alt="" />
                    <span>Energías alternativas</span>
                </a>
                <a className="service" href="https://www.inelcosrl.com.ar/servicios-especiales" target="_blank">
                    <img src="/servicios-especiales.png" alt="" />
                    <span>Servicios especiales</span>
                </a>

            </div>
        </section>
    )

}

export default Services;