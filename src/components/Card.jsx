import "./Card.css"

function Card(props) {
    return (
        <div className="card" style={{ backgroundImage: `url(${props.imageCard})` }}>
        </div>
    )
}

export default Card