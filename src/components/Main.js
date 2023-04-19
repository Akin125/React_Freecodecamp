import React from "react"

export default function Main (props){
    return(
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className={"main--container-h1"}>Fun Facts About React</h1>
            <ul  className={"main--container-ul"}>
                <li>Was first released 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

        </main>
    )

}