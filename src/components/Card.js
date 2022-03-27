
import React from "react"

function Card({renderData, levelIds, clickHandle}) {
    let cards = []
    for(let i = 0; i < levelIds.length; i++){
        cards.push(renderData.find((item => item.id === levelIds[i])))
    }
    return(
        <>
            {
                cards.map((character) => {
                    return (
                        <div 
                            className="border-2 border-black border-solid p-4 flex justify-center flex-col items-center shadow-lg bg-1 card" 
                            key={character.id} 
                            onClick={clickHandle}
                            data-id={character.id}
                        >
                            <img className="pointer-events-none	" src={character.image} alt={character.name}></img>
                            <h4 className="text-lg mt-2 text-white">{character.name}</h4>
                        </div>
                        
                    )
                })
            }
        </>
    )
}
export default Card