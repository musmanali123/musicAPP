import { StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { colors } from "../../utils/constant"
import { horizontalScale, windowWidth } from "../../utils/Responser"


const SearchBar = () => {
    return (
        <TouchableOpacity
            style={searchStyle.mainLayout}   >
            <TextInput
                placeholder="SEARCH"
                placeholderTextColor={colors.blackColor}
                onChangeText={(e)=>{}}
            />
            <TouchableOpacity>
                <Feather
                    size={18}
                    name="search"
                    color={colors.blackColor}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}



const searchStyle = StyleSheet.create({
    mainLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.inputborderColor,
        backgroundColor: colors.inputborderColor,
        width: '100%',
        paddingHorizontal: 18,
        borderRadius: 8
    }
})


export default SearchBar;