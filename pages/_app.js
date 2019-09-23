import App from "next/app";
import Layout from "../components/Layout/Layout";
import Head from 'next/head'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Matthias von Bargen | Freelance PHP Consultant</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        );
    }
}

export default MyApp;