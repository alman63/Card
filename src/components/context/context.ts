import React from 'react';

export interface IProps {
    title: string;
    describe: string;
    text: string;
    field: string;
}

export const props: IProps = {
    title: 'Виталя',
    describe: 'Играет в настольный теннис',
    text: 'Иногда ловит рыбу, но не любит рано просыпаться, поэтому ловит в основном мальков',
    field: 'Пример тестового поля, которое не помещяется на карточке',
};

export const Context = React.createContext(props);
