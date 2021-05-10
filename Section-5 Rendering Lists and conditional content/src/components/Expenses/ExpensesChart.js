import React from "react"
import Chart from "../Chart/Chart"

const ExpensesChart = props => {
    var chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (const expense of props.expenses){
        try{
        const expenseMonth = expense.date.split("-")[1][0]==="0" ? parseInt(expense.date.split("-")[1][1]) - 1 : parseInt(expense.date.split("-")[1]) - 1;
        chartDataPoints[expenseMonth].value += expense.amount}
        catch{
            console.log("no data found")
        }
    }

    return (
        <Chart dataPoints={chartDataPoints} />
    )
}

export default ExpensesChart