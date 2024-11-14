import React from 'react'
import Footer from '../components/atom/footer';

function layout({children}:{
    children: React.ReactNode;
  } ) {
  return (
    <div>
        {/* <header>Header</header> */}
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default layout