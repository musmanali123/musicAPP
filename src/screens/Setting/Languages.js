import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import MainHeader from "../../headers/mainHeader";
import { StaticImages, colors, lnguagesChannel } from "../../utils/constant";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Responser";
import SearchBar from "../../components/Inputs/SearchBar";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const LanguageScreen = () => {
    return (
        <SafeAreaView style={languageStyles.mainPage} >
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={"dark-content"} />
            <  ScrollView
                contentContainerStyle={{ paddingBottom: '35%' }}
                showsVerticalScrollIndicator={false}
                style={languageStyles.scrollList}
            >
                <View style={languageStyles.headersMargins}>
                    <MainHeader title={'Languages'} />
                </View>
                <View style={languageStyles.searchBar}>
                    <SearchBar />
                </View>
                <View>
                    {lnguagesChannel.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text style={languageStyles.channel}>{item.channel}</Text>
                                {item.langList.map((item, index) => {
                                    return (
                                        <View key={index} style={languageStyles.mainLanguageCard}>
                                            <View style={languageStyles.selectedLanguageContiner}>
                                                <View style={languageStyles.selectedLanguage}>
                                                    <Image source={StaticImages.dummyImage} />
                                                    <Text style={languageStyles.currentLanguage}>{item.language}</Text>
                                                </View>
                                                {item.isSelected ?
                                                    <FontAwesome name="check" size={18} color={colors.buttonColor} />
                                                    : null
                                                }
                                            </View>
                                        </View>
                                    )})}
                            </View>
                        )})}

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}


const languageStyles = StyleSheet.create({
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
    searchBar: {
        marginTop: moderateScale(10),
        marginBottom: moderateScale(15)
    },
    mainLanguageCard: {
        borderWidth: 0.5,
        borderColor: colors.fileTextColor,
        padding: 5,
        borderRadius: 10,
        marginBottom: moderateScale(10),
        shadowColor: "#000",
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: 5,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    selectedLanguageContiner:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:horizontalScale(10)
    },
    selectedLanguage:{
        flexDirection:'row',
        alignItems:'center'
    },
    channel:{
        marginBottom:moderateScale(10),
        fontSize:14,
        fontWeight:'500',
        color:colors.blackColor
    },
    currentLanguage:{
        marginLeft:'10%',
        fontSize:14,
        fontWeight:'600',
        color:colors.blackColor
    }
})

export default LanguageScreen;