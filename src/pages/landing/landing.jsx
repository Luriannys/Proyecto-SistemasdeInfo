import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import './landing.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import HeroImage1 from '../../assets/rescate.jpeg'
import HeroImage2 from '../../assets/musicum.jpg'
import HeroImage3 from '../../assets/tigers.jpg'
import HeroImage4 from '../../assets/aiesec.jpg'

import metromun from '../../assets/metromun.jpg'
import formula from '../../assets/formula.jpg'
import cavum from '../../assets/cavum.jpg'
import formulaLogo from "../../assets/logos/LOGO FORMULA SAE.png"
import jazzLogo from "../../assets/logos/Logo Jazz en Concreto .jpg"
import chemecar from "../../assets/logos/Logo chem-e-car.png"
import afro from "../../assets/logos/E. Afro-Venezolano - ps.png"
import arca from "../../assets/logos/Logo ARCA original.png"
import rescateUnimet from "../../assets/logos/logo rescate vect 2 (2) (1).png"
import top from "../../assets/logos/Copia de LOGO NEGRO sf.png"
import vmuns from "../../assets/logos/logo vmunsociety (1).png"
import radio from "../../assets/logos/Logo_RADIO_UNIMET._JPG-removebg-preview.png"
import metromunWorld from "../../assets/logos/Logo-MetroMUNWorld.png"
import samanFilm from "../../assets/logos/Samán Film Society - ps.png"
import thespisLogo from "../../assets/logos/Thespis_Versión_1-removebg-preview.png"


const imageArray = [HeroImage1, HeroImage2, HeroImage3, HeroImage4];

const groupList = [
    { image: jazzLogo, link: "", alt: "Jazz en concreto" },
    { image: formulaLogo, link: "", alt: "Formula Sae" },
    { image: chemecar, link: "", alt: "Chem-e-car" },
    { image: afro, link: "", alt: "Ensamble afro venezolano" },
    { image: arca, link: "", alt: "Arca" },
    { image: rescateUnimet, link: "", alt: "Rescate Unimet" },
    { image: top, link: "", alt: "The Orange Post" },
    { image: vmuns, link: "", alt: "VMUN Society" },
    { image: radio, link: "", alt: "Radio Unimet" },
    { image: metromunWorld, link: "", alt: "MtroMUN World" },
    { image: samanFilm, link: "", alt: "Saman Film" },
    { image: thespisLogo, link: "", alt: "Teatro Thespis" },
]

export default function Landing() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCount((count) => count + 1);
        }, 4000);

        return () => clearInterval(timerId);
    }, []);

    const image = imageArray[count % imageArray.length];

    return (
        <div className="Landing">
            <section className="hero">
                <div className="filter">
                    <img src={image} alt="university" className="heroImage" />
                </div>
                <Header></Header>
                <div className="caption-container">
                    <h1 className="hero-text">Conecta con las <br></br> Agrupaciones Estudiantiles</h1>
                </div>
            </section>
            <section className="content">
                <section id="about">
                    <div className="mision">
                        <div className="about-text">
                            <h2 className="subTitle">Nuestra Misión</h2>
                            <p className="about-description">Proporcionar una plataforma que permita a los estudiantes conectar, contactar y unirse a las agrupaciones estudiantiles de su interés, así como gestionar sus propias agrupaciones, con el fin de fomentar la participación, el liderazgo y el desarrollo integral de los estudiantes en la vida universitaria, favoreciendo el descubrimiento de pasiones y hobbies, el sentido de pertenencia y la identidad grupal.</p>
                        </div>
                        <img src={metromun} className="sectionImage" alt="metromun"></img>
                    </div>
                    <div className="vision">
                        <img src={cavum} className="sectionImage" alt="cavum"></img>
                        <div className="about-text">
                            <h2 className="subTitle">Nuestra Visión</h2>
                            <p className="about-description">Ser una herramienta líder e innovadora que potencie el desarrollo personal y profesional de los estudiantes, al brindarles oportunidades de integración, aprendizaje y liderazgo en diversas áreas de interés, contribuyendo así al fortalecimiento de la identidad unimetana y al mejoramiento de la calidad educativa y social de la institución.</p>
                        </div>
                    </div>
                    <div className="objective">
                        <div className="about-text">
                            <h2 className="subTitle">Nuestro Objetivo</h2>
                            <p className="about-description">Facilitar la visibilidad de los grupos estudiantiles de la universidad y promover la participación activa de los estudiantes en la vida universitaria haciendo uso de estos espacios de integración, aprendizaje y liderazgo para los estudiantes que comparten intereses comunes en diversas áreas.</p>
                        </div>
                        <img src={formula} className="sectionImage" alt="formula sae"></img>
                    </div>
                </section>

                <section id="groups">
                    <h2 className="bold-subtitle">Conecta con alguna de ellas</h2>
                    <div className="group-list">
                        {groupList.map(group =>
                            <Link to={group.link}><img className="group-logo" src={group.image} alt={group.alt}></img></Link>
                        )}
                    </div>
                </section>
            </section>
            <Footer></Footer>
        </div>
    )
}
