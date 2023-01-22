import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    }
    return (
        <div class='alert alert-danger'>
            <label>Currency:</label>
            <select value={currency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
