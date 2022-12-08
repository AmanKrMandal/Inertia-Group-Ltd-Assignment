import React from 'react'
// import NavBar from './componenta/NavBar'
import Card from './componenta/Card'

import "./App.css"
// import home1 from './images/home1.png'
// import home2 from './images/home2.png'
// import home3 from './images/home3.png'
// import home4 from './images/home4.png'
// import home5 from './images/home5.png'
// import logo from './images/logo.png'



const App = () => {




  return (
    <>
      {/* <div className='container-fluid img img-fluid'>
        <div className='row  '>
          <div className='col-md-5'>
            <img className='logo' src={logo} />
            <p className='burger'>It is a good time for the great taste of burgers</p>
            <div className='burgerh1'>
              <h1>BURGER</h1>
              <h2>WEEK</h2>
            </div>
          </div>
          <div className='col-md-6'>
            <img className='img-scooter' src={home1} />
            <p className='number'>Express Delivery +1 234 567 890</p>
            <NavBar />
            <div >
              <img className='img2 img-fluid' src={home2} />
              <img className='img3 img-fluid' src={home3} />
              <img className='img4 img-fluid' src={home4} />
              <img className='img5 img-fluid' src={home5} />
            </div>
          </div>
        </div>
      </div> */}

      <Card />
    </>
  )
}

export default App
