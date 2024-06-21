import Select from '../Select';
import styled from './style.module.css';

const Card = () => {
    return (
        <div className={styled.container}>

            <div className={styled.employeeProject}>
                <label className="label">Nome do funcionário</label>
                <Select className={styled.selectContainer}/>
            </div>

            <div className={styled.activitiesRunning}>
                <label className='label'>Atividade em desenvolvimento:</label>

                <ol>
                    <li className='text'>Criação da tela de rotulagem</li>
                </ol>
            </div>

            <div className={styled.activitiesToDo}>
                <label className='label'>Próxima atividade prevista:</label>

                <ol>
                    <li className='text'>Criação da tela de Inferências</li>
                </ol>
            </div>

        </div>
    )
}

export default Card;