import React from 'react'

export function Card({nombre, apellido, edad, anime}) {
  return (
    <>
        <h2>Hola {nombre} {apellido} !</h2>
        <strong>Sabemos que tienes {edad} años y que te encanta el anime {anime}</strong>
    </>
  )
}