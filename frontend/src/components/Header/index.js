import styled from './style.module.css';

const Header = () => {
    return (
        <header className={styled.header}>
            <h1 className="title1">Preenchimento e Visualização de Atividades</h1>

            <nav>
                <label className="navegation-text">Visualização</label>
            </nav>  

            <div className={styled.user}>
                <label className="label">Nome do usuário</label>
            </div>
        </header>
    )
}

export default Header;