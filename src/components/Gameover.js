import React from "react"

function Gameover({score, highscore, restartGame}) {
    return(
        <div className="bg-2 flex justify-center items-center h-screen switfy-text flex-col gap-8 sm:gap-12">
            <h1 className="text-6xl sm:text-8xl">Gameover</h1>
            <div className="flex items-center gap-4">
             <h2 className="text-2xl sm:text-4xl rm-text3">SCORE IS</h2>  
             <h2 className="text-4xl sm:text-6xl rm-text">{score}</h2>
            </div>
            <div className="flex items-center gap-4">
               <h2 className="text-2xl sm:text-4xl rm-text3">HiGHSCORE IS</h2>  
               <h2 className="text-4xl sm:text-6xl rm-text">{highscore}</h2>
            </div>
           
            <button className="border-2 border-brown rounded-lg text-base p-3 hover-btn sm:text-lg" type="button" onClick={restartGame}>Try Again</button>
        </div>
    )
}
export default Gameover