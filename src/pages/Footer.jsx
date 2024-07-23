import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='w-full py-4 flex justify-center space-x-4'>
      <a
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:text-blue-700'
      >
        <FontAwesomeIcon icon={faInstagram} size='2x' />
      </a>
      <a
        href='https://linkedin.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:text-blue-700'
      >
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
      <a
        href='https://github.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:text-blue-700'
      >
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
    </footer>
  )
}

export default Footer
