var form = document.getElementById('mainForm').addEventListener("submit", contentToConsole)

function contentToConsole(event){
    firstName = document.getElementById('firstName').value
    lastName = document.getElementById('lastName').value

    console.log(`My name is: ${firstName}, ${lastName}`)
}