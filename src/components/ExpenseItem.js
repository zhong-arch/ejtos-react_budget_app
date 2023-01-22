import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    const increaseStyle = {
        height: "1.5rem",
        width: "1.5rem",
        color: "white",
        fontWeight: 'bold',
        borderRadius: "50%",
        backgroundColor: "green",
        border: "hidden",
      };
    const decreaseStyle = {
        height: "1.5rem",
        width: "1.5rem",
        color: "white",
        fontWeight: 'bold',
        borderRadius: "50%",
        backgroundColor: "red",
        border: "hidden",
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={increaseStyle} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={decreaseStyle} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
