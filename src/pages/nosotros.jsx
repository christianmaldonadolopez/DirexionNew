import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'layouts';
import { Link } from 'gatsby'; 
import Image from "../components/nosotros/imageNosotros"; 
import Image2 from "../components/nosotros/imageNosotros2"; 
import Image3 from "../components/nosotros/imageNosotrosFases"; 
import nosotrosIcon1 from "../images/nosotros/nosotrosIcon3.png";
import nosotrosIcon2 from "../images/nosotros/nosotrosIcon4.png";
import nosotrosIcon3 from "../images/nosotros/nosotrosIcon2.png";
import nosotrosIcon4 from "../images/nosotros/nosotrosIcon1.png";
import nosotrosDireccion1 from "../images/nosotros/nosotrosDireccion.png";
import nosotrosDireccion2 from "../images/nosotros/nosotrosDireccion2.png";
import nosotrosDireccion3 from "../images/nosotros/nosotrosDireccion3.png";
import nosotrosDireccion5 from "../images/nosotros/nosotrosDireccion5.png";


 

const About = center => (
    <Layout>
        <section className="flex flex-col items-center md:flex-row tracking-wider mt-24">
            <div className="w-full md:w-6/12 md:pr-8 float-left">
                <Image />
            </div>
            <div className="md:w-6/12 px-8 float-left">
                <div className="md:w-7/12 max-w-screen-sm">
                    <h1 className="text-2xl pb-8 pt-8 md:pt-0">
                        <b>¿ QUIENES SOMOS ? </b>
                    </h1>
                    <h3 className="text-lg text-blue pb-4">
                        <b>EXPERIENCIA  </b>
                    </h3>
                    <p className="text-sm bolderFont text-justify pb-8 leading-5 tracking-wider">
                        Somos una empresa joven que nace en el 2014 con una solida experiencia de más de 15 años de nuestro fundador.
                        Durante este tiempo nos hemos especializado en la administración de proyectos de construcción y un alto nivel de entendimiento
                        del modelo de negocio inmobiliario.
          </p>
                    <h3 className="text-lg text-blue pb-4">
                        <b>¿QUE ES DIREXION?  </b>
                    </h3>
                    <p className="text-sm bolderFont text-justify leading-5 tracking-wider">
                        Somos una empresa especializada en la administración profesional de proyectos de construcción.
                        A través de nuestra metodología gestionamos los proyectos con un estricto control, obteniendo como resultados;
                        alta eficiencia presupuestal y proyectos entregados a tiempo con la más alta calidad.
          </p>
                </div>
            </div>
        </section>
        <section id="conocenos" className="flex flex-col items-center md:flex-row">
            <div className="w-full  md:w-6/12 px-8">
                <div className="w-full md:w-8/12 md:float-right md:max-w-md  tracking-wider">
                    <h1 className="text-2xl py-8">
                        <b>CONÓCENOS</b>
                    </h1>
                    <h3 className="text-lg text-blue  pb-4">
                        <b>NUESTRO VALOR AGREGADO  </b>
                    </h3>
                    <p className="text-sm bolderFont text-justify pb-8 leading-5 tracking-wider">
                        Aportamos a la industria de la construcción, una planeación que permite
                        la organización y control total del proyecto en todas sus etapas, generando
                        eficiencia presupuestal y puntualidad de entrega con los más altos estándares
                        de calidad. Todos nuestros procesos se rigen por la metodología Project Management Institute (PMI®)
                        y Lean Construction® Asi como un alto nivel de entendimiento del modelo de negocio inmobiliario
                        coordinando todas las etapas del desarrollo con esta visión aportando nuestra experiencia
                        para garantizar el éxito comercial del proyecto asi como su máxima rentabilidad y eficiencia.
            </p>
                    <h3 className="text-lg text-blue pb-4">
                        <b>NUESTROS SERVICIOS</b>
                    </h3>
                    <p className="text-sm bolderFont text-justify leading-5">
                        • Dirección de Proyectos
            </p>
                    <p className="text-sm bolderFont text-justify leading-5">
                        • Due Delligence
            </p>
                    <p className="text-sm bolderFont text-justify leading-5">
                        • Owners Representative
            </p>
                    <p className="text-sm bolderFont text-justify leading-5">
                        • Soluciones integrales en Lean Construction
            </p>
                </div>
            </div>
            <div className="w-full md:w-6/12 md:pl-8 pt-16  pb-16">
                <Image2 />
            </div>
        </section>
        <section className="flex flex-col items-center md:flex-row">
            <div className="w-full max-w-screen-lg pt-16 md:pb-20 pb-8 m-0-auto items-center ">
                <h1 className="text-2xl pb-4  text-center  tracking-wider w-full md:max-w-2xl m-0-auto"><b>¿POR QUÉ ES DIFERENTE DIREXIÓN A OTRAS EMPRESAS DE PROJECT MANAGEMENT?</b></h1>
                <div className="w-full md:w-6/12 md:pl-0 pl-8 pr-8 pt-8  pb-8 md:float-left">
                    <p className="text-sm bolderFont text-justify pb-8 leading-5  md:max-w-md md:float-right tracking-wider">Nuestro enfoque hace posible que los proyectos inmobiliarios obtengan una planeación eficiente.
                    Mediante nuestra metodología, aplicando en todas las etapas del proyecto las herramientas correctas
                    logramos un alto nivel de organización y control de los los proyectos, generando una alta eficiencia
              presupuestal, proyectos entregados en tiempo con la más alta calidad y la mayor eficiencia.<br /><br />
              Diseñamos un método de trabajo único para cada cliente/ proyecto de acuerdo a sus características y necesidades
              integrando en una sola formula la metodología que establece el Project Management Institute (PMI®) y Lean Construction®
              la experiencia de un equipo multidisciplinario con un alto nivel de entendimiento del modelo de negocio de cada proyecto.<br /><br />
              Administración y control de los recursos como propios generando un frente de trabajo único con el mismo
              objetivo: Garantizar el éxito del proyecto en todas sus etapas de desarrollo.
            </p>
                </div>
                <div className="w-full md:w-6/12 pl-8 pt-8 pb-8 float-left">

                    <h3 className="text-base text-blue leading-5 pb-4 mb-12">
                        <img
                            className="float-left  mr-16 -m-4 w-16"
                            src={nosotrosIcon1}
                            alt="icon"
                        />
                        <b>REDUCCIÓN <br className="md:block hidden" />DE PÉRDIDAS</b>
                    </h3>

                    <h3 className="text-base text-blue leading-5 pb-4 mb-12">
                        <img
                            className="float-left  mr-16 -m-4 w-16"
                            src={nosotrosIcon2}
                            alt="icon"
                        />
                        <b>AGILIZAR LA <br className="md:block hidden" />PLANIFICACIÓN</b>
                    </h3>

                    <h3 className="text-base text-blue leading-5 pb-4 mb-12">
                        <img
                            className="float-left  mr-16 -m-4 w-16"
                            src={nosotrosIcon3}
                            alt="icon"
                        />
                        <b>APROVECHAMIENTO <br className="md:block hidden" />DE RECURSOS</b>
                    </h3>

                    <h3 className="text-base text-blue leading-5 pb-4 mb-12">
                        <img
                            className="float-left  mr-16 -m-4 w-16"
                            src={nosotrosIcon4}
                            alt="icon"
                        />
                        <b>MAXIMIZAR <br className="md:block hidden" />RENTABILIDAD</b>
                    </h3>
                </div>

            </div>
        </section>
        <section className="flex flex-col items-center md:flex-row">
            <div className="w-full max-w-screen-lg md:pt-16 pt:8 m-0-auto items-center px-8 md:pb-64">
                <h1 className="text-2xl text-center  tracking-wider w-full md:pb-32 pb-8 max-w-2xl m-0-auto"> FASES DEL PROYECTO </h1>
                <Image3 />
            </div>
        </section>
        <section className="flex flex-col items-center md:flex-row">
            <div className="w-full max-w-screen-lg md:pt-16 pt-8 m-0-auto items-center pb-64">
                <h1 className="text-2xl text-center  tracking-wider w-full md:pb-20 pb-8 max-w-2xl m-0-auto"> DIREXIÓN EN NÚMEROS </h1>
                <div className="w-full md:w-1/4 px-4 relative md:float-left md:h-64 m-auto h-70 divRombo">
                    <img
                        className="absolute left-4 rombo"
                        src={nosotrosDireccion1}
                    />
                    <p className="text-sm bolderFont leading-5 absolute bottom-0   text-center w-full -m-10-p rombosText">
                        <b>Inversión bajo<br />nuestra gestión</b>
                    </p>
                </div>
                <div className="w-full md:w-1/4 sm:w-6/12 px-4 relative  md:float-left md:h-64 m-auto h-70 divRombo ">

                    <p className="text-sm bolderFont text-center leading-5 absolute bottom-0 w-full -m-10-p rombosText2">
                        <b>Mas de
              </b>
                    </p>
                    <img
                        className="absolute left-4 rombo"
                        src={nosotrosDireccion2}
                    />
                    <p className="text-sm bolderFont text-center leading-5 absolute bottom-0 w-full -m-10-p rombosText">
                        <b>
                            de construccion
              </b>
                    </p>
                </div>
                <div className="w-full md:w-1/4 px-4 relative  md:float-left md:h-64 m-auto h-70  divRombo ">
                    <img
                        className="absolute left-4  rombo"
                        src={nosotrosDireccion3}
                    />
                </div>
                <div className="w-full md:w-1/4 px-4 relative  md:float-left md:h-64 m-auto h-70 divRombo   ">
                    <img
                        className="absolute left-4 imgnos  rombo"
                        src={nosotrosDireccion5}
                    />
                    <p className="text-sm bolderFont text-center leading-5 absolute bottom-0 w-full -m-10-p rombosText3">
                        <b>- Industrial</b>
                    </p>
                </div>
            </div>
        </section>

        <section className="flex flex-col items-center md:flex-row">
            <div className="w-full max-w-screen-lg pt-16 m-0-auto items-center pb-48">
                <h1 className="text-2xl  text-center  tracking-wider w-full pb-4 max-w-2xl m-0-auto"><b>CONÓCE NUESTRO PORTAFOLIO</b></h1>
                <Link to="proyectos" className="text-lg text-center  tracking-wider w-full pb-32 max-w-2xl m-0-auto block btn-blue" to="/proyectos">VER PROYECTOS</Link>
            </div>
        </section>
    </Layout>
);

export default About;

About.propTypes = {
    center: PropTypes.object,
};
