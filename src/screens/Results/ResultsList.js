import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import { colors } from "../../utils/constant";
import MainHeader from "../../headers/mainHeader";
import { horizontalScale, moderateScale } from "../../utils/Responser";
import { dummyData } from "../../modal/DummyData";
import ResultCard from "../../components/ResultsCard";



const ResultScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={resultStyles.mainLayout} >
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={'dark-content'} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: '30%' }}
                showsVerticalScrollIndicator={false}
                style={resultStyles.scrollList}
            >
                <View style={resultStyles.header}>
                    <MainHeader title={'RESULT'} />
                </View>
                <View >
                    {dummyData.map((item, index) => {
                        return (
                            <ResultCard
                                ongo={() => { navigation.navigate('ResultDetails') }}
                                key={index}
                                description={item.desicription}
                                imgUrl={item.imgUrl}
                                songName={item.songName}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const resultStyles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        backgroundColor: colors.backgroundScreenColor
    },
    header: {
        marginTop: moderateScale(30),
        marginBottom: moderateScale(20)
    },
    scrollList: {
        marginHorizontal: horizontalScale(30)
    }
})

export default ResultScreen;