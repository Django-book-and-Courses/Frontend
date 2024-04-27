import axios from "axios"
import { useState } from "react"

const EbookPoster = () => {
  const [post, setPost] = useState({
    title: "",
    first_name: "",
    last_name: "",
    summary: "",
  })

  const handleInput = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post("https://djangotestes.pythonanywhere.com/api/v1/ebooks/", post)
      .then((response) => {
        console.log(response)
        console.log(post)
      })
      .catch((error) => console.log(error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-1/2 m-5 p-5 border-2 rounded-lg">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Título */}
                  <div className="col-span-6">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                      Título
                    </label>
                    <div className="mt-2">
                      <input
                        name="title"
                        type="text"
                        value={post.title}
                        onChange={handleInput}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* Primeiro Nome */}
                  <div className="col-span-6">
                    <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                      Primeiro nome
                    </label>
                    <div className="mt-2">
                      <input
                        name="first_name"
                        type="text"
                        value={post.first_name}
                        onChange={handleInput}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* Último Nome */}
                  <div className="col-span-6">
                    <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                      Último nome
                    </label>
                    <div className="mt-2">
                      <input
                        name="last_name"
                        type="text"
                        value={post.last_name}
                        onChange={handleInput}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* Sobre o Filme */}
                  <div className="col-span-full">
                    <label htmlFor="summary" className="block text-sm font-medium leading-6 text-gray-900">
                      Sobre o filme
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="summary"
                        rows={3}
                        value={post.summary}
                        onChange={handleInput}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="button bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default EbookPoster
