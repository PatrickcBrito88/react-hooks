import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {

    function calcFatorial(num) {
        const n = parseInt(num);
        if (n < 0) return -1
        if (n === 0) return 1
        return calcFatorial(n - 1) * n
    }

    function alteraTitulo(num) {
        if (num > 1000000) document.title = "Passou de 1 milhão";
    }

    function calcularStatus(num) {
        if (num % 2 === 0) return "Par"
        else return "Ímpar"
    }

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState("")

    /*
    useEffetc significa que um efeito colateral ocorrerá se o estado de alguma coisa alterar.
    Ou seja, quando o estado de number for alterado, ele executará uma alteração do estado de fatorial, passando
    uma função que calcula fatorial
     */
    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        alteraTitulo(fatorial)
    }, [fatorial])

    useEffect(function () {
        setStatus(calcularStatus(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>

                <div className="center">
                    <input type="number" className="input"
                           value={number}
                           onChange={e => setNumber(e.target.value)}/>
                </div>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
