import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutUs.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import imgEmpresa from '../../assets/quienes_somos_1.jpg';
import imgMision from '../../assets/quienes_somos_2.jpg';
import imgVision from '../../assets/quienes_somos_3.jpg';

const About = () => {
    
  const sections = [
    { 
      title: 'Misión', 
      icon: 'bi-gem', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    { 
      title: 'Visión', 
      icon: 'bi-lightbulb', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    { 
      title: 'Valores', 
      icon: 'bi-hand-thumbs-up', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const images = [imgEmpresa, imgMision, imgVision];

  return (
    <Container className="about-page-container my-5">
      <h1 className="display-6 mb-5 text-center">QUIENES SOMOS</h1>
      
      <Row>
        <Col xs={12} lg={8} className="about-text-column pe-lg-5">
          
          <section className="mb-5">
            <h2 className="section-subtitle">Nuestra Empresa</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          {sections.map((section, index) => (
            <section key={index} className="mb-4">
              <h3 className="section-heading">
                <i className={`${section.icon} me-2`}></i>
                {section.title}
              </h3>
              <p>{section.text}</p>
            </section>
          ))}

        </Col>

        <Col xs={12} lg={4} className="about-image-column mt-4 mt-lg-0 d-flex flex-column gap-4">
          {images.map((imageSrc, index) => (
            <div key={index} className="image-wrapper">
              <img 
                src={imageSrc} 
                alt={`Imagen de ${sections[index] ? sections[index].title : 'la empresa'}`} 
                className="img-fluid rounded shadow-sm"
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default About;