import React from 'react'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import PropertyList from '../../components/propertyList/PropertyList'

const Home = () => {
    return <>
        <Header />
        <div className="home">
            <Featured />
            <PropertyList />
            <MailList />
            <Footer />
        </div>
    </>
}

export default Home