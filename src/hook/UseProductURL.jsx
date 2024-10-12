import { useEffect, useState } from "react"

export const useProductURL = (url) => {
    const [loading, setLoading] = useState(true)
    const [jewelry, setJewelry] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, {mode:'cors'})
            .then((response) => {
                if (!response.ok) {
                    setError(true)
                    throw new Error ('network response was not okay')
                }
                return response.json()
            })
            .then(response=> setJewelry(response))
            .catch((error) => {
                console.error('Fetching error:', error)
                setError(error.message)
            })
            .finally(() => setLoading(false))

    },[])

    return { loading, jewelry, error}

}