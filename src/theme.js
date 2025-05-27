import { red } from '@mui/material/colors';
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

/* A custom theme for this app
https://mui.com/material-ui/customization/color/
https://m2.material.io/design/color/the-color-system.html#color-theme-creation
https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

*/

const redBase = '#cd2504';
const redLight = '#FC6D50';
const redDark = "#7D1702";
const redMain = alpha(redBase, 0.7);

const blueBase = '#04accd';
const blueLight = '#50DFFC';
const blueDark = "#02697D";
const blueMain = alpha(redBase, 0.7);

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    palette: {
        mode:'light',
        primary: {
            main: redBase,
            light: redLight,
            dark: redDark,
            contrastText: '#fff',
        },
        secondary: {
            main: blueBase,
            light: blueLight,
            dark: blueDark,
            contrastText: '#00626a',
        },
        error: {
            main: red.A400,
        },

        white: {
            main: '#ffffff',
            contrastText: '#111',
        },

        dark: {
            main: '#404040',
        },
    },

    typography: {
        primary: {
            fontFamily: 'articulat-cf',
            fontWeigthLigth: 400,
            fontWeigthRegular: 500,
            fontWeigthMedium: 600,
            fontWeigthBold: 700,
        },
        secondary: {
            fontFamily: 'artifex-cf',
            fontWeigthLigth: 400,
            fontWeigthRegular: 500,
            fontWeigthMedium: 600,
            fontWeigthBold: 700,
        },
    },

    /*
        https://stackoverflow.com/questions/39138380/how-to-apply-different-color-in-appbar-title-material-ui
    */

    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    /* backgroundColor: "white",*/
                    color: redBase,
                }
            }
        }
    },
    cssVariables: true,

});

export default theme;