<<<<<<< HEAD
import{ baseUrl, eventQuantity} from '/src/scripts/variables.js'

async function getEvent(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventQuantity}`)
    return response.json()
}

=======
import{ baseUrl, eventQuantity} from '/src/scripts/variables.js'

async function getEvent(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventQuantity}`)
    return response.json()
}

>>>>>>> 703ab3a (refactored)
export{ getEvent }