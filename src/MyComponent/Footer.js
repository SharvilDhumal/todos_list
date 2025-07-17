import React from 'react'

const Footer = () => {
  let footerStyle = {
    marginTop: "auto"
  }

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle} >
      <p className="text-center" style={{ color: "cyan" }} >
        Copyright &copy; MyTodolist.com
      </p>
    </footer>
  )
}

export default Footer;
