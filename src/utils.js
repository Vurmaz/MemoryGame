
export function shuffle(array) {  
  return array
  .map(value => ({ value, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
}

function randomIds(lvlArray, random) {
    if(lvlArray.includes(random)){
      return
    }
    lvlArray.push(random)  
}

export function levelNumbers(cardNumber, renderData) {
    const levelCards = []
    while(levelCards.length < cardNumber) {
     randomIds(levelCards, renderData[Math.floor(Math.random() * renderData.length)].id)
     
    }
    return levelCards
}

export function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Board({boardName, score}) {
  return(
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-center rm-text2">{boardName}</h1>
      <div className="w-16 h-16 bg-4 border-2 border-black rounded-full flex items-center justify-center">
        <h1 className="text-center rm-text2">{score}</h1>
      </div>
    </div>
  )
}