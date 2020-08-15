import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { Doughnut } from 'react-chartjs-2';



function Chart() {

    const { Transactions } = useContext(GlobalContext);

    const amounts = Transactions.map((Transactions: any) => Transactions.TransactionAmount);

    const income = amounts
        .filter((item: number) => item > 0)
        .reduce((acc: number, item: number) => (acc += item), 0)
        .toFixed(2);

    const expense = (amounts
        .filter((item: number) => item < 0)
        .reduce((acc: number, item: number) => (acc += item), 0))
        .toFixed(2);

    const total: number = income - expense

    const doughChart = (
        income ? (
            <Doughnut data={{
                
                labels: ['Balance', 'Income', 'Expense'],

                datasets: [{
                    data: [total, income, expense],
                    backgroundColor: [ '#528FEC', '#389760', '#EC9B4E'],
                    
                }],

            }} 

            legend={{
                
                display: true,
                "position": "left",
                fullWidth: false,
                reverse: false,
                "labels": {
                    "fontColor": "black"
                }
            }}
            />) : null
    );

                // options={{ maintainAspectRatio: false }}


    return (
        <div className='chart-container'>
            {total > 0 ? doughChart : 'No Transaction' }     


        </div>
        );
}

export default Chart
