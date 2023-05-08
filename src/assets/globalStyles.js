import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    dark: '#393939',
    light1: '#D9D9D9',
    light2: '#C0C0C0',
    mid: '#808080',
    primary: '#4AF7D8',
    secondary: '#365B6D',
    bg: '#FAFCFF',
    transparentLight: '#ffffff33',
    transparentDark: '#0000000a',
    red: '#ff4747',
  },
  font: {
    size: {
      xsMobile: '1rem',
      xs: '1.1rem',
      sMobile: '1.4rem',
      s: '1.5rem',
      mMobile: '2rem',
      m: '3rem',
      lMobile: '4rem',
      l: '6.4rem',
    },
    weight: {
      s: 300,
      m: 500,
      l: 900,
    },
  },
  space: {
    xs: 0.5,
    s: 1,
    m: 1.5,
    l: 2,
    xl: 3,
    xxl: 5,
  },
  windowSize: {
    small: `(min-width: 400px)`,
    mid: `(min-width: 767px)`,
    big: `(min-width: 1200px)`,
  },
};

export const CONSTANS = {
  MIN_PAGE_WIDTH: 32,
  MIN_PAGE_HEIGHT: 55,
  BUTTON_MIN_HEIGHT_MOBILE: 4.2,
  BUTTON_MIN_HEIGHT: 4.6,
  BUTTON_MIN_WIDTH: 15,
  CLOSE_BUTTON_LENGTH: 5,
  ICON_LENGTH: 1.8,
  MAX_CONTENT_WIDTH: 110,
  MAX_CONTENT_WIDTH_XL: 140,
  SPACE_BETWEEN_SECTIONS: 25,
  SPACE_BETWEEN_SECTIONS_MOBILE: 15,
  SCROLL_BAR_WIDTH: 1.2,
  IMAGE_LENGTH_XS: 4,
  IMAGE_LENGTH_S: 5.5,
  IMAGE_LENGTH_M: 8,
  IMAGE_LENGTH_L: 15,
  NAVIGATION_HEIGHT: 5.5,
};

const GlobalStyle = createGlobalStyle`  
    html {
        box-sizing: border-box;
        font-size: 62.5% !important;
        height: 100%; 
    }
    *, *::before, *::after{
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: greyscale; 
    }
    body{
        display: block;
        background: ${theme.colors.bg};
        background-color: ${theme.colors.bg}; 
        font-family: "Montserrat", sans-serif;
        font-size: ${theme.font.size.sMobile};
        font-weight: ${theme.font.weight.s}; 
        color: black;
        width: 100%; 
        min-width: ${CONSTANS.MIN_PAGE_WIDTH}rem;
        margin: 0;
        padding: 0; 
        
        height: 100%;
        overscroll-behavior: contain;
        overflow: hidden;
        

        @media ${theme.windowSize.big} {
            font-size: ${theme.font.size.s};
        }
    } 

    h1{
        font-size: ${theme.font.size.lMobile}; 
        font-weight: ${theme.font.weight.l}; 
        padding: 0;
        margin: 0; 
        color: ${theme.colors.dark};

        @media ${theme.windowSize.big} {
            font-size: ${theme.font.size.l};  
        }
    }

    h2{
        font-size: ${theme.font.size.mMobile};  
        font-weight: ${theme.font.weight.s};
        padding: 0;
        margin: 0; 
        color: ${theme.colors.dark};

        @media ${theme.windowSize.big} {
            font-size: ${theme.font.size.m};  
        }
    }  

    h3{
        font-size: ${theme.font.size.sMobile};  
        font-weight: ${theme.font.weight.m};
        padding: 0;
        margin: 0;  
        text-transform: uppercase;

        @media ${theme.windowSize.big} {
            font-size: ${theme.font.size.s};  
        }
    } 

    a, button{
        font-family: inherit;   
        font-weight: inherit;
        font-size: inherit;
        color: inherit; 
        outline: none;
        padding: 0;
        margin: 0;
        text-decoration: none; 
        border: none;  
        background-color: transparent;
        background: transparent;
        width: fit-content; 
    }   

    button{
        position: relative; 
        
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        user-drag: none;
        -webkit-user-drag: none; 
        
        ::before {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            content: '';
            background-color: ${theme.colors.transparentLight};
            display: block;
            opacity: 0;
        }

        :hover {
            ::before {
                opacity: 1;
            }
        }
        :active {
            ::before {
                opacity: 0.5;
            }
        }
    }
 
    b{
        font-weight: ${theme.font.weight.m};  
        color: ${theme.colors.dark};
        font-family: "Montserrat", sans-serif;  
    }

    input,
    textarea,
    button,
    div,
    span,
    i,
    img,
    select,
    a {
        -webkit-tap-highlight-color: transparent;
    }

    img{
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        user-drag: none;
        -webkit-user-drag: none; 
    }
 
    .spaceBetweenSections{
        margin-top: ${CONSTANS.SPACE_BETWEEN_SECTIONS_MOBILE}rem; 

        @media ${theme.windowSize.mid} {
            margin-top: ${CONSTANS.SPACE_BETWEEN_SECTIONS}rem;  
        }
    }

    .view-inline-space{ 
        width: 100%;
        max-width: ${CONSTANS.MAX_CONTENT_WIDTH}rem;
        padding-inline: ${theme.space.s}rem;
        margin-inline: auto;

        @media ${theme.windowSize.small} {
            padding-inline: ${theme.space.l}rem;
        }
        @media ${theme.windowSize.mid} {
            padding-inline: ${theme.space.xxl}rem;
        }
    } 

    .smallFont{
        font-size: ${theme.font.size.xsMobile}; 

        @media ${theme.windowSize.big} {
            font-size: ${theme.font.size.xs};  
        }
    }

    .textBorder{
        color: ${theme.colors.bg};
        font-weight: ${theme.font.weight.l};
        text-transform: uppercase; 
        text-shadow: -1px 0 ${theme.colors.dark}, 0 1px ${theme.colors.dark}, 1px 0 ${theme.colors.dark}, 0 -1px ${theme.colors.dark};
    }

    .companyName{  
        font-weight: ${theme.font.weight.l}; 
        text-transform: uppercase;
        letter-spacing: 0.4rem;
        color: ${theme.colors.primary};

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        user-drag: none;
        -webkit-user-drag: none;
    }
 
    .scrollView{
        overflow-y: auto;
        overflow-x: hidden;
                
        @media ${theme.windowSize.mid} {
            ::-webkit-scrollbar {   
                width: ${CONSTANS.SCROLL_BAR_WIDTH}rem;
            }
            ::-webkit-scrollbar-track {
                background-color: ${theme.colors.light1};
            }
            ::-webkit-scrollbar-thumb {
                background-color: ${theme.colors.mid};
                border-radius: ${CONSTANS.SCROLL_BAR_WIDTH}rem;
            }
        }
    }
`;

export default GlobalStyle;
