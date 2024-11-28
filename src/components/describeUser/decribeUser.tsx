import { useContext } from 'react';
import { Context } from '../context/context';
import './decribe.css';

export const DecribeUser: React.FC = () => {
    const { title, describe, text } = useContext(Context);
    return (
        <div className="card__decribe">
            <h2>{title}</h2>
            <h3>{describe}</h3>
            <p>{text}</p>
        </div>
    );
};
