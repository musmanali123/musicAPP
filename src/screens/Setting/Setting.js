import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StaticImages, colors, routes } from "../../utils/constant";
import { horizontalScale, moderateScale } from "../../utils/Responser";
import MainHeader from "../../headers/mainHeader";
import AntDesign from 'react-native-vector-icons/AntDesign'
import UserCart from "../../components/UserCart";
import { useState } from "react";
import { Divider } from "react-native-paper";

const SettingScreen = ({navigation}) => {
    const [isUserCartShow, setUserCartShow] = useState(false);

    return (
        <SafeAreaView style={settingStyle.mainPage}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={'dark-content'} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: '30%' }}
                showsVerticalScrollIndicator={false}
                style={settingStyle.scrollList}
            >
                <View style={settingStyle.header}>
                    <MainHeader title={"Profile"} />
                </View>
                {!isUserCartShow
                    ?
                    <TouchableOpacity
                        onPress={() => { setUserCartShow(true) }}
                        style={settingStyle.loginContiner}>
                        <View style={settingStyle.logoContiner}>
                            <Image source={StaticImages.userIcon} />
                            <Text style={settingStyle.text}>Login</Text>
                        </View>
                        <AntDesign name="arrowright" size={25} color={colors.blackColor} />

                    </TouchableOpacity>
                    :
                    <UserCart 
                    editProfileGo={()=>{navigation.navigate("EditProfile")}}
                    onclosed={() => { setUserCartShow(false) }} />
                }
                <View style={settingStyle.generalSetting} >
                    <Text style={[settingStyle.generalText,{marginTop:moderateScale(10)}]}>General Settings</Text>
                    <View style={{ marginTop: moderateScale(30) }}>
                        {routes.map((item, index) => {
                            return (
                                <View key={index}>
                                    <TouchableOpacity
                                     onPress={()=>{
                                        if (item.route == undefined ) {
                                            Alert.alert("No Route Fonud!","....")
                                        } else {
                                            navigation.navigate(item.route)    
                                        }
                                        }}
                                        style={settingStyle.loginContinerRoute}>
                                        <View style={settingStyle.logoContiner}>
                                            <Image source={item.icon} />
                                            <Text style={[settingStyle.text, { marginLeft: moderateScale(30) }]}>{item.name}</Text>
                                        </View>
                                        <AntDesign name="arrowright" size={25} color={colors.blackColor} />
                                    </TouchableOpacity>
                                    <View style={{
                                        marginTop:moderateScale(20),
                                        marginBottom:moderateScale(20)
                                    }}>
                                       {routes.length -1 == index ?null:  <Divider  style={{borderWidth:0.2,borderColor:'#000000'}}/>}
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const settingStyle = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: colors.backgroundScreenColor
    },
    header: {
        marginTop: moderateScale(30),
        marginBottom: moderateScale(30),
        marginHorizontal: horizontalScale(40)
    },
    loginContiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: horizontalScale(40),
        marginBottom: moderateScale(30)
    },
    loginContinerRoute: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    logoContiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: '20%',
        fontSize: 16,
        fontWeight: '400',
        color: colors.blackColor,
    },
    generalSetting: {
        marginHorizontal: horizontalScale(35)
    },
    generalText: {
        fontSize: 22,
        fontWeight: '900',
        color: colors.blackColor,
        textTransform: 'uppercase',
    }
})

export default SettingScreen;