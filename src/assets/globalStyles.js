import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    light1: '#F2F2F2',
    light2: '#D9D9D9',
    light3: '#C0C0C0',
    dark1: '#1A1A1A',
    dark2: '#333333',
    mid: '#808080',
    primary: '#4AF7D8',
    red: '#ff4747',
    bg: '#F5FAFF',
    bgDarker: '#EBF0F5',
    transparentLight: '#ffffff33',
    transparentDark: '#00000033',
    hoverBg: '#00000007',
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
  BUTTON_MIN_HEIGHT_MOBILE: 4.2,
  BUTTON_MIN_HEIGHT: 4.6,
  BUTTON_MIN_WIDTH: 12,
  CLOSE_BUTTON_LENGTH: 5,
  ICON_LENGTH: 2.2,
  MAX_CONTENT_WIDTH: 140,
  SPACE_BETWEEN_SECTIONS: 18,
  SCROLL_BAR_WIDTH: 1,
  IMAGE_LENGTH_S: 5.5,
  IMAGE_LENGTH_M: 8,
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
        font-family: "Montserrat", Helvetica, sans-serif;
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
        color: ${theme.colors.dark2};

        @media ${theme.windowSize.big} {
            font-size: ${theme.font.size.l};  
        }
    }

    h2{
        font-size: ${theme.font.size.mMobile};  
        font-weight: ${theme.font.weight.s};
        padding: 0;
        margin: 0; 
        color: ${theme.colors.dark2};

        @media ${theme.windowSize.big} {
            font-size: ${theme.font.size.m};  
        }
    }  

    a{
        color: inherit; 
        outline: none;
        padding: 0;
        margin: 0;
        text-decoration: none; 
        border: none;  
        
    }   
 
    b{
        font-weight: ${theme.font.weight.m};  
        color: ${theme.colors.dark2};
        font-family: "Montserrat", Helvetica, sans-serif;  
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

    .view-inline-space{ 
        width: 100%;
        max-width: ${CONSTANS.MAX_CONTENT_WIDTH}rem;
        padding-inline: 1rem;
        margin-inline: auto;

        @media ${theme.windowSize.small} {
            padding-inline: 2rem;
        }
        @media ${theme.windowSize.mid} {
            padding-inline: 5rem;
        }
    }

    .smallFont{
        font-size: ${theme.font.size.xsMobile}; 

        @media ${theme.windowSize.big} {
            font-size: ${theme.font.size.xs};  
        }
    }

    .textBorder{
        font-weight: ${theme.font.weight.l};
        text-transform: uppercase; 
        text-shadow: -1px 0 ${theme.colors.dark2}, 0 1px ${theme.colors.dark2}, 1px 0 ${theme.colors.dark2}, 0 -1px ${theme.colors.dark2};
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
`;

export default GlobalStyle;
