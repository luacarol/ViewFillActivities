import React, { useRef } from 'react';
import styled from './style.module.css';

const Input = ({ className }) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={`${className} ${styled.container}`} onClick={handleClick}>
            <input
                ref={inputRef}
                id="meuInput"
                type='text'
                className={`title2 ${styled.input}`}
                placeholder='Pesquisar...'
            />
        </div>
    )
}

export default Input;