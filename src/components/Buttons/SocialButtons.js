import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import {  colors } from "../../utils/constant"
import { moderateScale } from "../../utils/Responser"

const SocialButtons = ({
    imagPath,
    title
}) => {
    return (
        <TouchableOpacity style={styles.btnContiner}>
            <Image source={imagPath} resizeMode="contain" width={100} height={100} resizeMethod="scale" />
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        height: moderateScale(50),
        width: '45%',
        backgroundColor: colors.inputborderColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.inputborderColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 12,
        marginLeft: moderateScale(14),
        fontWeight: '400',
        color: colors.blackColor,
        textTransform: 'uppercase'
    }
})

export default SocialButtons;