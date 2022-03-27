import React from "react"
import Board from "../utils"
function HighScore({highscore}) {
    return(
       <>
        <Board boardName={'HİGHSCORE'} score={highscore} />
       </>
    )
}
export default HighScore