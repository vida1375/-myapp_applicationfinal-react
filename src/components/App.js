import React from "react";
import {BrowserRouter,Route ,Link} from "react-router-dom"
import Info from "./Info";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import '../styles/dropdown.css';

const Data =[
    {
        title : 'what is React ?',
        desc : 'React is a JS Library'
    },
    {
        title : 'why React ?',
        desc : 'Beacause it is fast and easy'
    },
    {
        title : 'Is React available to use with Redux ?',
        desc :'yes!'
    }
]
const options =[
    {
        value: 'red',
        title: 'Red'
    },
    {
        value: 'yellow',
        title: 'Yellow'
    },
    {
        value: 'green',
        title: 'Green'
    }
]
const label ='Select a color:'
const App = () =>{
    return(
        <BrowserRouter>
          <div className="header">
              <Link className="menu_item" to="/">Accordion</Link>
              <br />
              <Link className="menu_item" to="/search">Search</Link>
              <br />
              <Link className="menu_item" to="/dropdown">Dropdown</Link>
              <br />
              <Link  className="menu_item" to="/translate">Translate</Link>
          </div>
          <Route exact path="/" ><Info data={Data} /></Route>
          <Route path="/search" ><Search/></Route>
          <Route path="/dropdown" ><Dropdown options={options} label={label} /></Route>
          <Route path="/translate"><Translate /></Route>
        </BrowserRouter>
        // <div>
        //     <Dropdown options={options} label={label} />
        //     {/* <Search />
        //     <Info data ={Data} /> */}
        // </div>
    )
}
export default App;