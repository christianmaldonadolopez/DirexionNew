import { css } from '@emotion/core';
import theme from '../../config/theme';

const headroom = css`

    
  
    @font-face {
      font-family: "TTNorms-Medium"; 
      font-weight: 100;
      src: url('/fonts/TT-Norms-Medium/TT Norms Medium.woff2') format("woff2"), 
          url('/fonts/TT-Norms-Medium/TT Norms Medium.woff') format("woff") ;
      font-display: swap;
    }
      
      @font-face {
        font-family: "TTNorms-Light"; 
        font-weight: 100;
        src: url('/fonts/TT-Norms-Light/TT Norms Light.woff2') format("woff2"), 
            url('/fonts/TT-Norms-Light/TT Norms Light.woff') format("woff") ;
        font-display: swap;
    }
      
      @font-face {
        font-family: "TTNorms-Regular"; 
        font-weight: 100;
        src: url('/fonts/TT-Norms-Regular/TT Norms Regular.woff2') format("woff2"), 
            url('/fonts/TT-Norms-Regular/TT Norms Regular.woff') format("woff") ;
        font-display: swap;
    }
 
    .pt-4 {
      padding-top: 1rem;
    }
    .pl-1 {
        padding-left: 0.25rem;
    }
    .pr-1 {
        padding-right: 0.25rem;
    }
    
    .text-xs {
        font-size: 0.75rem;
        line-height: 1rem;
    }
    .font-semibold {
        font-weight: 600;
    }
  .cabeceraH2{
    top: 50%;
    transform: translate(0, -50%); 
    left: 15%; 
    z-index: 10; 
    text-align: left;  
    position: absolute; 
    padding: 0.75rem; 
    line-height: 2rem; 
    font-size: 1.875rem;
    line-height: 2.25rem; 
    font-size: 1.5rem;
    line-height: 2rem; 
    font-weight: 300; 
    display: inline-block; 
    font-family: 'TTNorms-Light';
    letter-spacing: 0.3rem;
  }

 
  b {
    font-family: 'TTNorms-Medium'!important; 
    font-weight: 200;
    }


    .m-0-auto{
    margin:0px auto;
    }

    .left-4{
    left:15%;
    }

    .-m-10-p{
    margin-left:-10%;
    }

    .h-70{
    height: 18rem;
    }

    .btn-blue{
      width: 14rem;
      border-radius: 20px;
      height: 2.7rem;
      color: white;
      padding: 0;
      font-size: 0.7rem;
      padding-top: 0.5rem;
      font-weight: bolder; 
      padding-bottom: 0.8rem;
      letter-spacing: 0.2rem;
      background: #7091ba;
    }

    body{
      font-family: "TTNorms-Regular";  
    }

    .text-blue {
    color: #3061ad!important;  
    }

    .bolderFont{
    font-family: 'TTNorms-Medium'!important; 
    }

    .top-center{
      top: 50%;
      transform: translate(0, -50%);
    }

    .footer-half{
      background: linear-gradient(to left,#3061AD 50%,#7091BA 50%)!important;
    }

    .footer{
    background: #7091BA;
    font-family: 'TTNorms-Light'!important;
    }

    .third-color{
      background:  #3061AD!important;
    }  

    h2 {
    font-family: 'TTNorms-Light';
    letter-spacing: 0.3rem;
    }

    .letter-spacing { 
    letter-spacing: 0.3rem;
    }

    .backgroundGray { 
    filter: grayscale(100%); 
    }

    .Contact--Details { 

    max-width: 24rem!important;
    margin: 0px auto;
    margin-top: 10rem;
    }

    .rombosText{
      position: absolute;
      top: 8rem;
      color: white;
      font-size: 0.75rem;
      letter-spacing: 0.02rem;
    }

    .rombo{
    max-height: 15rem;
    }

    .divRombo{
    max-width: 17rem;
    } 

    .rombosText2{
    position: absolute;
    top: 2rem;
    color: white;
    font-size: 1rem;
    z-index: 20;
    letter-spacing: 0.02rem;
    }

    .slick-slider { 
      display: block; 
      @media (max-width: 1000px) { 
       display: none;   
      }
    }

    .rombosText3{
    position: absolute;
    top: 8rem;
    color: white;
    font-size:  0.75rem;
    z-index: 20;
    letter-spacing: 0.02rem;
    margin-left: -3rem;
    opacity: 0.8; 
      @media (max-width: 1000px) {
          
        margin-left: -3.2rem;
        opacity: 0.8;
        padding-top: 0.3rem; 
        
      }
    }

    .seccion1 { 
    background-color: #1c3761d1; 
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: background-color 0.4s ease;
    -moz-transition: background-color 0.4s ease;
    -o-transition: background-color 0.4s ease;
    transition: background-color 0.4s ease;
    }

    .seccion2 { 
    background-color: #465a73b8; 
    display: flex;
    justify-content: center;
    align-items: center; 
    -webkit-transition: background-color 0.4s ease;
    -moz-transition: background-color 0.4s ease;
    -o-transition: background-color 0.4s ease;
    transition: background-color 0.4s ease;
    }

    .seccion3 { 
    background-color: #494949d9;  
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: background-color 0.4s ease;
    -moz-transition: background-color 0.4s ease;
    -o-transition: background-color 0.4s ease;
    transition: background-color 0.4s ease;
    }

    .contactMap{
    max-width: 100%;
    width: 100%;
    max-height: 7rem;
    }

    .h-21 {
    height: 4.5rem;
    }
    .footer1{ 
    letter-spacing: 0.1rem;
    }

    /*NOSOTROS*/
    .imagenNosotros1{ 
    max-height: 40rem;
    } 

    .text-nosotros-direccion{ 
    bottom: -5rem;
    } 

    .imgnos{ 
    width: 75%!important;
    }

    /*PROYECTO*/

    .banner-height{ 
    height:22rem;
    } 

    .slick-slide img {
    display: block;
    height: auto;
    }



  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
    top: 0; 
    max-width: 1280px; 
    margin: 0px auto;
    left: 0;
    right: 0;
  }

  

  @media (min-width: 640px) { 
    .slick-list{ 
      max-height: 25rem;
    }

    .footer-half{
          background: #7091BA;
      } 

      
  .slick-slide img {
    display: block;  
    height: 25rem;
  }


  } 

  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem 1.5rem;
    
    @media (max-width: 1000px) { 
     padding: 1rem 0rem; 
    }


    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.white.base};
      }
    }
  }

  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--scrolled {
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background-color: ${theme.colors.white.light};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    left: 0;
    right: 0;
    nav {
      a {
        color: ${theme.colors.black.base};
        &:hover {
          border-color: ${theme.colors.black.base};
          color: ${theme.colors.black.base};
        }
        &:focus {
          color: ${theme.colors.black.base};
        }
      }
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.black.base};
      }
    }
    span {
      color: ${theme.colors.black.base};
    }
  }
`;

export default headroom;
