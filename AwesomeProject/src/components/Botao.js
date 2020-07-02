import React from 'react'
import { Button } from 'react-native'

export default props => {

    function executar() {
        console.warn("Executar 1")
    }

    return (
        <>

            <Button
                title="Executar 1"
                onPress={executar}
            />

            <Button
                title="Executar 2"
                onPress={() => {console.warn('Executar 2')}}
            />

        </>
    )

}