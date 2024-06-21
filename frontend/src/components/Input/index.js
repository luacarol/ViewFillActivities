import styled from './style.module.css';

const Input = () => {
    return (
        <div className={styled.container}>
            <input type='text' className={`title2 ${styled.input}`} placeholder='Pesquisar...'></input>
        </div>
    )
}

export default Input;