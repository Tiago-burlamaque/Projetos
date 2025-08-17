import styles from './App.module.css'
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';

function App() {

    const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Usuário logado:", result.user);
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
    };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.esquerda}>
          <h1 className={styles.h1}>
            Sign In
          </h1>
          <div className={styles.icons}>
            <div className={styles.btn}>
              <button onClick={loginGoogle}>Entrar com Google</button>
            </div>
          </div>
          <div className={styles.meio}>
            <h3 className={styles.h3}>
              or use your account
            </h3>
            <div className={styles.input}>
            <input type="email" 
            placeholder='Email'/>
            <input type="password"
            placeholder='Senha' />
            <div className={styles.btn}>
              <button>
                Sign In
              </button>
            </div>
            </div>
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
        <div className={styles.direita}>
          <h1 className={styles.h1}>
            Hello, friends
          </h1>
          <h2 className={styles.h2}>Enter Now details and staret joureney with us</h2>
          {/* <div className={styles.btn}> */}
            <Link to="/Cadastro" className={styles.link}>
              To Start
            </Link>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}


export default App
