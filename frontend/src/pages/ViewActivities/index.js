import Card from '../../components/Card';
import Input from '../../components/Input';
import Select from '../../components/Select';
import styled from './style.module.css';

const ViewActivities = () => {
    return (
        <div className={styled.container}>

            <div className={styled.search}>
                <Input className={styled.input} />
                <Select />
            </div>

            <div className={styled.cards}>
                <Card />
            </div>

        </div>
    )
}

export default ViewActivities;