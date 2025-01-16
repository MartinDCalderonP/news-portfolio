import React from 'react'
import { FiLinkedin, FiMail } from 'react-icons/fi'

const socialMediaLinks = [
  {
    icon: <FiLinkedin />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/martincalderon92'
  },
  {
    icon: <FiMail />,
    name: 'Email',
    url: 'mailto:martincalderon92@outlook.com'
  }
]

const SocialMediaLinks = () => {
  return (
    <div className='social-media-links'>
      {socialMediaLinks.map(({ icon, name, url }) => (
        <a
          key={name}
          className='social-media-link'
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          {icon}
        </a>
      ))}
    </div>
  )
}

export default SocialMediaLinks
