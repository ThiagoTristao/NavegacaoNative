import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const r = props.route
    const numero = r && r.params && r.params.numero 
        ? props.route.params.numero : 0
    return (
        <TextoCentral corDeFundo='#9932cd'>
            Tela C - {numero}
        </TextoCentral>
    )
}