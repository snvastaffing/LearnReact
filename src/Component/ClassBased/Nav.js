import { Component } from "react";

class NavBar extends Component{

    constructor(props){
        super(props)
        this.menuState=props.items
    }



    render(){
        return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">Frontend Bootcamp</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            {
                this.menuState.map((item,index)=> {
                return <li className="nav-item">
                    <a href={item.href} className="nav-link">{item.text}</a>
                </li>
            })};
          </ul>
        </div>
      </div>
    </nav>
        </>)
    }
}

export default NavBar

