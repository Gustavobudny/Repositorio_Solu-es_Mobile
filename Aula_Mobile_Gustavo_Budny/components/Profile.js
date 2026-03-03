import {View, Text, Image} from 'react-native';

export function Person(){
    return(
        <View>
            <Text>Meu componente pessoa</Text>
        </View>
    )
}

export function Gustavo(){
    return(
        <View>
            <Text>minha imagem</Text>
            <Image source={require('../Sources/viniciussssssss.jpg')}/>
        </View>
    )
}

export default function Profile() {
    return(
        <View>
            <Text>Meu primeiro coponente</Text>
        </View>
    )
}