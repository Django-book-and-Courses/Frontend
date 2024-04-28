import axios from "axios"
import { useState } from "react"

// Configuração do cliente Axios
const apiClient = axios.create({
  baseURL: "https://djangotestes.pythonanywhere.com/api/v1/",
  headers: { "Content-Type": "multipart/form-data" },
})

const App = () => {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    publicationDate: "",
    numPages: 1,
    coverPhoto: null,
  })

  const [coverPhotoPreview, setCoverPhotoPreview] = useState(null)

  const handleChange = (field) => (e) => {
    const value = field === "coverPhoto" ? e.target.files[0] : e.target.value
    setForm((prevForm) => ({ ...prevForm, [field]: value }))

    if (field === "coverPhoto") {
      setCoverPhotoPreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("title", form.title)
    formData.append("summary", form.summary)
    formData.append("publication_date", new Date(form.publicationDate).toISOString().split("T")[0])
    formData.append("num_pages", form.numPages)
    formData.append("cover_photo", form.coverPhoto)

    apiClient
      .post("ebooks/", formData)
      .then((response) => console.log("Sucesso:", response.data))
      .catch((error) => console.error("Erro ao enviar formulário:", error))
  }

  return (
    <div className="flex justify-center items-center h-full p-5 bg-gray-100">
      <div className="w-2/6 min-w-[300px] max-w-[600px] p-8 border-2 border-gray-300 rounded-xl bg-white shadow-md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex flex-col">
            <label htmlFor="title" className="font-bold mb-2">
              Título:
            </label>
            <input
              type="text"
              id="title"
              className="p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
              value={form.title}
              onChange={handleChange("title")}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="summary" className="font-bold mb-2">
              Descrição ou Sumário:
            </label>
            <textarea
              id="summary"
              className="p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
              value={form.summary}
              onChange={handleChange("summary")}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="publication_date" className="font-bold mb-2">
              Data de Publicação:
            </label>
            <input
              type="date"
              id="publication_date"
              className="p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
              value={form.publicationDate}
              onChange={handleChange("publicationDate")}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="num_pages" className="font-bold mb-2">
              Número de Páginas:
            </label>
            <input
              type="number"
              id="num_pages"
              className="p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
              value={form.numPages}
              onChange={handleChange("numPages")}
              min={1}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cover_photo" className="font-bold mb-2">
              Foto de Capa:
            </label>
            <input
              type="file"
              id="cover_photo"
              className="p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
              onChange={handleChange("coverPhoto")}
              accept="image/*"
            />
          </div>

          {coverPhotoPreview && (
            <img src={coverPhotoPreview} alt="Pré-visualização da capa" className="max-w-full rounded mt-4" />
          )}

          <button
            type="submit"
            className="p-2 border-none bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer"
          >
            Criar post
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
