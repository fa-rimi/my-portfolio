import React from 'react'
import Navbar from './components/Navbar'
import My from './pages/My'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='flex flex-grow overflow-hidden'>
        <div className='w-2/5 h-full overflow-y-auto fixed flex justify-center items-center'>
          <My />
          {/* <Footer /> */}
        </div>
        <div className='w-3/5 h-full fixed right-0 top-0 overflow-y-auto pt-[50px]'>
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
