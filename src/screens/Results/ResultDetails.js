import { useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { StaticImages, colors } from "../../utils/constant";
import MainHeader from "../../headers/mainHeader";
import { horizontalScale, moderateScale } from "../../utils/Responser";
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Divider } from "react-native-paper";
import Feather from 'react-native-vector-icons/Feather'
import { dummyData } from "../../modal/DummyData";
import FeaturedCard from "../../components/FeaturedCard";



const ResultDetailsScreen = () => {
    const [isPaly, setisPlay] = useState({
        isTrack1: false,
        isTrack2: false
    })

    return (
        <SafeAreaView style={resultDetailsStyles.mainLayout} >
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={'dark-content'} />
            <ScrollView contentContainerStyle={{ paddingBottom: '30%' }}
                showsVerticalScrollIndicator={false}
                style={resultDetailsStyles.scrollList}  >
                <View style={resultDetailsStyles.header}>
                    <MainHeader title={'RESULT'} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginLeft: moderateScale(20) }}>
                        <Text style={resultDetailsStyles.winnerNameText}>winner Name</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(10) }}>
                            <TouchableOpacity
                                onPress={() => { setisPlay({ ...isPaly, isTrack1: !isPaly.isTrack1 }) }}
                                style={resultDetailsStyles.btnContiner}>
                                {isPaly.isTrack1 ?
                                    <FontAwesome name="play" size={13} color={colors.backgroundScreenColor} />
                                    :
                                    <Foundation name="pause" size={15} color={colors.backgroundScreenColor} />
                                }
                            </TouchableOpacity>
                            <Text style={resultDetailsStyles.songNameText}>Song Name</Text>
                        </View>
                        <Text style={resultDetailsStyles.descriptionText}>It is a long established fact that a reader will be distracted by the readable...</Text>
                        <Image source={StaticImages.musicContiner} />
                        <View style={resultDetailsStyles.statisticsValue}>
                            <View style={resultDetailsStyles.votesContiner}>
                                <Text style={resultDetailsStyles.totalVotes}>TOTAL VOTES:</Text>
                                <Divider style={resultDetailsStyles.divider} />
                                <Text style={resultDetailsStyles.totalVotesText}>99944</Text>
                            </View>
                            <View style={{ marginLeft: moderateScale(20), marginBottom: moderateScale(10) }}>
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginBottom: moderateScale(10)
                                    }}>
                                    <Feather name="thumbs-up" size={20} color={colors.buttonColor} />
                                    <Text style={resultDetailsStyles.textValue}>784</Text>
                                </TouchableOpacity>
                                <Divider style={resultDetailsStyles.divider} />
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Feather name="share-2" size={20} color={colors.buttonColor} />
                                    <Text style={[resultDetailsStyles.textValue, { left: 5 }]}>SHARE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={StaticImages.leftStar} style={{ position: 'absolute', right: 0 }} />
                </View>

                <View style={resultDetailsStyles.commentsSection}>
                    <Text style={resultDetailsStyles.commentsText}>COMMENTS</Text>
                    <Divider style={resultDetailsStyles.commentsDivider} />
                    {dummyData.slice(0, 10).map((item, index) => {
                        return (
                            <View key={index} >
                                <View style={resultDetailsStyles.ImgContiner}>
                                    <Image source={StaticImages.dummyImage} />
                                    <Text style={resultDetailsStyles.commentorName}>{item.singerName?.substring(0, 8)}</Text>
                                </View>
                                <Text style={resultDetailsStyles.commentText}>{'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{ marginHorizontal: horizontalScale(30), }}>
                    <View style={{ marginTop: moderateScale(20) }}>
                        <Text style={resultDetailsStyles.bannerText}>Trending battle</Text>
                    </View>
                    {dummyData.map((item, index) => {
                        return (
                            <FeaturedCard
                                key={index}
                                imgUrl={item.imgUrl}
                                singerName={item.singerName}
                                songNameName={item.songName}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const resultDetailsStyles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        backgroundColor: colors.backgroundScreenColor
    },
    header: {
        marginTop: moderateScale(30),
        marginBottom: moderateScale(30),
        marginHorizontal: horizontalScale(30)
    },
    winnerNameText: {
        fontSize: 16,
        color: colors.blackColor,
        textTransform: 'uppercase',
        marginBottom: moderateScale(10)
    },
    btnContiner: {
        width: 30,
        height: 30,
        backgroundColor: colors.blackColor,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    songNameText: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.blackColor,
        textTransform: 'uppercase',
        left: moderateScale(10)
    },
    descriptionText: {
        width: '40%',
        fontSize: 13,
        fontWeight: '400',
        color: colors.blackColor,
        lineHeight: 20,
        marginBottom: moderateScale(10)
    },
    statisticsValue: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(20),
        width: '40%'
    },
    totalVotes: {
        fontSize: 14,
        color: colors.blackColor,
        textTransform: 'uppercase',
        marginBottom: moderateScale(10)
    },
    divider: {
        width: '100%',
        borderWidth: 0.2,
        color: colors.blackColor,
        marginBottom: moderateScale(10)
    },
    totalVotesText: {
        fontSize: 20,
        color: colors.blackColor,
        fontWeight: '900'
    },
    textValue: {
        fontSize: 14,
        color: colors.blackColor,
        textTransform: 'uppercase',
        left: 10,
        fontWeight: '900'
    },
    commentsSection: {
        marginHorizontal: horizontalScale(30),
        marginTop: moderateScale(20),
        padding: 10,
        borderWidth: 0.2,
        borderRadius: 8,
        backgroundColor: 'rgba(193, 193, 193, 0.1)'
    },
    commentsText: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.blackColor,
        marginBottom: moderateScale(20),
        marginTop: moderateScale(10)
    },
    commentsDivider: {
        width: '100%',
        borderWidth: 0.2,
        opacity: 0.4,
        color: colors.fileTextColor,
        marginBottom: moderateScale(10),
    },
    ImgContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(10),
        marginBottom: moderateScale(20),
    },
    commentorName: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: moderateScale(10),
        color: colors.blackColor
    },
    commentText: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.blackColor,
        textAlign: 'justify'
    },
    bannerText: {
        color: colors.blackColor,
        fontSize: 24,
        textTransform: "uppercase",
        fontWeight: '900',
    }
})

export default ResultDetailsScreen;