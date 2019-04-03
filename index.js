window.addEventListener("load", () => {
//   //start your code here
  
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const symbols = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  function onSubmit(event) {
    event.preventDefault()
    const input = document.getElementById('password-length')
    let passwordLength = input.value
    if(input.value < 4) {
      passwordLength = 4
    }
    
    //How to get the password length to have a max length?//

    let startingString = ''
  
    for (i = 0; i < passwordLength; i++) {
      if (startingString.length < input.value){
      let randomIndex = Math.floor(Math.random() * lowerCaseLetters.length)
      startingString += lowerCaseLetters[randomIndex]
      }
     
      if (startingString.length < input.value){
      let randomIndex = Math.floor(Math.random() * numbers.length)
      startingString += numbers[randomIndex]
      }
    
      if (startingString.length < input.value){
      let randomIndex = Math.floor(Math.random() * upperCaseLetters.length)
        startingString += upperCaseLetters[randomIndex]
      }
      
      if (startingString.length < input.value){
      let randomIndex = Math.floor(Math.random() * symbols.length)
        startingString += symbols[randomIndex]
      }
      
      const output = document.getElementById('result')
      output.innerHTML = startingString
      console.log(startingString)
    }
  }
  document.addEventListener('submit', onSubmit)
})
