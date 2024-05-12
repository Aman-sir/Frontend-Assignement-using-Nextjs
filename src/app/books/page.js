"use client"
import { useEffect, useState } from "react"
import Card from "../components/Card"

const page = () => {
    const [loading, setloading] = useState(true)

    const [Books, setBooks] = useState([])


    const fetchBooks = async () => {
        try {
            setloading(true)
            let response = await fetch("https://softwium.com/api/books")
            response = await response.json()
            setBooks(response)
            setloading(false)

        } catch (error) {

            console.log(error)
            setloading(true)
        }
    }

    useEffect(() => {
        fetchBooks()

    }, [])


    return (
        <div>
            <h1 className="text-center text-3xl text-blue-100  bg-blue-900 w-fit mx-auto font-semibold px-5 py-3 rounded-md my-16">Books Page</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {!loading && (Books && Books.map((book, item) => {
                    return <Card title={book.title} key={book.id} id={book.id} authors={book.authors} pages={book.pageCount} />
                }))}

            </div>
        </div>
    )
}

export default page