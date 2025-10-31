import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const RegisterCourse = () => {
    //campos do formulário
    const [nomeCurso, setNomeCurso] = useState('')
    const [status, setStatus] = useState('')
    const [descricao, setDescricao] = useState('')
    const [linkCurso, setLinkCurso] = useState('')

    const [emAndamento, setEmandamento] = useState()
    const [concluido, setConcluido] = useState()

    const [isSaving, setIsSaving] = useState(false)

    const resetForm = () => {
        setNomeCurso('')
        setStatus('')
        setDescricao('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:3000/course', { nomeCurso, status, descricao, linkCurso })
            setIsSaving(false)
            resetForm()
            toast.success("Curso criado com sucesso!", {
                autoClose: 3000,
                hideProgressBar: true
            })

        } catch (error) {
            console.error("Erro ao criar o Curso", error)
            toast.error('Erro ao criar o Curso!', {
                autoClose: 3000,
                hideProgressBar: true
            })
            setIsSaving(false)
        }
    }



    return (
        <div className='w-full max-w-md p-6 bg-rose-300 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Criar Curso</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label htmlFor='nomeCurso' className='block text-sm font-medium mb-1'>Nome do Curso:</label>
                    <input
                    type="text"
                    required
                    value={nomeCurso}
                    onChange={(e) => setNomeCurso(e.target.value)}
                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-white' 
                    />
                </div>

                <div>
                    <select name="status" id="status" className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-gray-500'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                    >
                        <option value="">status</option>
                        <option value={emAndamento} onChange={(e) => setEmandamento(e.target.value)}>Em andamento</option>
                        <option value={concluido} onChange={(e) => setConcluido(e.target.value)}>Concluido</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="link">Link:</label>
                    <input
                    type="text"
                    value={linkCurso} 
                    onChange={(e) => setLinkCurso(e.target.value)}
                    required
                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-gray-500'/>
                </div>

                <div className='flex flex-col'>
                    <div className="flex">

                    <label htmlFor="descricao">Descrição:</label> <span className='ml-2 text-gray-200'>(Opicional)</span>
                    </div>
                    <textarea 
                    name="descricao" 
                    id="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-white'
                    />
                </div>

                <div className='flex justify-center'>
                    <button
                        type='submit'
                        className={`w-full p-2 rounded-lg text-white ${isSaving ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} transition-colors cursor-pointer`}
                    >
                        {isSaving ? 'Salvando' : 'Criar Curso'}
                    </button>
                </div>
            </form>
        
        </div>
    )
}

export default RegisterCourse