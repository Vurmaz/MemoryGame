import React from "react"
import { FaGithub } from 'react-icons/fa'
function Footer() {
    return(
        <footer className="bg-3 bottom-0 h-9vh flex items-center justify-center gap-4">  
            <h2 className="text-xl rm-text4">Created by Vurmaz</h2>
            <FaGithub fontSize='3rem' className="rm-text4 cursor-pointer hover-git"></FaGithub>
        </footer>
    )
}
export default Footer