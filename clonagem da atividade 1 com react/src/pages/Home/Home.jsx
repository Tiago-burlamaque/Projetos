import React, { useEffect, useState } from 'react'


const Home = () => {
  
const [posts, setPosts] = useState([])


  return (
    <>
    <h1 className='text-5xl m-5 text-rose-300 justify-center'>Cursos</h1>
  <div className='flex grid grid-cols-3  gap-2 justify-center items-center ml-5 mr-5 mb-5'>
          <div className="flex-col scroll-ml-6 p-1 border-4 bg-rose-300 border-rose-300 hover:transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 pt-2 rounde-xl cursor-pointer rounded-xl">
            {/* Video 1 */}
            <iframe width="465" height="250" src="https://www.youtube.com/embed/S9uPNppGsGo?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6" title="Curso Python #01 - Seja um Programador" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-xl'></iframe>
            <h1 className='font-bold text-white text-start '>Curso Python #01 - Seja um Programador </h1>

          </div>
          <div className="flex-col scroll-ml-6 p-1 border-4 bg-rose-300 border-rose-300 hover:transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 pt-2 rounde-xl cursor-pointer rounded-xl">
          {/* Video 2 */}
          <iframe width="465" height="250" src="https://www.youtube.com/embed/Ejkb_YpuHWs?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" title="Começa aqui o novo @Curso em Vídeo de HTML5 e CSS3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-xl'></iframe>
          <h1 className='font-bold text-white text-center'>Módulo 1 @Curso em Vídeo de HTML5 e CSS3</h1>

          </div>
          <div className="flex-col scroll-ml-6 p-1 border-4 bg-rose-300 border-rose-300 hover:transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 pt-2 rounde-xl cursor-pointer rounded-xl">
          {/* Video 3 */}
            <iframe width="465" height="250" src="https://www.youtube.com/embed/1-w1RfGIov4?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" title="Curso de JavaScript - Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-xl'></iframe>
            <h1 className='font-bold text-white text-center'>Curso de JavaScript - Teaser</h1>
          </div>
          <div className="flex-col scroll-ml-6 p-1 border-4 bg-rose-300 border-rose-300 hover:transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 pt-2 rounde-xl cursor-pointer rounded-xl">
          {/* Video 4 */}
        <iframe width="465" height="250" src="https://www.youtube.com/embed/xEKo29OWILE?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA" title="O que é Git? O que é versionamento? - Curso de Git e GitHub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1 className='font-bold text-white text-center'>O que é Git? O que é versionamento? - Curso de Git e GitHub
</h1>
          </div>
          <div className="flex-col scroll-ml-6 p-1 border-4 bg-rose-300 border-rose-300 hover:transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 pt-2 rounde-xl cursor-pointer rounded-xl">
          {/* Video 5 */}
            <iframe width="465" height="250" src="https://www.youtube.com/embed/1-w1RfGIov4?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" title="Curso de JavaScript - Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-xl'></iframe>
            <h1 className='font-bold text-white text-center'>Curso de JavaScript - Teaser</h1>
          </div>
          <div className="flex-col scroll-ml-6 p-1 border-4 bg-rose-300 border-rose-300 hover:transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl/30 pt-2 rounde-xl cursor-pointer rounded-xl">
          {/* Video 6 */}
        <iframe width="465" height="250" src="https://www.youtube.com/embed/KvPtIl-Gz2E?list=PLHz_AreHm4dlaTyjolzCFC6IjLzO8O0XV" title="Curso de Segurança da Informação - @Curso em Vídeo - Módulo 0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-xl'></iframe>
            <h1 className='font-bold text-white text-center'>Curso de JavaScript - Teaser</h1>
          </div>
        </div>
    </>
      //    <div className='flex gap-2'>
      //   {
      //     posts && posts.map(post => (
      //       <div key={post.id} className='card m-5'>
      //         <img src={post.image} />
      //         <h2>{post.title}</h2>
      //         <p>Views: {post.views}</p>
      //         <Link to={`/post/${post.id}`}
      //         className='text-blue-500 underline'>
      //           Leia mais
      //         </Link>
      //       </div>
      //     ))
      //   }
      // </div>
  )
}

export default Home