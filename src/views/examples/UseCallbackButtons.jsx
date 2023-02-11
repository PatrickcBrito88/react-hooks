import React from 'react'

const UseCallbackButtons = props => {
    console.log('render...')
    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>
                +6
            </button>

            <button className="btn" onClick={() => props.inc(12)}>
                +12
            </button>

            <button className="btn" onClick={() => props.inc(18)}>
                +18
            </button>
        </div>
    )
}
//  O React.memo faz um cache do componente, permitindo (em combinação com a programação do useCallback na classe pai
// que o componente seja renderizado apenas 1 vez
export default React.memo(UseCallbackButtons)