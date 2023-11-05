const post = (url, params) => {
    return new Promise((res, rej) => {
        const options = {
            method: 'POST', // Metodo della richiesta
            headers: {
              'Content-Type': 'application/json', // Tipo di dati inviati (nel nostro caso, JSON)
            },
            body: JSON.stringify(params), // Converte l'oggetto in una stringa JSON
          };
        fetch(url , options).then((results) => {
            res(results.json())
        })
    })
}

export {
    post, 
}