import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StaticImages, colors } from "../../utils/constant";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/Responser";
import MainHeader from "../../headers/mainHeader";
import { NotificationData } from "../../modal/DummyData";
import NotificationCard from "../../components/NotificationCard";

const NotificationScreen = () => {
    return (
        <SafeAreaView style={notificationSetting.mainPage}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={"dark-content"} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: '35%' }}
                showsVerticalScrollIndicator={false}
                style={notificationSetting.scrollList}
            >
                <View style={notificationSetting.headersMargins}>
                    <MainHeader title={'Notification'} />
                </View>

                <View>
                    <View style={notificationSetting.subContiner}>
                        <Text style={notificationSetting.todayTitle}>TODAY</Text>
                        <TouchableOpacity onPress={() => { }} >
                            <Text style={notificationSetting.markText}>MARK AS ALL READ</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList
                            contentContainerStyle={{ marginBottom: '10%' }}
                            data={NotificationData}
                            keyExtractor={(item) => item}
                            renderItem={(({ item, index }) => {
                                return (
                                    <View key={index}>
                                        <NotificationCard
                                          time={item.data}
                                            date={item.time}
                                            imgUrl={StaticImages.dummyImage}
                                            notifiedMsg={item.title}
                                        />


                                    </View>
                                )
                            })}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const notificationSetting = StyleSheet.create({
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
    subContiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(1),
        marginBottom: moderateScale(13)
    },
    todayTitle: {
        fontSize: moderateScale(18),
        fontWeight: '900',
        color: colors.blackColor,
        letterSpacing: 1
    },
    markText: {
        fontSize: moderateScale(14),
        fontWeight: '200',
        color: colors.blackColor,
    }
})

export default NotificationScreen;