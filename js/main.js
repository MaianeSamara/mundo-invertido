import app from "./firebase/app.js"
import { subscribeToHellfireClub } from './firebase/hellfire-club.js'

console.log(app)

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSbscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // Salvar no banco de dados!
    subscribeToHellfireClub(subscription)
})