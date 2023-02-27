import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from "@mui/system" 

export default function Calculator(){
    const[num, setNum]= useState(0)
    const[oldnum, setOldNum] = useState(0)
    const[operator, setOperator] = useState(0)

    function inputNum(e){
       var input= e.target.value
       if(num===0){
        setNum(input)
       }else{
        setNum(num+input)   
       }
    }

    function clear(e){ //p/ a tecla AC limpar a tela
        setNum(0)
    }

    function porcentage(){
        setNum(num / 100)
    }

    function changeSign(){
        if(num>0){
            setNum(-num) //número fica negativo
        }else{
            setNum(Math.abs(num)) //retorna positivo
        }
    }

    function operatorHandler(e){
        var operatorInput=e.target.value
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }

    function calculate(){
        if(operator === "/") {
            setNum(parseFloat(oldnum) / parseFloat(num))
        }else if (operator === "x") {
            setNum(parseFloat(oldnum) * parseFloat(num))
        }else if(operator === "-") {
            console.log(oldnum)
            console.log(num)
            setNum(parseFloat(oldnum) - parseFloat(num))
        }else if(operator === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num))
        }
    }


    return( //maxwidht= xs quer dizer x small muito pequeno ou md médio ou lg largo
        <div>
            <Box m={1.5} />
            <Container maxWidth="xs">
                <div className="wrapper">
                <Box m={10} />
                    <h1 className="result">{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentage}>%</button>
                    <button className="orange" onClick={operatorHandler} value="/">÷</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray"onClick={inputNum} value={8}>8</button>
                    <button className="gray"onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={operatorHandler} value="x">x</button>
                    <button className="gray"onClick={inputNum} value={4}>4</button>
                    <button className="gray"onClick={inputNum} value={5}>5</button>
                    <button className="gray"onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={operatorHandler} value="-">-</button>
                    <button className="gray"onClick={inputNum} value={1}>1</button>
                    <button className="gray"onClick={inputNum} value={2}>2</button>
                    <button className="gray"onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={operatorHandler} value="+">+</button>
                    <button className="gray" style={{width:"6.7em"}}>0</button>
                    <button className="gray" onClick={inputNum} value={"."}>,</button>
                    <button className="orange" onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}