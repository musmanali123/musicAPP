import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from "../utils/constant"
import { moderateScale } from "../utils/Responser"



const NotificationCard = (
    {
        imgUrl,
        notifiedMsg,
        date,
        time
    }
) => {
 
    return (
        <>
            <View >
                <View style={styles.mainCard}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={imgUrl} />
                        <Text style={styles.notifiedText}> {notifiedMsg?.length > 40 ? `${notifiedMsg?.substring(0, 40)}...` : notifiedMsg}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={18} color={colors.fileTextColor} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(20) }}>
                    <AntDesign name="clockcircleo" size={12} color={colors.blackColor} />
                    <Text style={styles.dateStyling}>{date}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(10)
    },
    notifiedText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.blackColor,
        width: '80%',
        left: '15%',
        textAlign: 'center',
        marginTop: moderateScale(4)
    },
    dateStyling: {
        fontSize: 12,
        marginLeft: moderateScale(10),
        color: colors.blackColor
    }
})

export default NotificationCard;