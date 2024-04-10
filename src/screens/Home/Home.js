import { 
SafeAreaView, 
ScrollView, 
StatusBar, 
StyleSheet, 
Text, 
TouchableOpacity, 
View
} from "react-native"
import { colors } from "../../utils/constant";
import { horizontalScale, moderateScale, windowWidth } from "../../utils/Responser";
import HomeHeader from "../../headers/HomeHeader";
import SearchBar from "../../components/Inputs/SearchBar";
import { useState } from "react";
import { dummyData } from "../../modal/DummyData";
import HomeCards from "../../components/HomeCards";
import FeaturedCard from "../../components/FeaturedCard";

const tags = [
'All', 
"Rock", 
"POP music", 
"jazz", 
'Hip hop music', 
"Rock", 
"Pop music", 
"Classical", 
'Version Remix'
]

const HomeScreen = ({ navigation }) => {
    const [select, setSelect] = useState(0);

    return (
        <SafeAreaView style={homeStyle.mainPage}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={'dark-content'} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: '30%' }}
                style={homeStyle.scrollStyle}
                showsVerticalScrollIndicator={false}>
                <View style={homeStyle.header}>
                    <HomeHeader />
                </View>
                <View style={homeStyle.header} >
                    <SearchBar />
                </View>
                <View style={homeStyle.header}>
                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {tags.map((text, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { setSelect(index) }}
                                    key={index} style={[homeStyle.selectedContiner, { backgroundColor: select == index ? colors.buttonColor : null }]}>
                                    <Text style={[homeStyle.tagsStyle, { color: select == index ? colors.backgroundScreenColor : colors.buttonColor }]}>{text}</Text>
                                </TouchableOpacity>
                            )
                        })
                        }
                    </ScrollView>
                </View>
                <View style={homeStyle.header}>
                    <Text style={homeStyle.bannerText}>Trending battle</Text>
                </View>
                <View >
                    <ScrollView
                        decelerationRate={5}
                        disableIntervalMomentum={true}
                        snapToInterval={windowWidth / 1.2}
                        snapToAlignment={"center"}
                        contentInset={{ top: 0, left: windowWidth - 20, bottom: 0, right: windowWidth - 30, }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {dummyData.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{ marginRight: 20 }}>
                                    <HomeCards
                                        onPress={() => {
                                            navigation.navigate('VootRoot')
                                        }}
                                        description={item.desicription}
                                        img={item.imgUrl}
                                        songName={item.songName}
                                        singerName={item.singerName}
                                        star={item.star}
                                    />
                                </View>
                            )
                        })}

                    </ScrollView>
                </View>
                <View style={{ marginTop: moderateScale(20) }}>
                    <Text style={homeStyle.bannerText}>FEATURED</Text>
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
            </ScrollView>
        </SafeAreaView>

    )
}


const homeStyle = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: colors.backgroundScreenColor
    },
    scrollStyle: {
        marginHorizontal: horizontalScale(30),
        flex: 1
    },
    header: {
        marginTop: moderateScale(20),
        marginBottom: moderateScale(15)
    },
    selectedContiner: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(40),
        borderWidth: 1,
        borderColor: colors.blackColor,
        marginRight: moderateScale(20),
        borderRadius: 10
    },
    tagsStyle: {
        fontSize: 14,
        textAlign: 'center',
        textTransform: "uppercase",
        fontWeight: '500',
    },
    bannerText: {
        color: colors.blackColor,
        fontSize: 24,
        textTransform: "uppercase",
        fontWeight: '900',
    }
})



export default HomeScreen;