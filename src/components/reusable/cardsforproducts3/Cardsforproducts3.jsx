import "./Cardsforproducts3.css"

const Cardsforproducts3 = ({newText, Text2, backgroundClr}) => {
    return (
        <div className="Cardsforproducts3-container" style={{backgroundColor: backgroundClr}}>
            <p className="newText">{newText}</p>
            <p className="Text2">{Text2}</p>
        </div>
    )
}

export default Cardsforproducts3