import './Button.css';

export const Button = (props) =>{

    console.log(props)

    const handleClick = () => {
        alert('dont click me anymore')
    }

    const name = props.name

    return (
        <button 
        className='button-container'
        onClick={handleClick}>
        {name}
        </button>
    )
}