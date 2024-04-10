import { StyleSheet, Text, TouchableOpacity } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from "../../utils/constant"
import { moderateScale } from "../../utils/Responser"


const CallButton = () => {
    return (
        <TouchableOpacity style={styles.btnContiner}>
            <MaterialIcons
                name="wifi-calling-3"
                size={18}
                color={colors.blackColor}
            />
            <Text style={styles.btnText}>Phone Number</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
        btnContiner: {
            flexDirection:'row',
            alignItems:'center',
            height: moderateScale(50),
            backgroundColor: colors.inputborderColor,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.inputborderColor,
            justifyContent: 'center',
            alignItems: 'center'
        },
        btnText: {
            fontSize: 14,
            marginLeft:moderateScale(14),
            fontWeight: '400',
            color: colors.blackColor,
            textTransform: 'uppercase'
        }
})

export default CallButton;