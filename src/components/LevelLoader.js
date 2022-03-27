import React from "react"

function LevelLoader({levelName}) {
    return(
        <div className="bg-2 h-screen flex justify-center items-center switfy-text">
            <h1 className="text-6xl sm:text-8xl">{levelName}</h1>
        </div>
    )
}
export default LevelLoader