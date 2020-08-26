import React,{useState} from 'react';
import '../../global.css';
import './styles.css'

export default function Home(){
    const [pilha,setPilha]=useState([])
    const [expression,setExpression]=useState([])
    const [result,setResult]=useState('')
    function handleCheck(e){
        e.preventDefault()
        var value=''
        for(let i=0;i<expression.length;i++){
            value=expression[i]
            if(value==='('){
                pilha.unshift(value)
            }else if(value===')'&&(pilha[0]===')')){
                pilha.unshift(value)
            }else if(value===')' &&(pilha.length===0)){
                pilha.unshift(value)
            }else if(value===')'){
                pilha.shift()
            }
            
            if(pilha.length===0){
                setResult('Correta')
            }else{
                setResult('Incorreta')
            }
        } 
        setPilha([])
    }
    
    return(
        <div className="geral">
            <h1>Parentetização</h1>
            <form onSubmit={handleCheck}>
                <h3>Digite a expressão!</h3>
                <input
                    placeholder="Expressão"
                    value={expression}
                    onChange={e=> setExpression(e.target.value)}
                />
                
                <button type="submit">Verificar</button>
            </form>
            <h2>A expressão está {result}!</h2>

        </div>
    );
}