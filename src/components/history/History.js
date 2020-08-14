import React from 'react';
import HistoryItem from './Historyitem';
    
    
const History = ({transactions}) => (
        <section className="history">
            <h3>История расходов</h3>
            <ul className="history__list">
                <HistoryItem/>
            </ul>
        </section>
    );


export default History;