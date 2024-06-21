import React from 'react';
import styled from './style.module.css';

const Select = ({ className }) => {
    return (
        <div className={`${className} ${styled.container}`}>
            <select className={styled.select}>
                <option>Funcionário</option>
                <option>Projeto</option>
            </select>
        </div>
    )
}

export default Select;
