import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StaticImages, colors } from "../utils/constant"




const HomeHeader = () => {
    return (
        <View style={styles.mainLayout}>
            <TouchableOpacity style={styles.notificationContiner} >
                <MaterialIcons
                    name="notifications-none"
                    size={28}
                    color={colors.blackColor}
                />
            </TouchableOpacity>
            <Text style={styles.welcomeText}>{"Hello..."}</Text>
            <View style={styles.AvatarContiner}>
                <Image source={StaticImages.boyImage} style={styles.Avatar} resizeMode="contain"/>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    mainLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    AvatarContiner: {
        borderWidth: 1,
        borderColor: colors.inputborderColor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    Avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        overflow: "hidden",
        resizeMode:"cover"
    },
    notificationContiner: {
        borderWidth: 1,
        padding:8,
        borderColor: colors.inputborderColor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    welcomeText:{
        fontSize:26,
        fontWeight:'900',
        color:colors.blackColor,
        letterSpacing:3
    }
})


export default HomeHeader;