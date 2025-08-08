import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-[#c0392b]  px-4 pb-4 ' >
      <div className="container   text-sm text-muted-foreground flex items-center justify-between">
        <p>© {new Date().getFullYear()} Blogr</p>
        <p>BlogSpace@Copyrights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;       