import React from 'react'

export default function CardImagem(props) {
  return (
    <div style={{
      padding:20,
      display:'flex',
      flexDirection:'column',
      width:"30%",
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#d5d5d5',
      margin:'1em',
      textAlign:'center'
      }}>
      <img 
      style={{height:'10em',width:'15em'}} 
      src={props.imagem} 
      alt={props.descImagem}
      />
      <h1>{props.tituloCard}</h1>
      <p>{props.descricao}</p>
    </div>
  )
}
