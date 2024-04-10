import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../utils/constant";
import CustomButton from "../../components/Buttons/CustomButton";
import { horizontalScale, moderateScale, windowHeight } from "../../utils/Responser";



const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={welcomeStyleSheet.mainLayout}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={"dark-content"} />
            <View style={welcomeStyleSheet.centrElement}>
                <Text style={welcomeStyleSheet.guestText}>GUEST</Text>
                <View >
                    <CustomButton
                        btnPress={() => {  navigation.navigate('VootRoot',{isHome:true}) }}
                        btnTitle={'just vote'} />
                </View>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate("Home")}}
                    style={welcomeStyleSheet.skipContiner}>
                    <Text style={welcomeStyleSheet.skipText}>skip sign in</Text>
                </TouchableOpacity>
                <View style={welcomeStyleSheet.undlerLine}></View>
                <View style={welcomeStyleSheet.signInContiner}>
                    <Text style={welcomeStyleSheet.guestText}>{`Artist & \nSupporter`}</Text>
                    <View >
                        <CustomButton
                            btnPress={() => { navigation.navigate('loginScreen') }}
                            btnTitle={'Sign in'} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const welcomeStyleSheet = StyleSheet.create({
    mainLayout: {
        flex: 1,
        backgroundColor: colors.backgroundScreenColor,
    },
    centrElement: {
        marginHorizontal: horizontalScale(40),
        marginTop: '50%',
        justifyContent: 'center',
    },
    guestText: {
        textAlign: 'center',
        marginBottom: '7%',
        fontWeight: '900',
        fontSize: 28,
        color: colors.blackColor,
        textTransform: 'uppercase',
    },
    skipContiner: {
        marginTop: moderateScale(15)
    },
    skipText: {
        textAlign: 'center',
        marginBottom: '7%',
        fontWeight: '300',
        fontSize: 14,
        color: colors.blackColor,
        textTransform: 'uppercase',
        textDecorationLine: 'underline'
    },
    undlerLine: {
        borderWidth: 0.4,
        borderColor: colors.buttonColor,
        opacity: 0.2
    },
    signInContiner: {
        marginTop: moderateScale(40)
    }
})

export default WelcomeScreen;