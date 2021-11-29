<<<<<<< HEAD
import{ baseUrl} from '/src/scripts/variables.js'

//chamada da API usando o fetch()
async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return response.json()
}



=======
import{ baseUrl} from '/src/scripts/variables.js'

//chamada da API usando o fetch()
async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return response.json()
}



>>>>>>> 703ab3a (refactored)
export { getUser }