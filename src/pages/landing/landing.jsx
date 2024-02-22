import React, { useEffect, useState } from "react";
import './landing.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HeroImage from '../../assets/rescate.jpeg'
import metromun from '../../assets/metromun.jpg'
import formula from '../../assets/formula.jpg'
import cavum from '../../assets/cavum.jpg'


export default function Landing() {
    return (
        <div className="Landing">
            <section className="hero">
                <div className="filter">
                    <img src={HeroImage} alt="university" className="heroImage" />
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
            </section>
            <Footer></Footer>
        </div>


    )
}
