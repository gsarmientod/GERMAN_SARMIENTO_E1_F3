import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { InputNumerico } from './components/InputNumerico'
import { InputTexto } from './components/InputTexto'
import { Card } from './components/Card'

function App() {
  
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(0);
  const [anime, setAnime] = useState("");

  const [classNameCard, setclassNameCard] = useState("card-invisible");
  const [classNameError, setclassNameError] = useState("card-invisible");
 
  const handleForm = () =>{

    setclassNameCard("card-invisible");
    setclassNameError("card-invisible");

    if (nombre.length >= 3){
      console.log("cumple long");
      if (!/^\s/.test(nombre)){
        if (apellido.length >= 6 && edad > 0 && anime !== ""){
          setclassNameCard("card-visible");
        }else{
          setclassNameError("card-visible");
        }
      }else{
        setclassNameError("card-visible");
      }
    }else{
      setclassNameError("card-visible");
    }

  };

  return (
    <>
      <h1>Entregable noviembre 2023: German Sarmiento</h1>
      <Formulario handleForm={handleForm} textSubmit="Enviar" nameSubmit="enviar">
        <InputTexto idInput="form-input-nombre" nameInput="nombre" placeHolderInput="Ingresa tu nombre" setInput={setNombre}/>
        <InputTexto idInput="form-input-apellido" nameInput="apellido" placeHolderInput="Ingresa tu apellido" setInput={setApellido}/>
        <InputNumerico idInput="form-input-edad" nameInput="edad" placeHolderInput="Ingresa tu edad" setInput={setEdad}/>
        <InputTexto idInput="form-input-anime" nameInput="anime" placeHolderInput="'¿Cual es tu anime favorito?'" setInput={setAnime}/>
      </Formulario>
      
      <article id='contenedor-card' className={classNameCard}>
        <Card nombre={nombre} apellido={apellido} edad={edad} anime={anime}/>
      </article>
      <div id="contenedor-error" className={classNameError}>
        <strong>Por favor chequea que la información sea correcta</strong>
      </div>
    </>
  )
}

export default App
