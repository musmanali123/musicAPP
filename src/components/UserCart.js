import { Image, StyleSheet, View, Text, TouchableOpacity, } from "react-native"
import { StaticImages, colors } from "../utils/constant";
import { horizontalScale, moderateScale, windowWidth } from "../utils/Responser";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Divider } from "react-native-paper";



const UserCart = ({
    onclosed,
    editProfileGo
}) => {
    return (
        <View>
            <View style={styles.mainCard}>
                <Image source={StaticImages.userProfile} />
                <View style={{ marginLeft: moderateScale(20) }}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={styles.userName}>User Name</Text>
                    <TouchableOpacity 
                    onPress={onclosed}
                    style={{
                        position:'relative',
                        right:10,
                        bottom:10
                    }}
                    >
                   <AntDesign color={colors.blackColor} name="closecircle" size={18}/>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.profileStates}>
                        <View style={styles.subContinaer}>
                            <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', marginRight: moderateScale(10) }}>
                                <Text style={styles.text}>27</Text>
                                <Text style={styles.textTitle}>Vote</Text>
                            </View>
                            <View style={styles.verticalLine}></View>
                        </View>
                        <View style={[styles.subContinaer, { marginLeft: 10 }]}>
                            <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', marginRight: moderateScale(10), marginLeft: moderateScale(15) }}>
                                <Text style={styles.text}>47</Text>
                                <Text style={styles.textTitle}>Wins</Text>
                            </View>
                            <View style={styles.verticalLine}></View>
                        </View>
                        <View style={[styles.subContinaer, { marginLeft: 10 }]}>
                            <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', marginRight: moderateScale(10), marginLeft: moderateScale(15) }}>
                                <Text style={styles.text}>07</Text>
                                <Text style={styles.textTitle}>Loses</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionTaks}>
                    <View style={styles.iconText}>
                        <Image source={StaticImages.emailIcon} />
                        <Text style={styles.textLabel}>text@info.com</Text>
                    </View>
                    <AntDesign name="arrowright" size={25} color={colors.backgroundScreenColor} />
                </TouchableOpacity>
                <Divider style={styles.divider} />
                <TouchableOpacity style={styles.actionTaks} onPress={editProfileGo}>
                    <View style={styles.iconText}>
                        <Image source={StaticImages.editIcon} />
                        <Text style={styles.textLabel}>edit profile</Text>
                    </View>
                    <AntDesign name="arrowright" size={25} color={colors.backgroundScreenColor} />
                </TouchableOpacity>
                <Divider style={styles.divider} />
                <TouchableOpacity style={styles.actionTaks}>
                    <View style={styles.iconText}>
                        <Image source={StaticImages.logoutIcon} />
                        <Text style={[styles.textLabel,{left:moderateScale(5)}]}>logout</Text>
                    </View>
                    <AntDesign name="arrowright" size={25} color={colors.backgroundScreenColor} />
                </TouchableOpacity>
                <Divider style={styles.divider} />
                <TouchableOpacity style={styles.actionTaks}>
                    <View style={styles.iconText}>
                        <Image source={StaticImages.deleteIcon} />
                        <Text style={styles.textLabel}>delete Account</Text>
                    </View>
                    <AntDesign name="arrowright" size={25} color={colors.backgroundScreenColor} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCard: {
        flexDirection: 'row',
        marginHorizontal: horizontalScale(30),

    },
    userName: {
        fontSize: 20,
        fontWeight: '900',
        color: colors.blackColor,
        textTransform: 'uppercase',
        marginBottom: moderateScale(10)
    },
    profileStates: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    verticalLine: {
        height: 40,
        borderLeftWidth: 1,
        borderColor: colors.buttonColor,
        marginLeft: 10
    },
    subContinaer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
        color: colors.blackColor,
        marginBottom: moderateScale(1),
        marginLeft: moderateScale(5)
    },
    textTitle: {
        fontSize: 14,
        opacity: 0.5,
        color: colors.blackColor
    },
    actionsContainer: {
        marginTop: moderateScale(10),
        marginBottom: moderateScale(10),
        backgroundColor: 'rgba(49, 49, 49, 0.99)',
        width: windowWidth,
        padding: 20,
        paddingHorizontal: horizontalScale(30),
    },
    actionTaks: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textLabel: {
        fontSize: 16,
        marginLeft: '10%',
        fontWeight: '400',
        color: colors.backgroundScreenColor,
        textTransform: 'uppercase'
    },
    divider: {
        width: '100%',
        borderWidth: 0.1,
        opacity:0.5,
        color: colors.backgroundScreenColor,
        marginTop: moderateScale(15),
        marginBottom: moderateScale(15)

    }
})

export default UserCart;