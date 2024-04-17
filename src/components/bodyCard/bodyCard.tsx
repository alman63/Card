import './bodyCard.css';
import { ImageUser } from '../imageUser/imageUser';
import { DecribeUser } from '../describeUser/decribeUser';
import { IProps } from '../../App';
import { TextField } from '../textField/textField';



export const BodyCard: React.FC<IProps> = (props: IProps) => {
    return (
        <div className="card">
            <ImageUser />
            <DecribeUser {...props,}  />
            <TextField text={props.field}/>
        </div>
    );
};
