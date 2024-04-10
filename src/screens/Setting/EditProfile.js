import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { horizontalScale, moderateScale, windowHeight } from "../../utils/Responser";
import { StaticImages, colors } from "../../utils/constant";
import MainHeader from "../../headers/mainHeader";
import EditInput from "../../components/Inputs/EditInput";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CustomButton from "../../components/Buttons/CustomButton";

const EditProfileScreen = ({ naviagtion }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundScreenColor }}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle="dark-content" />
            <View style={{ marginTop: moderateScale(40), marginHorizontal: horizontalScale(30) }}>
                <MainHeader title={"Edit Profile"} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ marginBottom: '40%', }}
                    contentContainerStyle={{ paddingBottom: '20%' }}>
                    <View style={editProfileEdits.layout}>
                        <View style={editProfileEdits.imgContiner}>
                            <Image source={StaticImages.dummyImage} style={editProfileEdits.Img} />
                            <TouchableOpacity
                                style={{
                                    borderWidth: 5,
                                    width: moderateScale(40),
                                    height: moderateScale(40),
                                    borderRadius: 40,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: colors.blackColor,
                                    bottom: moderateScale(40),
                                    left: moderateScale(0),
                                    zIndex: 1000
                                }}
                                onPress={() => { }}>
                                <EvilIcons
                                    size={20}
                                    name={"pencil"}
                                    color={colors.blackColor}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: moderateScale(10), marginBottom: moderateScale(10) }}>
                            <EditInput
                                iconName={'user'}
                                placeholder={'NAME'}
                                keyboardType={'default'}
                            />
                        </View>
                        <View style={{ marginTop: moderateScale(10), marginBottom: moderateScale(10) }}>
                            <EditInput
                                keyboardType={'default'}
                                iconName={'mail'}
                                placeholder={'INFO@Gmail.com'} />
                        </View>

                        <View style={{ marginTop: moderateScale(10), marginBottom: moderateScale(10) }}>
                            <EditInput
                                keyboardType={'numbers-and-punctuation'}
                                iconName={'phone'}
                                placeholder={'(0000) 1235 7248787'} />
                        </View>
                        <View style={{ marginTop: moderateScale(10), marginBottom: moderateScale(10) }}>
                            <EditInput
                                keyboardType={'visible-password'}
                                iconName={'lock'}
                                placeholder={'*************'} />
                        </View>
                        <View style={{ marginTop: moderateScale(10), marginBottom: moderateScale(10) }}>
                            <EditInput
                                keyboardType={'default'}
                                iconName={'map-pin'}
                                placeholder={'ENTER YOUR ADDRESS HERE.'} />
                        </View>
                        <View style={{ marginTop: moderateScale(20) }}>
                            <CustomButton btnTitle={"SAVE"} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}


const editProfileEdits = StyleSheet.create({
    mainLayout: {
        height: windowHeight,
        backgroundColor: colors.backgroundScreenColor,
        // paddingHorizontal: moderateScale(20)
    },
    layout: {
        // paddingHorizontal: horizontalScale(20),
        paddingTop: moderateScale(15)
    },
    Img: {
        height: moderateScale(180),
        width: '99%',
        borderRadius: 1,
    },
    linearGradient: {
        borderWidth: 5,
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.backgroundScreenColor,
        bottom: moderateScale(40),
        left: moderateScale(4)
    },
    imgContiner: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: moderateScale(10)
    }
})
export default EditProfileScreen;