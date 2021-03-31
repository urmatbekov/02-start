import {Component} from "react"

// const BodyItem = (props) => {
//     return <li>{props.item}</li>
// }



class BodyItem extends Component {

    state = {
        checked:false
    }

    onClickChecked = () => {
        this.setState((state)=>{
            return {
                checked:!state.checked
            }
        })
    }

    render(){

        let classNameChecked = ""

        if (this.state.checked === true){
            classNameChecked = "checked"
        }

        return <li onClick={this.onClickChecked} className={classNameChecked}>{this.props.item}</li>
    }
}

export default BodyItem;