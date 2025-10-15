import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Registro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleRegister = async(e) => {
        console.log("entrou ")
    e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/auth/register', {
        nome, email, senha 
        })    
        console.log(response)
        navigate("/")
        toast.success("Registro realizado com sucesso!", {
          autoClose: 3000,
          hideProgressBar: true
        })
      } catch (e) {
        console.log("entrou ", e)

      }
    }
  return (
    <div className='w-full max-w-md p-6 bg-white rounded-xl shadow-lg flex-col'>
    <form className='space-y-4 flex-col'>
    <h2 className='text-2xl font-bold mb-6 text-center'>Criar Usuário</h2>
      <div>
        <div className="flex">

        <label htmlFor="nome" className='block text-sm font-medium mb-1'>Email:</label>
        <input type="text" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        className='border' 
        />
        <label htmlFor="email" className='block text-sm font-medium mb-1'>Email:</label>
        <input type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className='border' 
        />
        <div className="flex">

        </div>
        <label htmlFor="senha" className='block text-sm font-medium mb-1'>Senha:</label>
        <input type="password" 
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
        className='border' 
        />
        </div>
      </div>
    </form>
  </div>
  )
}

export default Registro
