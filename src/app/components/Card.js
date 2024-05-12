"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const card = (props) => {
    const {title,id,authors,pages}=props
    const router=useRouter()

    return (
        <div className='bg-blue-900 w-72 flex justify-center flex-col rounded-md py-4 gap-2 text-blue-200 shadow-md shadow-black/15 hover:shadow-lg hover:shadow-black/75 cursor-pointer' onClick={()=>router.push(`/books/${id}`)}>
             <div className='flex justify-between px-4 my-2'>
                <div className="book-id">Id : {id}</div>
                <div className="page-count">Pages : {pages}</div>
            </div>
            <Link href={`/books/${id}`} className='bookName text-center text-xl font-mono font-semibold text-blue-100 my-2 px-4'>Title : {title}</Link>
           
            <div className='authors px-4 text-xs'>
                <span className='text-x'>Authors : {" "}</span>{authors.map((author, index) => {
                    return <span key={index} className='text-gray-400 text-xs'>{author}{index==authors.length-1?" ":" , "}</span>})}
            </div>
            
        </div>
    )
}

export default card