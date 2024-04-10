import React, { useState } from "react"; 
import {
 FlatList, 
 Image, 
 ImageBackground, 
 SafeAreaView, 
 StatusBar, 
 StyleSheet, 
 Text, 
 TouchableOpacity, 
 View
} from "react-native"
import { StaticImages, colors } from "../../utils/constant";
import Feather from 'react-native-vector-icons/Feather'
import { horizontalScale, moderateScale, windowHeight, windowWidth } from "../../utils/Responser";
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Divider } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';



const VoteScreen = ({ route }) => {
    const navigation = useNavigation()
    const [isPaly, setisPlay] = useState({
        isTrack1: false,
        isTrack2: false
    })

    return (
        <SafeAreaView style={voteStyle.mainPage}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={'dark-content'} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 8]}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                renderItem={(({ item, index }) => {
                    return (
                        <View key={index} style={{}}>
                            {index == 0 ?
                                <View 
                                    style={{
                                        marginTop: '5%'
                                    }}>
                                    <TouchableOpacity
                                        hitSlop={{ top: 100, bottom: 100, left: 100, right: 100 }}
                                        onPress={() => {
                                                navigation.goBack()
                                            // if (route?.params?.isHome) {
                                            // } else {
                                            //     navigation.navigate("VootRoot")
                                            // }
                                        }}
                                        style={voteStyle.backContiner}>
                                        <Feather
                                            name="arrow-left"
                                            size={18}
                                            color={colors.blackColor}
                                        />
                                    </TouchableOpacity>
                                </View>
                                : null
                            }

                            <View style={voteStyle.imgStyling}>
                                <Image source={StaticImages.leftStarImage} />
                                <View style={voteStyle.trackContiner}>
                                    <Text style={voteStyle.singerName}>{`Singer-${item} Name`}</Text>
                                    <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => { setisPlay({ ...isPaly, isTrack1: !isPaly.isTrack1 }) }}
                                            style={voteStyle.buttonContainer}>
                                            {isPaly.isTrack1 ?
                                                <FontAwesome name="play" size={13} color={colors.backgroundScreenColor} />
                                                :
                                                <Foundation name="pause" size={15} color={colors.backgroundScreenColor} />
                                            }
                                        </TouchableOpacity>
                                        <Text style={voteStyle.songName}>Song Name</Text>
                                    </View>
                                    <View style={voteStyle.pullVoteContainer}>
                                        <Text style={voteStyle.pullVoteText}>POLE VOTE</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={StaticImages.vsImage} />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <View>
                                    <View style={{ marginLeft: moderateScale(10), marginTop: moderateScale(10) }}>
                                        <Text style={[voteStyle.singerName, { marginBottom: moderateScale(8) }]}>Singer Name</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <TouchableOpacity
                                                onPress={() => { setisPlay({ ...isPaly, isTrack2: !isPaly.isTrack2 }) }}
                                                style={voteStyle.buttonContainer1}>
                                                {!isPaly.isTrack2 ?
                                                    <FontAwesome name="play" size={13} color={colors.blackColor} />
                                                    :
                                                    <Foundation name="pause" size={15} color={colors.blackColor} />
                                                }
                                            </TouchableOpacity>
                                            <Text style={voteStyle.songName1}>Song Name</Text>
                                        </View>
                                    </View>

                                    <ImageBackground
                                        imageStyle={{
                                            width: 200,
                                            height: 100,
                                            resizeMode: 'contain'
                                        }}
                                        source={StaticImages.bannerImge}>
                                        <Text style={{
                                            justifyContent: 'center',
                                            marginTop: '20%',
                                            textAlign: 'center',
                                            color: colors.backgroundScreenColor,
                                            fontSize: 18,
                                            fontWeight: "800"
                                        }}>POLE VOTE</Text>
                                    </ImageBackground>
                                </View>
                                <View
                                    style={{
                                        position: 'absolute',
                                        right: 0,
                                        top: "-50%"
                                    }}
                                >
                                    <Image source={StaticImages.leftStar} />
                                </View>
                            </View>
                            <View style={voteStyle.activityContaoner}>
                                <Divider style={voteStyle.divider} />
                                <View style={voteStyle.allIconsContainer}>
                                    <TouchableOpacity style={voteStyle.singleIcon}>
                                        <Feather name="thumbs-up" size={20} color={colors.buttonColor} />
                                        <Text style={voteStyle.textItm}>999</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={voteStyle.singleIcon}>
                                        <Ionicons name="chatbubble-ellipses-outline" size={20} color={colors.buttonColor} />
                                        <Text style={voteStyle.textItm}>COMMENTS</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={voteStyle.singleIcon}>
                                        <Feather name="share-2" size={20} color={colors.buttonColor} />
                                        <Text style={voteStyle.textItm}>SHARE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View >

                    )
                })}
            />

        </SafeAreaView>
    )
}

const voteStyle = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: colors.backgroundScreenColor
    },
    backContiner: {
        borderWidth: 0.3,
        borderRadius: 6,
        borderColor: colors.blackColor,
        padding: 10,
        width: moderateScale(40),
        height: moderateScale(40),
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: moderateScale(40),
    },
    imgStyling: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    trackContiner: {
        position: 'absolute',
        right: 30,
        top: '30%'
    },
    singerName: {
        fontSize: 14,
        color: colors.blackColor,
        textTransform: 'uppercase'
    },
    buttonContainer: {
        width: 30,
        height: 30,
        borderWidth: 0.4,
        borderRadius: 8,
        color: colors.blackColor,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blackColor
    },
    buttonContainer1: {
        width: 30,
        height: 30,
        borderWidth: 0.4,
        borderColor: colors.inputborderColor,
        borderRadius: 8,
        color: colors.inputborderColor,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.inputborderColor
    },
    songName: {
        fontSize: 18,
        fontWeight: "800",
        color: colors.blackColor,
        marginRight: moderateScale(13)
    },
    songName1: {
        fontSize: 18,
        fontWeight: "800",
        color: colors.blackColor,
        marginLeft: moderateScale(13)
    },
    pullVoteContainer: {
        top: '100%'
    },
    pullVoteText: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.blackColor,
        textDecorationLine: 'underline',
        textDecorationColor: colors.blackColor
    },
    activityContaoner: {
        marginTop: '20%',
        marginHorizontal: horizontalScale(30)
    },
    divider: {
        borderWidth: 0.1,
        color: colors.blackColor,
        width: '100%',
    },
    allIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(20)
    },
    singleIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textItm: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.blackColor,
        marginLeft: moderateScale(10)
    }
})

export default VoteScreen;