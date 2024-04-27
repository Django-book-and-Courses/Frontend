import axios from "axios"
import { useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"

// Component
import Card from "./common/Card.jsx"

const EbookFinder = () => {
  const { eBookId } = useParams()
  const [eBook, setEbook] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://djangotestes.pythonanywhere.com/api/v1/ebooks/${+eBookId}/`)
        setEbook(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [eBookId])

  const handleDelete = async () => {
    try {
      await axios.delete(`https://djangotestes.pythonanywhere.com/api/v1/ebooks/${+eBookId}/`)
    } catch (error) {
      return console.log(error)
    }
  }

  console.log(eBook.authors)

  if (!eBook) {
    return (
      <div className="m-5 text-center">
        <p className="text-5xl font-bold">404</p>
        <p className="text-xl text-gray-600">Não há ebook no banco de dados.</p>
      </div>
    )
  }

  return (
    <div className="p-5 container mx-auto">
      <Card
        cover_photo={eBook.cover_photo}
        title={eBook.title}
        authors={eBook.authors}
        summary={eBook.summary}
        id={eBook.id}
        showDeleteButton={true}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default EbookFinder
