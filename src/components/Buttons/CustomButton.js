import { StyleSheet, Text, TouchableOpacity, View, } from "react-native"
import { moderateScale } from "../../utils/Responser"
import { colors } from "../../utils/constant"

const CustomButton = ({ btnPress, btnTitle, customWidth }) => {
    return (
        <View >
            <TouchableOpacity
                style={[styles.btnContiner, { width: customWidth }]}
                onPress={btnPress}>
                    <View>
                <Text style={styles.btnText}>{btnTitle}</Text>
                    </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        btnContiner: {
            height: moderateScale(50),
            backgroundColor: colors.buttonColor,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.buttonColor,
            justifyContent: 'center',
            alignItems: 'center'
        },
        btnText: {
            fontSize: 18,
            fontWeight: '800',
            color: colors.backgroundScreenColor,
            textTransform: 'uppercase'
        }

    }
)

export default CustomButton