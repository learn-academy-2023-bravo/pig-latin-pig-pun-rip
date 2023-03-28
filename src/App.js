import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(" ")
  const [inputTranslated, setInputTranslated] = useState("")
  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)
      
      // ACTION ITEM: your Pig Latin logic goes here!
      // comment: we are taking vowelsArray and asking if the first letter, of eachWord, is included in the array.
      // If true, reassign eachWord to equal eachWord plus the string "way"
      // Then return the new value of eachWord
 if (vowelsArray.includes(eachWord[0])){
  eachWord = eachWord + "way"
  // Pseudo
  // Input: any word with qu at the start
  // output: word with qu moved to the end plus ay
  // use an else if statement 
  // Make eachWord include the string elements qu
  // create a new variable named quIndex to find the index of u
  // then we created a variable called firstSyllable to make a subset of every value before u
  //  then we created a variable called restOfWord to make a subset of every value after u
  // then we console.log the restOfword subset and added it to the firstSyllable subset
  // finally we redefined eachWord to return resOfWord subset plus firstSyllable plus "ay"
  
 } else if (eachWord.includes("qu")){
   const quIndex = eachWord.indexOf("u")
   const firstSyllable = eachWord.slice(0,quIndex + 1)
   const restOfWord = eachWord.slice(quIndex + 1,eachWord.length)
   console.log(restOfWord.concat(firstSyllable))
   eachWord = restOfWord.concat(firstSyllable).concat("ay")

  } else if (eachWord.includes("y")) {
    const yIndex = eachWord.indexOf("y")
    const firstCons = eachWord.slice(0, yIndex)
    const endOfWord = eachWord.slice(yIndex, eachWord.length)
    console.log(endOfWord.concat(firstCons))
    eachWord = endOfWord.concat(firstCons).concat("ay")

  } 
  // else (eachWord.includes("")) {
  //     const indexOfFirstVowel = eachWord.indexOf(vowelsArray)
  //     const beginningCons = eachWord.slice(0, indexOfFirstVowel)
  //     const endOfWord = eachWord.slice(yIndex, eachWord.length)
  //     console.log(endOfWord.concat(firstCons))
  //     eachWord = endOfWord.concat(firstCons).concat("ay")
  
  // }
    
  
  
  
  
  
  
  // Pseudocode:

  return eachWord 

 })
    

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      // Pseudo
      // Input: a word beginning with a vowel
      // Output: words beginning with a vowel translated to add "way" the end
      // Example: apple = appleway
      //  .split = ["a", "p", "p", "l", "e"]
      // create a function firstLetterVowel that takes in a string
      // determine if the first character value is a vowel
      // if yes, return the word plus "way" at the end using string interpilation
      // if no return N/A

    

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Nikki and Jake</footer>
    </div>
  )
}

export default App