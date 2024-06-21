import styled from './style.module.css';

const Header = () => {
    return (
        <header className={styled.header}>
            <h1>Preenchimento e Visualização de Atividades</h1>

            <nav>
                <label>Visualização</label>
            </nav>  

            <div className={styled.user}>
                <label>Nome do usuário</label>
            </div>
        </header>
    )
}

export default Header;