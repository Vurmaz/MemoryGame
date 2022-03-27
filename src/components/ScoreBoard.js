import React from "react"
import Board from "../utils"

function ScoreBoard({score}) {
    return(
        <>
            <Board boardName={'SCORE'} score={score}  />
        </>
    )
}
export default ScoreBoard