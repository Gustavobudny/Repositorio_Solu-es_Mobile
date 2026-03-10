import{View, Image, StyleSheet} from 'react-native';

export default function Imagens (){
    return (
        <View style={styles.viwe_image}>
                <Image style={styles.imagens} source={require('../Sources/neymar.jpg')} />
                <Image style={styles.imagens} source={require('../Sources/viniciussssssss.jpg')} />
         </View>
    )
}


const styles = StyleSheet.create({
    viwe_image: {
    flexDirection: 'row',
    alignContent: 'space-around',
    gap: 20
  },
  imagens: {
    width: 170,
    height: 200
  },
})