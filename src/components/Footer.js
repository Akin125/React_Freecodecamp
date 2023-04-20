import React from "react"

export default function Footer (props){
    return(
        <footer className={props.darkMode ? "dark" : ""}>
            <small>&copy; Odediran Seyifumi 2023</small>
        </footer>
    )
}