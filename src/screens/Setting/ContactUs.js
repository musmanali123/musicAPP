import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colors, constactDetials } from "../../utils/constant"
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Responser"
import MainHeader from "../../headers/mainHeader"
import CustomInput from "../../components/Inputs/CustomInput"
import CustomButton from "../../components/Buttons/CustomButton"


const ContactUsScreen = () => {
    return (
        <SafeAreaView style={contactStyle.mainPage}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={"dark-content"} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: '35%' }}
                showsVerticalScrollIndicator={false}
                style={contactStyle.scrollList}
            >
                <View style={contactStyle.headersMargins}>
                    <MainHeader title={'Contact us'} />
                </View>

                <View style={contactStyle.inputContianer}>
                    <Text style={contactStyle.fieldText}>NAME:</Text>
                    <CustomInput
                        placeholder={'NAME....'}
                        inputTextClr={colors.buttonColor}
                    />
                </View>
                <View style={contactStyle.inputContianer}>
                    <Text style={contactStyle.fieldText}>EMAIL:</Text>
                    <CustomInput
                        placeholder={'EMIAL....'}
                        inputTextClr={colors.buttonColor}
                    />
                </View>
                <View style={contactStyle.inputContianer}>
                    <Text style={contactStyle.fieldText}>COMMENT:</Text>
                    <TouchableOpacity style={contactStyle.commnetFiled}>
                        <TextInput
                            style={{ paddingLeft: 12,color:colors.blackColor }}
                            maxLength={10000}
                            multiline={true}
                            placeholderTextColor={colors.blackColor}
                            placeholder="ENER YOUR MESSAGE HERE...."
                        />
                    </TouchableOpacity>
                </View>
                <View style={contactStyle.headersMargins}>
                    <CustomButton btnTitle={"sUBMIT"} />
                </View>

                <View style={contactStyle.contactDeatils}>
                            <Text style={contactStyle.textCont}>CONTACT US</Text>
                        </View>
                        <View>
                            {constactDetials.map((item, index) => {
                                return (
                                    <View key={index} style={contactStyle.contactListContainer}>
                                        <Image source={item.nameIcon} resizeMode="contain"/>
                                        <Text style={contactStyle.contactText}>{item.location}</Text>
                                    </View>
                                )
                            })

                            }
                        </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const contactStyle = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: colors.backgroundScreenColor
    },
    scrollList: {
        marginHorizontal: horizontalScale(30),
    },
    headersMargins: {
        marginTop: verticalScale(30),
        marginBottom: verticalScale(20)
    },
    inputContianer: {
        marginTop: moderateScale(20),
    },
    fieldText: {
        fontSize: moderateScale(14),
        fontWeight: '600',
        color: colors.blackColor,
        marginBottom: moderateScale(10)
    },
    fieldText: {
        fontSize: moderateScale(14),
        fontWeight: '600',
        color: colors.blackColor,
        marginBottom: moderateScale(10)
    },
    commnetFiled: {
        height: moderateScale(150),
        borderWidth: 1,
        backgroundColor: colors.inputborderColor,
        borderColor: colors.inputborderColor,
        opacity: 0.65,
        borderRadius: 8,
        paddingLeft: 6,
        fontSize: 14,
        color: colors.blackColor,
        fontWeight: '600'
    },
    textCont:{
        fontSize:19,
        fontWeight:'800',
        color:colors.blackColor,
        textTransform:'uppercase',
        marginBottom:moderateScale(10)
    },
    contactListContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:moderateScale(10)
    },
    contactText:{
        fontSize:14,
        marginLeft:'10%',
        fontWeight:'300',
        color:colors.buttonColor,
        marginBottom:moderateScale(5)
    },
    contactDeatils:{
        marginBottom:moderateScale(10)
    }
})


export default ContactUsScreen