/* eslint-disable react/jsx-props-no-spreading */
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { AuthContextProvider } from '../context/AuthContext';
import '../styles/global.css';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AuthContextProvider>
                <Component {...pageProps} />
            </AuthContextProvider>
        </ThemeProvider>
    );
};

export default MyApp;
