import React from 'react'

const My = () => {
  return (
    <section id='my'>
      <div className='text-[60px]'>Rimi</div>
      <nav className='text-right'>
        <ul className='flex space-x-4 flex-col'>
          <li>
            <a href='#experience' className='text-blue-500 hover:underline'>
              Experience
            </a>
          </li>
          <li>
            <a href='#projects' className='text-blue-500 hover:underline'>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default My
