import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navigation/NavBar';

const Layout = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <meta name="description" content={description} />
                <meta name="robots" content="all" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
