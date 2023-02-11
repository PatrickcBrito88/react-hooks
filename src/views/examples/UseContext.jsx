import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from "../../data/DataContext";
import SectionTitle from "../../components/layout/SectionTitle";
import {AppContext} from "../../data/Store";

const UseContext = (props) => {

    const context = useContext(DataContext)

    // Segunda forma de fazer
    const {number, setNumber} = useContext(AppContext)
    const {text, setText} = useContext(AppContext)

    function addNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber(1)}>+1</button>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #2" />
                <div className="center">
                    <span className="text">{number}</span>
                    <span className="text">{text}</span>
                    <div>
                        <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                        <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    </div>
                    <div>
                        <input type="text" className="input" onChange={(e) => setText(e.target.value)}/>
                    </div>
                </div>
        </div>

    )
}

export default UseContext
