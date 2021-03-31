import {Component} from "react"

// const BodyItem = (props) => {
//     return <li>{props.item}</li>
// }



class BodyItem extends Component {

    state = {
        checked:false
    }

    render(){

        let classNameChecked = ""

        if (this.state.checked === true){
            classNameChecked = "checked"
        }

        return <li className={classNameChecked}>{this.props.item}</li>
    }
}

export default BodyItem;