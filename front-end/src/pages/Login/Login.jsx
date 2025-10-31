import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { toast } from "react-toastify"
import axios from "axios"
import Modal from "../../components/Modal/Modal"
import Registro from "../../components/RegisterUser/RegisterUser"

function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  // navigate
  const navigate = useNavigate()

  // Contexto
  const { login } = useAuth()

  // Função validação de login

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()


    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: {email, senha}
      })
      // console.log(response)

      if (response.data.length === 0) {
        console.log("Usuário não encontrado")
        toast.error('Usuário não encontrado. Verifique o email e senha', {
          autoClose: 3000,
          hideProgressBar: true
        })
        return
      }
      login(email)
      // console.log(response.data) 
      navigate("Home")
      toast.success("Login realizado com sucesso!", {
        autoClose: 3000,
        hideProgressBar: true
      })
    } catch (e) {
      console.error(e)
    }

  }
  return (
    <>
      <div className="flex min-h-screen bg-white ">
        <div className="hidden md:flex w-1/2 bg-gray flex-col items-center justify-center p-8">
          <h1 className="font-normal text-5xl mb-6">Sign In</h1>
          <form className="flex-col justify-center items-center" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-5 w-100 border rounded-lg p-2 outline-none flex text-xl"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-5 w-100 border rounded-lg p-2 outline-none mb-6 flex"
              required
            />
            <div className="flex justify-center items-center">
              <button className="cursor-pointer text-white bg-rose-300 rounded-full p-2 w-40 hover:bg-white hover:text-rose-300 hover:duration-300 hover:shadow-xl/30 ease-out" type="submit">Sign In</button>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="mt-2 mb-2 text-xl" >Forgot your password</h2>
            </div>
            <div className="flex justify-center items-center">
              <button className="cursor-pointer text-rose-300 hover:text-rose-500 duration-300 ease-in-out " onClick={() => setIsModalOpen(true)}>Sign Up</button>
            </div>
          </form>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Registro />
          </Modal>
        </div>
        <div className="w-full md:w-1/2 md:flex flex-col justify-center items-center text-center p-8 bg-rose-300 text-white">
          <h1 className='text-5xl mb-4'>Hello, friends</h1>
          <h2 className="text-xl ">Enter Now details and staret joureney with us</h2>
          {/* <Link to="registro" className="hover:text-blue-200 mt-4 text-4xl hover: hover:duration-300 ease-out">To start</Link> */}
        </div>
      </div>
      {/* <div className={styles.container}>
        <div className={styles.esquerda}>
          <h1 className={styles.h1}>
            Sign In
          </h1>
          <div className={styles.icons}>
            <div className={styles.btn}>
            </div>
          </div>
          <div className={styles.meio}>
            <form onSubmit={handleSubmit}>
            <div className={styles.input}>
            <input 
            type="text"
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required/>
            <input 
            type="email" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
            <input
            type="password"
            placeholder='Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required/>
            <div className={styles.btn}>
              <button>
                Sign In
              </button>
            </div>
            </div>
              </form>
            </div>
          <div className={styles.baixo}>
          <h2 className={styles.h2}>
            Forgot your password
          </h2>
          <div className={styles.btn}>
            <Link className={styles.link} to="/Cadastro">
              Sign Up
            </Link>
          </div>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------- */}
      {/* <div className={styles.direita}>
          <h1 className={styles.h1}>
            Hello, friends
          </h1>
          <h2 className={styles.h2}>Enter Now details and staret joureney with us</h2> */}
      {/* <div className={styles.btn}> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  )
}



export default Login
