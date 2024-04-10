import { moderateScale } from "../../utils/Responser";
import { colors } from "../../utils/constant";
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const EditInput = ({
    id,
    value,
    onchangeText,
    placeholder,
    iconName,
    keyboardType
}) => {
    return (
        <TouchableOpacity style={styles.mainLayout}>
            <View style={styles.secContiner}>
                <Feather
                    size={20}
                    name={iconName}
                    color={colors.blackColor}
               />
                <TextInput
                  multiline={true}
                    id={id}
                    onChangeText={onchangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={colors.inputColor}
                    style={{paddingLeft:9,width:'90%',}}
                    keyboardType={keyboardType}
                />
            </View>
            <EvilIcons
                size={20}
                name={"pencil"}
                color={colors.blackColor}
            />

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
mainLayout:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth: 1,
    backgroundColor: colors.inputborderColor,
    borderColor: colors.inputborderColor,
    borderRadius:6,
    paddingHorizontal:moderateScale(20),
    color:'#000000'
},
secContiner:{
    flexDirection:'row',
    alignItems:'center'
}
})


export default EditInput;