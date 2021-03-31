import BodyItem from "./BodyItem"

const Body = () => {
    const arr = [
        "Hit the gym",
        "Pay bills",
        "Meet George",
        "Buy eggs",
        "Read a book",
        "Organize office"
    ]
    return (
        <ul id="myUL">
            {arr.map((item) => <BodyItem item={item}/>)}
        </ul>
    )
}

export default Body;