import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Menulink({children,to}) {
  const localizacao=useLocation().pathname;
  return (
    <Link to={to}>{children}</Link>
  )
}
