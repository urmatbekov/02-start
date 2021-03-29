import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

// const name = "Nurkadyr"
// const age = 19


// const app = (
//     <h1 className="title" >
//         My name is {name},I am {age}
//     </h1>
// )


// const Text = () => {
//     return (
//         <p>
//             Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Pariatur nostrum officiis
//             laudantium deleniti illum repellat dolore nemo
//             in blanditiis eius. Earum, pariatur! Blanditiis incidunt
//             tempora repellendus totam magnam neque quasi.
//         </p>
//     )
// }

const Header = () => {
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..." />
            <span className="addBtn">Add</span>
        </div>
    )
}
const Body = () => {
    return (
        <ul id="myUL">
            <li>Hit the gym</li>
            <li className="checked">Pay bills</li>
            <li>Meet George</li>
            <li>Buy eggs</li>
            <li>Read a book</li>
            <li>Organize office</li>
        </ul>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.querySelector("#root")
)