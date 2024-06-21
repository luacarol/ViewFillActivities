import styled from './style.module.css';

const Select = () => {
    return (
        <div className={styled.container}>
            <select className={styled.select}>
                <option>Funcionário</option>
                <option>Projeto</option>
            </select>
        </div>
    )
}

export default Select;