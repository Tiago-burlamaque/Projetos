import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import RegisterCourse from "../../components/RegisterCourse/RegisterCourse";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [courseToUpdate, setCourseToUpdate] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/course")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar cursos:", err);
        setLoading(false);
      });
  }, []);

  const handlePut = async(id) => {
    setIsModalOpen(true)
    try {
        await axios.put(`http:localhost:3000/course/${id}`)
        toast.success('curso atualizado')
    } catch (e) {
      
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/course/${id}`);
      // Atualiza lista local removendo curso deletado
      setPosts(posts.filter((curso) => curso.id !== id));
      console.log("Curso deletado:", id);
    } catch (error) {
      console.error("Erro ao deletar curso:", error);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Carregando cursos...</p>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-bold text-rose-400">Cursos</h1>
        <button
          className="p-4 text-2xl border-none rounded-2xl text-rose-300 hover:bg-rose-300 transition hover:text-rose-100 hover:shadow-xl cursor-pointer"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Cadastrar Curso
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegisterCourse />
      </Modal>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((curso) => (
            <div
              key={curso.id}
              className="border rounded-2xl p-5 shadow-md bg-rose-100 hover:shadow-lg transition flex flex-col"
            >
              <h2 className="text-2xl font-semibold text-rose-300 mb-2">{curso.nomeCurso}</h2>
              <p
                className={`text-sm font-semibold mb-2 ${curso.status === "Concluido" ? "text-green-600" : "text-yellow-500"
                  }`}
              >
                Status: {curso.status}
              </p>
              <p className="text-rose-300 mb-3">{curso.descricao}</p>
 
              {curso.linkCurso && (
                <a
                  href={curso.linkCurso}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-rose-400 font-semibold underline hover:text-cyan-600 transition"
                >
                  Acessar curso →
                </a>
              )}

              <button
                onClick={() => handleDelete(curso.id)}
                className="border-none p-2 rounded-2xl cursor-pointer mt-3 hover:bg-rose-300 hover:text-rose-100 transition hover:shadow-xl"
              >
                Deletar
              </button>
              <button
              onClick={() => handlePut(curso.id)}
              className="border-none p-2 rounded-2xl cursor-pointer mt-3 hover:bg-rose-300 hover:text-rose-100 transition hover:shadow-xl">
                Atualizar
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">Nenhum curso encontrado.</p>
        )}
      </main>
    </div>
  );
}

export default Home;
