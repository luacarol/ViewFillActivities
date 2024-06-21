import styled from './style.module.css';

const Footer = () => {
    return (
        <footer className={styled.footer}>
            <label className="title2">AUTAZA</label>
            <label className={`label ${styled.madeBy}`}>Feito por Luana Anjos</label>
        </footer>
    )
}

export default Footer;