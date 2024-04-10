import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { StaticImages, colors } from "../../utils/constant";
import { horizontalScale, verticalScale } from "../../utils/Responser";
import MainHeader from "../../headers/mainHeader";
import { dummyData } from "../../modal/DummyData";
import FeaturedCard from "../../components/FeaturedCard";

const BookMarkScreen = () => {
    return (
        <SafeAreaView style={bookmarkStyle.mainPage}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={"dark-content"} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: '35%' }}
                showsVerticalScrollIndicator={false}
                style={bookmarkStyle.scrollList}
            >
                <View style={bookmarkStyle.headersMargins}>
                    <MainHeader title={'Bookmarks'} />
                </View>

                <View>
                    {dummyData.map((item, index) => {
                        return (
                            <FeaturedCard
                            key={index}
                            songNameName={item.songName}
                            singerName={item.singerName}
                            isBookMark={true}
                            imgUrl={item.imgUrl}

                            
                            />
                        )
                    })}
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}

const bookmarkStyle = StyleSheet.create({
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
    }
})

export default BookMarkScreen;