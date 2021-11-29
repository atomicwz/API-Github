<<<<<<< HEAD
import{ baseUrl, repositoriesQuantity} from '/src/scripts/variables.js'

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return response.json()
}

export  { getRepositories }
=======
import { baseUrl, repositoriesQuantity } from '/src/scripts/variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return response.json()
}

export { getRepositories }
>>>>>>> 703ab3a (refactored)
