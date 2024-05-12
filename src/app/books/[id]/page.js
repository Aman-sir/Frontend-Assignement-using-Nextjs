"use client"
import { useEffect, useState } from "react"

const page = ({ params }) => {
    const id = params.id
    const [Book, setBook] = useState({})
    const [loading, setloading] = useState(true)

    const fetchBook = async (id) => {
        try {
            setloading(true)
            let response = await fetch(`https://softwium.com/api/books/${id}`)
            response = await response.json()
            setBook(response)
            setloading(false)

        } catch (error) {

            console.log(error)
            setloading(true)
        }
    }

    useEffect(() => {
        fetchBook(id)

    }, [])

    return (
        <>
            {!loading && (<div className="">
                <h1 className="text-blue-400 text-4xl mx-auto w-fit mt-10">Book Page</h1>
                <div className="bg-blue-900 w-fit flex flex-col gap-4 p-4 rounded-md shadow-md shadow-black/75 mx-auto my-auto mt-32">
                    <div > <p className="text-blue-200 text-lg">Book Title</p>
                        <div className="bookName text-white text-2xl">

                            {Book.title}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-blue-200 text">Book Id</p>
                            <div className="bookid text-blue-100 ml-1">
                                {Book.id}
                            </div>
                        </div>
                        <div>
                            <p className="text-blue-200 text">Pages</p>
                            <div className="bookid text-blue-100 ml-1">
                                {Book.pageCount}
                            </div>
                        </div>
                        <div>
                            <p className="text-blue-200 text">ISBN</p>
                            <div className="bookid text-blue-100">
                                {Book.isbn}
                            </div>
                        </div>
                    </div>
                    <div > <p className="text-blue-200">Authors or Authors</p>
                        <span>{" "}{Book.authors.map((author, index) => {
                            return <span key={index} className='text-gray-400 text-xs'>{author}{index == Book.authors.length - 1 ? " " : " , "}</span>
                        })}
                        </span>
                    </div>

                </div>
            </div >)}
        </>
    )
}

export default page