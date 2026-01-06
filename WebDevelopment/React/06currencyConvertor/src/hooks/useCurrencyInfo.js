import {useEffect, useState} from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        // FIX: Use backticks and ${currency}
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) 
        
    }, [currency]) // Dependency array is correct

    return data;
}

export default useCurrencyInfo;