import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StaticImages, colors } from "../utils/constant";
import { moderateScale } from "../utils/Responser";

const ResultCard = (
    {
        imgUrl,
        songName,
        description,
        ongo
    }
) => {

    return (
        <TouchableOpacity
        onPress={ongo}
        style={styles.mainCard}>
            <Image source={imgUrl} style={styles.imgStyle} />
            <View style={styles.songInfo}>
                <Text style={styles.songText}>{songName}</Text>
                <Text style={styles.songText}>MM/DD/YYYY</Text>
            </View>
            <View style={styles.winnerContiner}>
                <Text style={styles.winnerName}>Winner Name</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    mainCard: {
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowColor: "#000000",
        backgroundColor:colors.backgroundScreenColor,
        shadowOpacity: 0.2,
        shadowRadius: 7.2,
        elevation: 4,
        padding: 10,
        marginBottom: moderateScale(10),
        borderRadius: 10,
        borderWidth: 0.4,
    },
    imgStyle: {
        width: '100%',
        height: moderateScale(180),
        borderRadius: 10
    },
    songInfo: {
        marginTop: moderateScale(10),
        marginBottom: moderateScale(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    songText:{
        fontSize:14,
        color:colors.blackColor,
        fontWeight:'400',
    },
    winnerName:{
        fontSize:20,
        color:colors.blackColor,
        fontWeight:'800',
        marginBottom: moderateScale(5),

    },
    descriptionText:{
        fontSize:14,
        color:colors.blackColor,
        fontWeight:'400',
        opacity:0.6,
        marginBottom: moderateScale(5),
    }

})

export default ResultCard;