import React from 'react'

function NotFound() {
  return (
    <body className='bg-gray-300'>
        <div className='flex-col justify-center items-center'>
      <h1 className='text-5xl text-rose-400 mb-10'>Pagina não encontrada⚠️</h1>
      <h2 className='text-2xl text-rose-400 mb-3'>Motivo que possa dar esse problema:</h2>
      <ul className='text-xl text-rose-400'>
        <li>
            1: Falha na rota ou rota não criada
        </li>
      </ul>
      </div>
    </body>
  )
}

export default NotFound
