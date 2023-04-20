import React from "react"
import ReactLogo from "../Images/logo512.png"

export default function  Navbar(props){
   return(
       <nav className={props.darkMode ? "dark" : ""}>
           <div className="nav--container">
               <img src={ReactLogo}
                     alt={"logo"}
                    className={"Logo"}
               />
               <h2>ReactFacts</h2>
           </div>

           <div className="toggler">

                   <p className="toggler--light">Light</p>
                   <div
                       className="toggler--slider"
                        onClick={props.toggleDarkMode}
                   >
                       <div className="toggler--slider--circle"></div>
                   </div>
                   <p className="toggler--dark">Dark</p>
           </div>


       </nav>
   );
}