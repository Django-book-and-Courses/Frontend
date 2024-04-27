import axios from "axios"
import { Fragment, useEffect, useState } from "react"

// Component
import Card from "./common/Card.jsx"

const EbookList = () => {
  const [eBooks, setEbooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://djangotestes.pythonanywhere.com/api/v1/ebooks/")
        setEbooks(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  if (!eBooks) {
    return (
      <div className="m-5 text-center">
        <p className="text-5xl font-bold">404</p>
        <p className="text-xl text-gray-600">Não há ebooks no banco de dados.</p>
      </div>
    )
  }

  return (
    <Fragment>
      <div className="p-5 container mx-auto">
        <div className="flex flex-wrap gap-5">
          {eBooks.map((item, index) => (
            <Card
              cover_photo={item.cover_photo}
              key={index}
              title={item.title}
              authors={item.authors}
              summary={item.summary}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default EbookList
