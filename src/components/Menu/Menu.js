import React from 'react';
import Menulink from './Menulink';
import estilo from './Menu.module.css';
export default function Menu() {
  return (
    <div className={estilo.container}>
      <Menulink to={'/'}> Home </Menulink>   
      <Menulink to={'sobrenos'}> Sobrenos </Menulink>
    </div>
  )
}
