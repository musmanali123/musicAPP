import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { colors } from "../utils/constant";
import { useNavigation } from '@react-navigation/native';

const MainHeader = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={headerStyle.main}>
            <Text style={headerStyle.titleText}>{title}</Text>
            <TouchableOpacity onPress={()=>{navigation.goBack()}} style={headerStyle.backContiner}>
                <Feather
                name="arrow-left"
                    size={18}
                    color={colors.blackColor}
                />
            </TouchableOpacity>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backContiner:{
        borderWidth:0.3,
        borderRadius:6,
        borderColor:colors.blackColor,
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:25,
        fontWeight:'900',
        color:colors.blackColor,
        textTransform:'uppercase'
    }})

export default MainHeader;