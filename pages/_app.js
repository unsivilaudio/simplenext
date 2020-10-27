import React from 'react';
import App from 'next/app';

import Navbar from '../components/Navbar';
import './_app.css';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Navbar />
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
