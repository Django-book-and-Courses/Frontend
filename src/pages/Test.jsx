import axios from "axios"
import { useState } from "react"

// Instância do Axios para conectar à API
const apiClient = axios.create({
  baseURL: "https://djangotestes.pythonanywhere.com/api/v1/", // Base URL para a API
  headers: {
    "Content-Type": "multipart/form-data", // Como o formulário é multipart
  },
})

const Test = () => {
  // Estados para os campos do formulário
  const [title, setTitle] = useState("") // Título do ebook
  const [summary, setSummary] = useState("") // Descrição ou sumário do ebook
  const [publicationDate, setPublicationDate] = useState("") // Data de publicação do ebook
  const [numPages, setNumPages] = useState(1) // Número de páginas do ebook
  const [coverPhoto, setCoverPhoto] = useState(null) // Imagem de capa do ebook

  const handleSubmit = (e) => {
    e.preventDefault()

    // Cria o FormData com os campos do formulário
    const formData = new FormData()
    formData.append("title", title) // Título do ebook
    formData.append("summary", summary) // Descrição ou sumário do ebook

    // Converte a data de publicação para o formato correto
    const formattedDate = new Date(publicationDate).toISOString().split("T")[0]
    formData.append("publication_date", formattedDate) // Data de publicação do ebook

    formData.append("num_pages", numPages) // Número de páginas do ebook
    formData.append("cover_photo", coverPhoto) // Imagem de capa do ebook

    // Requisição POST para o endpoint
    apiClient
      .post("ebooks/", formData)
      .then((response) => {
        console.log("Sucesso:", response.data)
      })
      .catch((error) => {
        console.error("Erro ao enviar formulário:", error)
      })
  }

  return (
    <div>
      <h2>Criar um novo Ebook</h2>
      {/* Formulário para enviar dados para a API */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="summary">Descrição ou Sumário:</label>
          <textarea id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} rows={4} required />
        </div>

        <div>
          <label htmlFor="publication_date">Data de Publicação:</label>
          <input
            type="date"
            id="publication_date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="num_pages">Número de Páginas:</label>
          <input
            type="number"
            id="num_pages"
            value={numPages}
            onChange={(e) => setNumPages(e.target.value)}
            min={1}
            required
          />
        </div>

        <div>
          <label htmlFor="cover_photo">Foto de Capa:</label>
          <input type="file" id="cover_photo" onChange={(e) => setCoverPhoto(e.target.files[0])} accept="image/*" />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Test
