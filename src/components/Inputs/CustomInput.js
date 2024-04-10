import React from "react"
import { View, StyleSheet, TextInput } from "react-native";
import { colors } from "../../utils/constant";

const CustomInput = ({
    placeholder,
    onChangeText,
    id,
    Value,
    keyboardMode,
    txtStyle,
    isMultiLine,
    inputTextClr,
    modeInput,
    isEdit,
    pass
}) => {
    return(
        <View>
        <TextInput
            editable={isEdit}
            placeholder={placeholder}
            style={[styles.mainInputLayout, { ...txtStyle }]}
            onChangeText={onChangeText}
            id={id}
            value={Value}
            keyboardType={keyboardMode ? keyboardMode :'default'}
            placeholderTextColor={inputTextClr ? "rgba(168, 168, 168, 1)" : colors.blackColor}
            multiline={isMultiLine}
            inputMode={modeInput}
            secureTextEntry={pass?pass:false}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    mainInputLayout: {
        borderWidth: 1,
        backgroundColor: colors.inputborderColor,
        borderColor: colors.inputborderColor,
        opacity: 0.65,
        borderRadius: 8,
        paddingLeft: 16,
        fontSize: 14,
        color: colors.blackColor,
         fontWeight: '600'
    }
})
export default CustomInput;