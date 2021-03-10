import React from 'react';
import { Layout } from 'layouts';
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image" 
import { MapPin, Smartphone, Mail } from 'react-feather' 
import styled from '@emotion/styled';


const ImageContainer = styled.div`
    flex-shrink: 0;
    position: relative;
    width: 100%;
    float: right;
    max-width: 65rem;
 
    .gatsby-image-wrapper{ 
        -moz-object-fit: cover;
        max-width: 55rem;
        float: right;
        width: 100%;
        -webkit-object-fit: cover;
        -ms-object-fit: cover;
        object-fit: cover;
        -moz-object-position: center;
        -webkit-object-position: center;
        -ms-object-position: center;
        object-position: center;
    }
 .contactoH{ 
     top:-10rem;
}
.Contact--Details { 
  
  max-width: 24rem!important;  

  }
  
  .Contact--Details--Item {
    display: flex;
    padding: 2rem 0;
    border-top: 1px solid var(--lightGrey);
    font-weight: 500;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease-in-out;
  }
  
  .Contact--Details--Item:hover,
  .Contact--Details--Item:focus {
    color: var(--primary);
  }
  
  .Contact--Details--Item svg {
    margin-right: 1.5rem;
    color: var(--primary);
  }
  
    
`



const Contacto = center => (
  <Layout>
    <section className="flex flex-col items-center md:flex-row tracking-wider md:mt-24 mt-40">
      <div className="md:w-6/12 px-8 float-left mb-20">
        <div className="md:w-7/12 max-w-screen-sm float-right">
          <a
            className="Contact--Details--Item  flex "
            href=""
            target="_blank"
          >
            <MapPin className="mr-4" />Av. Ricardo Margain 575 Parque Coroporativo Santa Engracia 66267 San Pedro Garza Garcia NL. MX
              </a>
          <a className="Contact--Details--Item  flex mt-4" href='' >
            <Smartphone className="mr-4" /> Tel.+54(81) 1588 1504
              </a>
          <a className="Contact--Details--Item flex mt-4" href=''>
            <Mail className="mr-4" /> hola@direxion.com.mx
              </a>
        </div>
      </div>
      <div className="w-full md:w-6/12 float-left">
        <Image />
      </div>
    </section>
  </Layout>
);

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "contactoImg.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}


export default Contacto;
