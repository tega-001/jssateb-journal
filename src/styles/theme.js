import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        common: {
            black: '#19192B',
            white: '#ffffff',
        },
        primary: {
            main: '#78100D',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#3E43B2', // omitting light and dark will calculate from main
            contrastText: '#ffffff',
        },
        grey: {
            500: '#bcbcbc',
            700: '#79797a',
        },
        info: {
            main: '#1bb2f1',
        },
        success: {
            main: '#00d589',
        },
        error: {
            main: '#832838',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
});

export default theme;
