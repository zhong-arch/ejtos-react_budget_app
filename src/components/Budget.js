import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        
        if( budget >= totalExpenses){
            dispatch({ type: 'SET_BUDGET', payload: event.target.value });
        }else{
            alert("You can not reduce the budget value lower than the spending");
        }
    }
    return (
        <div className='alert alert-secondary' style={{display: 'flex'}}>
            <label>Budget: {currency}</label>
            <input type="number" value={budget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;
