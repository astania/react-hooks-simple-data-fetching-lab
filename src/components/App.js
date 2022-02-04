// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [dogPicUrl, setDogPicUrl] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setDogPicUrl(data.message)
                setIsLoaded(true)
            })
    }, [])

    return (
        <div>
            {!isLoaded ? <p>Loading...</p> : null}
            <img src={dogPicUrl} alt="A Random Dog" />
        </div>
    )

}

export default App
