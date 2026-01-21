import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <div style={{ minHeight: 'calc(100vh - 90px)', position: 'relative' }}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout
