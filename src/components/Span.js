import React from "react"

function Span({letter, animation}) {
    return(
        <>
            <span className={`text-6xl sm:text-8xl  ${animation}`}>
                {letter}
            </span>
        </>
    )
}
export default Span