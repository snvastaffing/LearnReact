// import NavBar from "../Component/ClassBased/Nav"
import { Footer } from "../Component/Functional/Footer"
import { HeadSection } from "../Component/Functional/HeadSection"
import {NavBar } from "../Component/Functional/Nav"

export const Home=()=>{

    // we can build this from an API coming from spring boot
    // now we have assumes that we are getting this data from API
    const menuItems=[
        {text:"What You'll Learn",href:"/whatYouWill"},
        {text:"Home", href:"/home"},
        {text:"Contact",href:"/contact"},
        {text:"Abou Us",href:"/about"}, 
    ]

    const instructors=[
        {profile:"",name:""}
    ]


    return(
        <>
            <div>

                <NavBar items={menuItems}></NavBar>
                <HeadSection></HeadSection>
                <Footer></Footer>
            </div>
        </>
    )
}