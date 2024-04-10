import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/constant";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { moderateScale } from "../utils/Responser";
import CustomButton from "./Buttons/CustomButton";


const HomeCards = ({
    img,
    singerName,
    songName,
    star,
    description,
    onPress
}) => {
    return (
        <View style={styles.mainCard}>
            <Image source={img} style={styles.imgStyle} />
            <View style={styles.subContiner}>
                <View style={styles.signerInfo}>
                    <Text style={styles.singerName}>{singerName}</Text>
                    <Text style={styles.songName}>{songName}</Text>
                </View>
                <View  style={styles.starLayout}>
                    <TouchableOpacity style={styles.starContiner} >
                        <AntDesign
                            name="staro"
                            size={15}
                            color={colors.blackColor}
                        />
                    </TouchableOpacity>
                    <View style={styles.starText}>
                        <Text style={styles.totalText}>{star}</Text>
                    </View>
                </View>
            </View>
            <View style={{ width:'100%' }}>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <View 
            style={{
                marginTop:moderateScale(10),
                marginBottom:moderateScale(5)
            }}>
            <CustomButton btnPress={onPress} btnTitle={'view battle'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCard: {
        borderWidth: 0.8,
        width:moderateScale(300),
        padding:10,
        borderRadius:10,
        borderColor:colors.inputborderColor,  
    },
    imgStyle: {
        width: moderateScale(280),
        height:moderateScale(150),
        borderRadius: 5,
        resizeMode: 'contain',
        marginBottom:moderateScale(10)
    },
    subContiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop:moderateScale(5),
        marginBottom:moderateScale(10)
    },
    starLayout:{
        flexDirection:'row',
        alignItems:'center'
    },
    starContiner:{
        padding:8,
        borderWidth:0.5,
        borderRadius:8,
        marginRight:moderateScale(12),
        justifyContent:'center',
        alignItems:'center'
    },
    starText:{
        padding:8,
        borderWidth:0.5,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.buttonColor,
        textTransform:'uppercase'
    },
    totalText:{
        fontSize:14,
        fontWeight:'800',
        color:colors.backgroundScreenColor,
        textTransform:'uppercase'
    },
    singerName:{
        fontSize:14,
        fontWeight:'500',
        color:colors.buttonColor,
        marginBottom:4,
        opacity:0.5,
    },
    songName:{
        fontSize:16,
        fontWeight:'600',
        color:colors.blackColor,
        textTransform:'uppercase'     
    },
    descriptionText:{
        fontSize:12,
        fontWeight:'500',
        color:colors.buttonColor,
        marginBottom:4,
        opacity:0.7,
    }
})


export default HomeCards;