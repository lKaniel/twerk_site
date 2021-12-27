import React from "react"
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import SEO from "../components/SEO";

export default function Home() {
    return (
        <Layout>
            <SEO />
            <Header/>
            <Info/>
        </Layout>
    )
}
