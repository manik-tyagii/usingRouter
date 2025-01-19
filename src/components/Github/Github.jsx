import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()



    return (
        <div className='text-center m-4 bg-black text-amber-400 p-4 text-3xl'>
            <h2 className=' text-white'>Location:{data.location}</h2> <br />{data.bio}
            <br />
            <a
                href="https://github.com/manik-tyagii"
                className="hover:underline text-blue-600"
                target="_blank"
                rel="noreferrer"
            >
                <u>Github</u>
            </a>
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/manik-tyagii')
    return response.json()
}