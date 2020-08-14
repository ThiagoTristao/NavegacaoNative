import React from 'react'
import TextoCentral from '../components/TextoCentral'
import { View, Button} from 'react-native'

export default props => {
    return (
        <View style={{ flex: 1, paddingTop: 40 }}>
            <View style={{ flexDirection:'row', justifyContent:'flex-end'}}>
                <Button title="abrir" 
                onPress={() => {
                    props.navigation.openDrawer()
                    setTimeout(()=>{
                        props.navigation.closeDrawer()
                        setInterval(()=>{
                        props.navigation.toggleDrawer()
                        },1000)
                    },3000)
                }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corDeFundo='#33fa72' corDoTexto='#000'>
                    Tela D
                </TextoCentral>
            </View>
        </View>

    )
}