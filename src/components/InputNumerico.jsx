import React from 'react'

export function InputNumerico({idInput, nameInput, placeHolderInput, setInput}) {
  const textLabel = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);

  return (
    <>
        <label>{textLabel}</label>
        <input id={idInput} type='number' name={nameInput} placeholder={placeHolderInput} onChange= {e =>setInput(e.target.value)}/>
    </>
  )
}
