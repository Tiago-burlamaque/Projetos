import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import Rodape from "../Rodape/Rodape";
import RegisterUser from "../../components/RegisterUser/RegisterUser";


export default function Main() {
  const location = useLocation();
  
  // Verifica se está na página de login
  const isLoginPage = location.pathname === "/";

  return (
    <div>
      {/* Header visível apenas fora da rota de login */}
      {!isLoginPage && <RegisterUser /> && <Header />}

      <main className="">
        {/* Corpo das páginas */}
        <Outlet />
        <div className="">
      {!isLoginPage && <RegisterUser /> && <Rodape />}
        </div>
      </main>
    </div>
  );
}
