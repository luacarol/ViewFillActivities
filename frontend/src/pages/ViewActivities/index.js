import Input from '../../components/Input';
import styled from './style.module.css';

const ViewActivities = () => {
    return (
        <div className={styled.container}>

            <div className={styled.search}>
                <Input/>
            </div>

        </div>
    )
}

export default ViewActivities;