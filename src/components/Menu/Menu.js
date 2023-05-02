import React from 'react'
import Menulink from './Menulink'

export default function Menu() {
  return (
    <div>
      <Menulink to={'/'}> Home </Menulink>   
      <Menulink to={'sobrenos'}> Sobrenos </Menulink>
    </div>
  )
}
