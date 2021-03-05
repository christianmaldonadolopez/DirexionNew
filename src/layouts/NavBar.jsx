import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby"; 
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';
import instaHead from '../../static/logo/insta-icon-head.png';

function NavBar() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
 
const StyledNav = styled.nav`
   
    align-items: center;
    width: 66.666667%;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;

    @media (max-width: 1000px) {
      width: 100%; 
      position: absolute;
      margin-top: 4.5rem;
      background: #ffffffb5;
    }
    
  `;

  
const StyledLink = styled(Link)`
    width: 25%;
    text-align: center;
    display: inline-block;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    padding-top: 1rem;
    text-decoration: none;
    color: black;

    @media (max-width: 1000px) {
      display: block;
      width: 100%;
      text-align: right;
      padding: 1rem;
    }
    
  `;

const StyledLink2 = styled(Link)`
      width: 16.6%; 
      padding-left: 1rem; 

      @media (max-width: 1000px) {
        padding:0;
        width: auto; 
        padding-left: 1rem;
      }
      
    `;

const StyledDiv3 = styled.div`
    width: 16.6%; 
    display:block;
    padding-right:2rem;
    padding-top: 0.5rem;

    @media (max-width: 1000px) {
      display:none;
    }
    
  `;

const Img2 = styled.img`
      width: 10rem;  
   
    `;
  

  
const ButtonStyled = styled.button`
    display: none;  
    border-radius: 0.25rem;
    align-items: center;
    background-color: transparent;
    background-image: none;
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: transparent;
    @media (max-width: 1000px) {
      display: block; 
      padding-top: 0rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    `;


  return (
    <Headroom Headroom calcHeightOnResize disableInlineStyles>  
        <StyledLink2   to="/">
          <h1 className="flex items-center text-black no-underline p-2">
            <Img2 
              viewBox="0 0 54 54" 
              alt={site.siteMetadata.title}
              src={logo}
            />  
          </h1>
        </StyledLink2>

        <ButtonStyled
          className="px-3 py-2 text-black   border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </ButtonStyled>

        <StyledNav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center justify-between px-8`}
             
        >
          {[
            {
              route: `/nosotros`,
              title: `QUIENES SOMOS`,
            },
            {
              route: `/nosotros#conocenos`,
              title: `CONÓCENOS`,
            },
            {
              route: `/proyectos`,
              title: `PROYECTOS`,
            },
            {
              route: `/contacto`,
              title: `CONTACTO`,
            },
          ].map((link) => (
            <StyledLink
              
              key={link.title}
              to={link.route}
            >
              {link.title}
            </StyledLink>
          ))}
        </StyledNav>
        <StyledDiv3 to="/">
          <Link className="" to="https://www.instagram.com/">
            <img
                className="float-right  ml-4"  
                src={instaHead}
              />
          </Link> 
        </StyledDiv3> 
    </Headroom>
  );
}

export default NavBar;
