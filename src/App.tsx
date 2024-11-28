import React from 'react';
import './App.css';
import { BodyCard } from './components/bodyCard/bodyCard';
import { Context } from './components/context/context';
import { props } from './components/context/context';



export const App: React.FC = () => {
    
    return (
        <div className="App">
            <Context.Provider value={props}>
                <BodyCard />
            </Context.Provider>
        </div>
    );
};
