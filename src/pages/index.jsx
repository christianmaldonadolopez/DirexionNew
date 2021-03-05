import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';
import Img from "gatsby-image"
import { Layout } from 'layouts';

const ImageContainer =styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
max-width: 1260px;
margin: 0px auto;
position: relative;
margin-top: 6rem;

@media (max-width: 1000px) {
  margin: 7rem 2rem 1rem 2rem;
}
@media (max-width: 700px) {
  margin: 7rem 1rem 1rem 1rem;
}

.gatsby-image-wrapper{ 
  -moz-object-fit: cover;
  max-width: 50rem;
  float: right;
  width: 100%;
  -webkit-object-fit: cover;
  -ms-object-fit: cover;
  object-fit: cover;
  -moz-object-position: center;
  -webkit-object-position: center;
  -ms-object-position: center;
  object-position: center;
  margin-left: auto;
}
`;
 
const Index = () => {
  return (
    <Layout>
      <ImageContainer>
        <h2 className="cabeceraH2">
          TU<br /> PROYECTO<br /> EN LA<br /><b>DIREXIÓN</b><br /><b> CORRECTA</b>
        </h2>
        <Image />
      </ImageContainer>
    </Layout>
  );
};


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "efecto_xx.jpg" }) {
        childImageSharp {
          fluid(quality: 90 traceSVG: { color: "#2B2B2F" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return <Img className="opacity-25 md:opacity-100 " fluid={data.placeholderImage.childImageSharp.fluid} />
}





export default Index;

