import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { StaticImages, colors } from "../utils/constant";
import { moderateScale } from "../utils/Responser";

const FeaturedCard = ({
    imgUrl,
    singerName,
    songNameName,
    isBookMark
}) => {
    return (
        <>
            <Image source={isBookMark ? StaticImages.darkbadgeIcon:StaticImages.badgeicon} style={styles.badge} />
            <TouchableOpacity style={styles.mainCard}>
                <View style={styles.innerDiv}>
                    <Image source={imgUrl} style={styles.img} />
                    <View style={styles.textContiner}>
                        <Text style={styles.singerName}>{singerName}</Text>
                        <Text style={styles.songName}>{songNameName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    mainCard: {
        borderWidth: 0.4,
        padding: 5,
        borderRadius: 10,
        shadowColor: "#000",
        backgroundColor:'#ffffff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    innerDiv: {
        flexDirection: 'row',
    },
    img: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: 8
    },
    badge: {
        top: moderateScale(25),
        right: moderateScale(10),
        alignSelf: 'flex-end',
        zIndex:100
    },
    textContiner:{
        marginTop:moderateScale(20),
        marginLeft:moderateScale(12)
    },
    singerName:{
        fontSize:14,
        fontWeight:'400',
        color:colors.blackColor,
        marginBottom:moderateScale(10)
    },
    songName:{
        fontSize:18,
        fontWeight:'800',
        color:colors.blackColor   
    }
})

export default FeaturedCard;