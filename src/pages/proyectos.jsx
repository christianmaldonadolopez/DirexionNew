import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types'; 
import styled from '@emotion/styled';
import { PostList } from 'components';
import { Layout } from 'layouts';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between; 
  margin: 10rem 4rem 1rem;

  @media (max-width: 1000px) {
    margin: 10rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 10rem 1rem 1rem 1rem;
  }
`;

const Proyectos = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <PostWrapper className="mt-24">
        {edges.map(({ node }) => {
          const { id, frontmatter } = node;
          const { cover, path, clave, title, color, ubicacion, uso, construccion, alcance, cliente, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              clave={clave}
              color={color}
              ubicacion={ubicacion}
              uso={uso}
              construccion={construccion}
              alcance={alcance}
              cliente={cliente}
              date={date} 
            />
          );
        })}
      </PostWrapper>
    </Layout>
  );
};

export default Proyectos;

Proyectos.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              clave: PropTypes.string.isRequired,
              color: PropTypes.string.isRequired,
              ubicacion: PropTypes.string.isRequired,
              uso: PropTypes.string.isRequired,
              construccion: PropTypes.string.isRequired,
              alcance: PropTypes.string.isRequired,
              cliente: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,  
              galeria: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 10
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path 
            clave
            color
            ubicacion 
            uso 
            construccion 
            alcance 
            cliente 
            date  
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
