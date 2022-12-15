import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  // Aplicando useState
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  // Aplicando onChange

  const inputName = (event) => {
    setName(event.target.value)
  };

  const inputAge = (event) => {
    setAge(event.target.value)
  };

  const inputEmail = (event) => {
    setEmail(event.target.value)
  }

  // Recuperando e imprimindo os dados

  const dataPrint = () => {
    console.log(`Nome: ${name}
    Idade: ${age}
    E-mail: ${email}`);

    setName('');
    setAge('');
    setEmail('');
  }


  return (

    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input placeholder='Nome' onChange={inputName}  value={name}/>
        </label>
        <label>
          Idade:
          <Input placeholder='Idade' onChange={inputAge} value={age}/>
        </label>  
        <label>
          E-mail:
          <Input placeholder = "E-mail" onChange={inputEmail} value={email}/>
        </label>  
      <button onClick={dataPrint} >Enviar dados</button>
      </Form>

    </MainContainer>
  )
}

export default MainPage
