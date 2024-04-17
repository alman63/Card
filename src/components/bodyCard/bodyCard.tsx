import './bodyCard.css';
import { ImageUser } from '../imageUser/imageUser';
import { DecribeUser } from '../describeUser/decribeUser';
import { TextField } from '../textField/textField';
import { AnyComponent } from '../anyComponent/anyComponent';

export const BodyCard: React.FC = () => {
    return (
        <div className="card">
            <div className="card__first">
                <ImageUser />
                <DecribeUser />
            </div>
            <div className="card__second">
                <TextField />
                <AnyComponent />
            </div>
        </div>
    );
};
