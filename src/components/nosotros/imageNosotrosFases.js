import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'; 
  
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nosotros/fasesProyecto.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
 
export default Image;