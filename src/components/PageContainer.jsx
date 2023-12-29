import React from 'react'
import Header from '../layout/header'
import Navbar from '../layout/Navbar'

function PageContainer(a) {
  return (
    <>
        <Header/>
        <div className="Home-comtainer">
                <Navbar/>
                <div className="Home-right">
                    <main>{a.children}</main>
                </div>
        </div>
    </>
  )
}

export default PageContainer