import { StatusBar, StyleSheet, View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from "react-native";

import { colors } from "../../utils/constant";
import MainHeader from "../../headers/mainHeader";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Responser";
import CustomButton from "../../components/Buttons/CustomButton";
import { dummyData } from "../../modal/DummyData";
import Foundation from 'react-native-vector-icons/Foundation'


const TrackListScreen = () => {
    return (
        <SafeAreaView style={trackListStyles.mainPage}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={'dark-content'} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: '35%' }}
                showsVerticalScrollIndicator={false}
                style={trackListStyles.scrollList}
            >
                <View style={trackListStyles.headersMargins}>
                    <MainHeader title={"Tracks"} />
                </View>
                <View>
                    <CustomButton
                        btnTitle={`ADD Tracks  +`}
                    />
                </View>
                <View style={trackListStyles.headersMargins}>
                    {dummyData.map((item, index) => {
                        return (
                            <View
                                style={trackListStyles.mainCard}
                                key={index}  >
                                <TouchableOpacity style={{
                                    alignItems: 'flex-end',
                                    position: 'absolute',
                                    top: 0,
                                    right: 5,
                                    zIndex: 10000
                                }}>
                                    <Foundation  color={colors.blackColor} name="x-circle" size={30} />
                                </TouchableOpacity>
                                <View style={trackListStyles.innerContiner}>
                                    <Image source={item.imgUrl} style={trackListStyles.Img} />
                                    <View style={trackListStyles.textContiner}>
                                        <Text style={trackListStyles.singerName}>{item.singerName}</Text>
                                        <Text style={trackListStyles.songName}>{item.songName}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}


const trackListStyles = StyleSheet.create({
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
    mainCard: {
        borderWidth: 0.5,
        borderColor: colors.blackColor,
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
        elevation: 1,
    },
    innerContiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Img: {
        width: 100,
        height: 100,
        borderRadius: 12,
        resizeMode: 'center'
    },
    textContiner:{
        marginLeft:moderateScale(10)
    },
    singerName:{
        fontSize:14,
        fontWeight:'500',
        marginBottom:moderateScale(5),
        color:colors.blackColor,
        // width:"40%"
    },
    songName:{
        fontSize:18,
        fontWeight:'700',
        marginTop:moderateScale(5),
        color:colors.blackColor
        
    }
});

export default TrackListScreen