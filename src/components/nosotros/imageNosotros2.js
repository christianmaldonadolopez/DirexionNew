import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'; 
  
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nosotros/nosotrosImg2.jpg" }) {
        childImageSharp {
          fluid(quality: 90 ) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
 
export default Image;