import styles from './App.module.css'

function App() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.esquerda}>
          <h1 className={styles.h1}>
            Sign In
          </h1>
          <div className={styles.icons}>
          <img src="../public/img/facebook.svg" alt="Twitter" />
          <img src="../public/img/instagram.svg" alt="Twitter" />
          <img src="../public/img/twitter.svg" alt="Twitter" />
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
            </div>
            </div>
          <div className={styles.baixo}>
          <h2 className={styles.h2}>
            Forgot your password
          </h2>
          <div className={styles.btn}>
            <button>
              Sign In
            </button>
          </div>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------- */}
        <div className={styles.direita}>
          <h1 className={styles.h1}>
            Hello, friends
          </h1>
          <h2 className={styles.h2}>Enter Now details and staret joureney with us</h2>
          <div className={styles.btn}>
            <button>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
