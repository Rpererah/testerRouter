import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import estilo from './MenuLink.module.css'

export default function Menulink({children,to}) {
  const localizacao=useLocation().pathname;
  return (
    <Link 
    className={` 
                ${estilo.linkComum}
                ${localizacao === to ? estilo.linkDestacado : ""}
                `}
    to={to}>{children}
    </Link>
  )
}
