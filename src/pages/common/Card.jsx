/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Card = ({ cover_photo, title, authors, summary, id, showDeleteButton = false, onDelete }) => {
  return (
    <Link
      to={`/ebooks/${id}`}
      className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={cover_photo}
        alt={`${title} cover`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="text-sm text-gray-600">
          {authors?.map((author, index) => (
            <span key={index}>
              {author.first_name} {author.last_name}
              {index < authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p className="mt-3 font-normal text-gray-700">{summary}</p>

        <div className="flex space-x-2 mt-auto">
          {showDeleteButton && (
            <button
              className="bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600 px-3 py-2 rounded-md"
              onClick={onDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </Link>
  )
}

export default Card
