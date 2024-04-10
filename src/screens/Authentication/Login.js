import { useState } from "react";
import { StatusBar, SafeAreaView, Text, StyleSheet, View } from "react-native"
import { StaticImages, colors } from "../../utils/constant";
import { horizontalScale, moderateScale, windowWidth } from "../../utils/Responser";
import MainHeader from "../../headers/mainHeader";
import CustomInput from "../../components/Inputs/CustomInput";
import { Checkbox, Divider } from "react-native-paper";
import CustomButton from "../../components/Buttons/CustomButton";
import CallButton from "../../components/Buttons/CallButton";
import SocialButtons from "../../components/Buttons/SocialButtons";

const LoginScreen = ({navigation}) => {
    const [checked, setChecked] = useState(false);

    return (
        <SafeAreaView style={loginStyle.mainLayout}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={"dark-content"} />
            <View style={loginStyle.elementStyle}>
                <View style={loginStyle.header}>
                    <MainHeader title={"Create Account"} />
                </View>
                <View style={loginStyle.inputContainer}>
                    <Text style={loginStyle.lableStyle}>Email Address:</Text>
                    <CustomInput
                        isMultiLine={false}
                        placeholder={"email@emial.com "}
                        isEdit={false}
                    />
                </View>
                <View style={loginStyle.inputContainer}>
                    <Text style={loginStyle.lableStyle}>Password:</Text>
                    <CustomInput
                        isMultiLine={false}
                        placeholder={"Password "}

                    />
                </View>
                <View style={loginStyle.checkCont}>
                    <View>
                        <Checkbox
                            uncheckedColor={colors.inputborderColor}
                            color={colors.blackColor}
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <Text style={loginStyle.remindertext}>I agree to the terms & conditions.</Text>
                </View>
                <View style={{ marginTop: moderateScale(15), marginBottom: moderateScale(15) }}>
                    <CustomButton 
                    btnPress={()=>{navigation.navigate("Home")}}
                    btnTitle={"Sign up"} />
                </View>
                <View style={loginStyle.divideContainer}>
                    <Divider style={loginStyle.divider} />
                    <Text style={loginStyle.remindertext}>Or Sign up With</Text>
                    <Divider style={loginStyle.divider} />
                </View>
                <View style={{ marginTop: moderateScale(20), marginBottom: moderateScale(15) }}>
                    <CallButton />
                </View>
                <View style={loginStyle.socialButttons}>
                    <SocialButtons imagPath={StaticImages.fbIcon} title={'Facebook'} />
                    <SocialButtons imagPath={StaticImages.googleIcon} title={'Google'} />
                </View>
            </View>
        </SafeAreaView>
    )
}


const loginStyle = StyleSheet.create({
    mainLayout: {
        flex: 1,
        backgroundColor: colors.backgroundScreenColor,
    },
    elementStyle: {
        marginHorizontal: horizontalScale(40)
    },
    header: {
        marginTop: moderateScale(60),
        marginBottom: moderateScale(20)
    },
    lableStyle: {
        marginBottom: moderateScale(15),
        fontSize: 16,
        color: colors.blackColor,
        textTransform: 'uppercase'
    },
    inputContainer: {
        marginBottom: moderateScale(20)
    },
    checkCont: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    remindertext: {
        color: colors.blackColor,
        fontSize: moderateScale(12),
        fontWeight: '500',
        opacity: 0.8,
        textTransform: 'uppercase'
    },
    divider: {
        borderWidth: 0.1,
        color: colors.blackColor,
        width: '30%',
    },
    divideContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(20)
    },
    socialButttons: {
        marginTop:moderateScale(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});


export default LoginScreen;