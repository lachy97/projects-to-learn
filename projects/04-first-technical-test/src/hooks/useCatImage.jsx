import { useEffect, useState } from "react";

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'


export const useCatImage = ({ fact }) => {
    const [imageUrl, setUrl] = useState('')

    const getImageFirstWordFact = (factFirstWord) => {
        fetch(`${CAT_ENDPOINT_IMAGE_URL}${factFirstWord}`)
            .then(res => setUrl(res.url))
    }

    useEffect(() => {
        if (!fact) return
        const newFirstWord = fact.split(' ')[0]
        getImageFirstWordFact(newFirstWord)
    }, [fact])

    return { imageUrl }

}