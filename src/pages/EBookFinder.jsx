import axios from "axios"
import { Fragment, useEffect, useState } from "react"

const EBookFinder = () => {
  const [eBooks, setEBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/ebooks/")
        setEBooks(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <Fragment>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eBooks.map((item, index) => (
            <div key={index} className="card">
              <img className="w-40 object-cover rounded-md" src={item.cover_photo} alt={`${item.title} cover`} />
              <div className="w-full">
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">
                  {item.authors[0].first_name} {item.authors[0].last_name}
                </p>
                <p className="my-3 text-sm text-gray-700">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default EBookFinder
