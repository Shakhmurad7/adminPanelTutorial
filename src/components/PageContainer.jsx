import React from 'react'
import Header from '../layout/header'

function PageContainer(a) {
  return (
    <>
        <Header/>
        <main>{a.children}</main>
    </>
  )
}

export default PageContainer