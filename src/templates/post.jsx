import React from 'react';
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Import css files
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from 'layouts';
import { SEO, } from 'components';
import Img from 'gatsby-image';
import izquierda from "../images/flechaIzquierda.png";
import derecha from "../images/flechaDerecha.png";
import '../styles/prism'; 
 
const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt } = data.markdownRemark
  const gallery = data.allFile
  const { date, title, path, description, ubicacion, uso, construccion, alcance, cliente } = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true
  };

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Img fluid={image} className="flex flex-col banner-height items-center md:flex-row tracking-wider mt-24" />
      <section className="flex flex-col items-center md:flex-row">
        <div className="w-full max-w-screen-lg pt-16 pb-20 m-0-auto items-center ">
          <h1 className="text-2xl pb-8  text-center  tracking-wider w-full max-w-2xl m-0-auto">
            <b>{title}</b>
          </h1>
          <div className="w-full md:w-6/12 md:pr-8 pt-8  pb-8 float-left px-4 md:px-32">
            <h3 className="text-base text-blue leading-5 pb-2 ">
              <b>UBICACIÓN:</b>
            </h3>
            <p className="text-sm bolderFont text-left pb-8 leading-5  max-w-md tracking-wider">
              {ubicacion}
            </p>
            <h3 className="text-base text-blue leading-5 pb-2 ">
              <b>USO:</b>
            </h3>
            <p className="text-sm  bolderFont text-left pb-8 leading-5  max-w-md tracking-wider">
              {uso}
            </p>
            <h3 className="text-base text-blue leading-5 pb-2 ">
              <b>M2 DE CONSTRUCCIÓN:</b>
            </h3>
            <p className="text-sm bolderFont text-left pb-8 leading-5 max-w-md tracking-wider">
              {construccion}
            </p>
          </div>
          <div className="w-full md:w-6/12  md:pl-8 pt-8 pb-8 float-left  px-4 md:px-32">
            <h3 className="text-base text-blue leading-5 pb-2 ">
              <b>FECHA DE EJECUCIÓN:</b>
            </h3>
            <p className="text-sm bolderFont text-left pb-8 leading-5  max-w-md tracking-wider">
              {date}
            </p>
            <h3 className="text-base text-blue leading-5 pb-2 ">
              <b>ALCANCE DIREXIÓN:</b>
            </h3>
            <p className="text-sm bolderFont text-left pb-8 leading-5  max-w-md tracking-wider">
              {alcance}
            </p>
            <h3 className="text-base text-blue leading-5 pb-2 ">
              <b>CLIENTE:</b>
            </h3>
            <p className="text-sm bolderFont text-left pb-8 leading-5  max-w-md tracking-wider">
              {cliente}
            </p>
          </div>
        </div>
      </section>  
      <Slider {...sliderSettings}> 
      {gallery.edges.map(image => (
        <div key={image.node.childImageSharp.fluid.src} className="px-1">
          <img src={image.node.childImageSharp.fluid.src}  />
        </div>
      ))}
    </Slider>
      <section className="md:flex block flex-col items-center md:flex-row md:py-32  md:px-32">
        <div className="w-6/12 float-left  md:w-6/12  pr-8 pl-8 md:pl-0 pt-8  pb-8 ">
          {prev && (
            <Link to={prev.frontmatter.path} className="float-left">
              <img className="float-left mr-16  mb-16 md:mb-0 " src={izquierda} alt="icon" /><span className="hidden md:block">PROYECTO ANTERIOR</span>
            </Link>
          )}
        </div>
        <div className="w-6/12  md:w-6/12 pl-8 pr-8 md:pr-0 pt-8 pb-8 float-right  ">
          {next && (
            <Link to={next.frontmatter.path} className="float-right">
              <img className="float-right ml-16  mb-16 md:mb-0" src={derecha} alt="icon" /><span className="hidden md:block">SIGUIENTE PROYECTO</span>
            </Link>
          )}
        </div>
      </section> 
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object, 
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String! $ruta: String!) { 
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title 
        ubicacion
        uso
        construccion 
        alcance
        cliente 
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90 
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq:  $ruta }}) {
      edges {
        node {
          id 
          childImageSharp { 
            fluid( maxWidth: 1920 quality: 90) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    } 
  }
`;
