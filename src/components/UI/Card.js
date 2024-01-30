import './Card.css'

const Card = (props) => {
    const  classes = 'card expenses ' + props.className
    return (
        <div className='card expenses'>{props.children}</div>
    )
}

export default Card