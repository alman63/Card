import React from 'react';
import './App.css';
import { BodyCard } from './components/bodyCard/bodyCard';

export interface IProps {
    title: string;
    describe: string;
    text: string;
    field: string;
}

const props: IProps = {
    title: 'Виталя',
    describe: 'Играет в настольный теннис',
    text: 'Иногда ловит рыбу, но не любит рано просыпаться, поэтому ловит в основном мальков',
    field: 'Пример тестового поля которое не помещяется на карточке',
};

export const App: React.FC = () => {
    return (
        <div className="App">
            <BodyCard {...props} />
        </div>
    );
};
