
import React, { useEffect, useState } from "react"
import Gameover from "./components/Gameover.js"
import Card from "./components/Card.js"
import ScoreBoard from "./components/ScoreBoard.js"
import Header from "./components/Header.js"
import {shuffle, levelNumbers, timeout} from "./utils.js"
import HighScore from "./components/HighScore.js"
import Loading from "./components/Loading.js"
import Footer from "./components/Footer.js"
import LevelLoader from "./components/LevelLoader.js"
import Win from "./components/Win.js"

function App() {
  const HİGHEST_SCORE_ID = 'highest.score'
  const [isGameover, setIsGameover] = useState(false) 
  const [score, setScore] = useState(0)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [level, setLevel] = useState(0)
  const [levelIds, setLevelIds] = useState([])
  const [clicked, setClicked] = useState([])
  const [renderData, setRenderData] = useState([])
  const [isWin, setIsWin] = useState(false)
  const [highestScore, setHighestScore] = useState(JSON.parse(localStorage.getItem(HİGHEST_SCORE_ID)) || 0)
  const [levelLoad, setLevelLoad] = useState(0)

  const fetching = async () => {
    setIsLoading(true)
    const response1 = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,7,9,10,11,17,20,280,388')
    const response2 = await fetch('https://rickandmortyapi.com/api/character/24,25,26,28,29,30,36,47,50,52,58,61,62,73,80,81,92,103,108,118,122,128,150,153,156')
    const response3 = await fetch('https://rickandmortyapi.com/api/character/167,171,180,188,193,196,202,226,230,240,242,243,244,248,252,265,270,271,282,306,307,313,324,329,331,340,343,347,372,375,393')
    const characters1 = await response1.json()
    const characters2 = await response2.json()
    const characters3 = await response3.json()
    await Promise.all([characters1,characters2, characters3])
    setData([characters1, characters2, characters3])
    await startGame()
    await wait(2000)
    setIsLoading(false) 
  }
  useEffect(()=>{
    fetching()
  },[])

  useEffect(()=>{
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].length; j++){
          setRenderData((prev) => [...prev, data[i][j]])
        }
    }
  },[data])

  const updateRenderData = (arg) => {
    setRenderData(arg)
  }

  useEffect(()=>{
    if(level === 1){
      levelOne()
    }
    if(level === 2){
      levelTwo()
    }
    if(level === 3) {
      levelThree()
    }
    if(level === 4){
      levelFour()
    }
    if(level === 5){
      levelFive()
    }
  },[level])

  const startGame = async () => {
    setLevel(1)
  }

  const levelOne = () => {
    setLevelIds(levelNumbers(4, renderData))
  }
  
  const levelTwo = async() => {
    setLevelLoad(2)
    await wait(1500)
    clearLevel()
    setLevelIds(levelNumbers(10, renderData))
    setLevelLoad(0)
  }

  const levelThree = async() => {
    setLevelLoad(3)
    await wait(1500)
    clearLevel()
    setLevelIds(levelNumbers(16, renderData))
    setLevelLoad(0)
  }

  const levelFour = async() => {
    setLevelLoad(4)
    await wait(1500)
    clearLevel()
    setLevelIds(levelNumbers(22, renderData))
    setLevelLoad(0)
  }

  const levelFive = async() => {
    setLevelLoad(5)
    await wait(1500)
    clearLevel()
    setLevelIds(levelNumbers(30, renderData))
    setLevelLoad(0)
  }

  const clickHandle = (event) => {
    const clickedTarget = event.target.getAttribute('data-id')
    if(levelIds.includes(Number(clickedTarget))){
      if(clicked.includes(Number(clickedTarget))){ 
        gameover()
      } else {
        setScore((prev) => prev + 10)
      }
     
      setLevelIds(shuffle(levelIds))
      setClicked([...clicked, Number(clickedTarget)])   
    } 
  }

  const gameover = () => {
    if(score > highestScore){
      setHighestScore(score)
      save()
    }
    setIsGameover(true)
  }

  const scoreChecker = () => {
    if(score === 40) {
      setLevel(2)
    }
    else if(score === 140) {
      setLevel(3)
    }
    else if(score === 300){
      setLevel(4)
    }
    else if(score === 520){
      setLevel(5)
    }
    else if(score === 820){
      setIsWin(true)
    }
  }

  const clearLevel = () =>{
    setClicked([])
    setLevelIds([])
  }

  const wait = async (ms) => {
    await timeout(ms) 
  }
  const save = () => {
    localStorage.setItem(HİGHEST_SCORE_ID, JSON.stringify(score))
  }
  const restartGame = async() => {
    await setLevel(0)
    await clearLevel()
    await setScore(0)
    await startGame()
    await setIsGameover(false)
  }

  useEffect(()=>{
    scoreChecker()
  },[score])

  if(levelLoad === 2) {
    return(
      <LevelLoader levelName={'LEVEL 2'}/>
    )
  }

  if(levelLoad === 3) {
    return <LevelLoader levelName={'LEVEL 3'} />
  }

  if(levelLoad === 4) {
    return <LevelLoader levelName={'LEVEL 4'} />
  }

    if(levelLoad === 5) {
    return <LevelLoader levelName={'LEVEL 5'} />
  }

  if(isLoading){
    return(
      <Loading />
    )
  }

  if(isWin){
    return <Win />
  }

  if(isGameover){
    return <Gameover score={score} highscore={highestScore} restartGame={restartGame}/>
  }

  if(isWin){
    return <h1>WİN</h1>
  }

  return (
    <div className="bg-2">
    <Header />
    <div className="flex justify-center gap-16 p-2">
      <ScoreBoard score={score} />
      <HighScore highscore={highestScore}/>
    </div>
    
    <div className="flex  flex-wrap gap-10 justify-center mt-8 mb-12 h-full">
      <Card renderData={renderData} levelIds={levelIds} clickHandle={clickHandle} shuffle={shuffle} updateRenderData={updateRenderData} />
    </div>
    <Footer />  
    </div>
    
  )
}
export default App;
