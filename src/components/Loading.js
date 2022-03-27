import React from "react"
import Span from "./Span"
function Loading() {
    return(
        <div className="bg-2 flex justify-center items-center h-screen switfy-text">
                <Span animation={'letter1'} letter='L'></Span>
                <Span animation={'letter2'} letter='O'></Span>
                <Span animation={'letter3'} letter='A'></Span>
                <Span animation={'letter4'} letter='D'></Span>
                <Span animation={'letter5'} letter='I'></Span>
                <Span animation={'letter6'} letter='N'></Span>
                <Span animation={'letter7'} letter='G'></Span>
        </div>
    )
}
export default Loading