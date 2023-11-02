import React from 'react'

export function Formulario({children, handleForm, textSubmit, nameSubmit}) {

  const handleSubmit = (e) =>{
    e.preventDefault();
    handleForm();
  }  

  return (
    <form onSubmit={handleSubmit}>
        {children}
        <button type='submit' name={nameSubmit}>{textSubmit}</button>
    </form>
  )
}