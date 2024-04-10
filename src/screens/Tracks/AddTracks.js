import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, StatusBar, View, ScrollView, TouchableOpacity } from "react-native"
import { colors } from "../../utils/constant";
import { horizontalScale, moderateScale, windowHeight } from "../../utils/Responser";
import MainHeader from "../../headers/mainHeader";
import { SelectList } from 'react-native-dropdown-select-list'
import CustomInput from "../../components/Inputs/CustomInput";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from "../../components/Buttons/CustomButton";
import { data } from "../../modal/DummyData";


const AddTrackScreen = () => {
    const [selected, setSelected] = React.useState("");
    const [selectArtist, setSelectArtist] = React.useState(false);
 
    const handleFirstArtist = () => {
        return (
            <View >
                <View style={trackStyle.inputFiled}>
                    <Text style={trackStyle.inputText}>First name: </Text>
                    <CustomInput
                        inputTextClr={colors.blackColor}
                        placeholder={"WRITE HERE.."}
                    />
                </View>
                <View style={trackStyle.inputFiled}>
                    <Text style={trackStyle.inputText}>
                        last name:
                    </Text>
                    <CustomInput
                        inputTextClr={colors.blackColor}
                        placeholder={"WRITE HERE.."}
                    />
                </View>
                <View>
                <Text style={trackStyle.inputText}>
                       track upload:
                    </Text>
                    <View style={trackStyle.uplaodFileContainer}>
                        <Ionicons
                        style={{marginBottom:moderateScale(20)}}
                            size={50}
                            color={colors.buttonColor}
                            name="musical-note-sharp" />
                        <Text  style={trackStyle.uplaodContinerText1}>no songs uploaded yet</Text>
                        <Text  style={trackStyle.uplaodContinerText2}>Songs that you uploaded may still be processing</Text>
                        <CustomButton
                            btnTitle={"select File"}
                            customWidth={180}
                        />
                    </View>
                </View>

            </View>
        )
    }

    const handleSecnodArtist = () => {
        return (
            <View >
                <View style={trackStyle.inputFiled}>
                    <Text style={trackStyle.inputText}>First name: </Text>
                    <CustomInput
                        inputTextClr={colors.blackColor}
                        placeholder={"WRITE HERE.."}
                    />
                </View>
                <View style={trackStyle.inputFiled}>
                    <Text style={trackStyle.inputText}>
                        last name:
                    </Text>
                    <CustomInput
                        inputTextClr={colors.blackColor}
                        placeholder={"WRITE HERE.."}
                    />
                </View>
                <View>
                <Text style={trackStyle.inputText}>
                track upload:
                    </Text>
                    <View style={trackStyle.uplaodFileContainer}>
                        <Ionicons
                        style={{marginBottom:moderateScale(20)}}
                            size={50}
                            color={colors.buttonColor}
                            name="musical-note-sharp" />
                        <Text  style={trackStyle.uplaodContinerText1}>no songs uploaded yet</Text>
                        <Text  style={trackStyle.uplaodContinerText2}>Songs that you uploaded may still be processing</Text>
                        <CustomButton
                            btnTitle={"select File"}
                            customWidth={180}
                        />
                    </View>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <StatusBar backgroundColor={colors.backgroundScreenColor} barStyle={'dark-content'} />
            <ScrollView
                contentContainerStyle={{ paddingBottom: '50%' }}
                showsVerticalScrollIndicator={false}
                style={trackStyle.scrollStyle}>
                <View style={trackStyle.header}>
                    <MainHeader title={"Create Battle"} />
                </View>
                <View style={trackStyle.margins}>
                    <SelectList
                    setSelected={(val)=>{setSelected(val)}}
                        data={data}
                        inputStyles={{
                            color:colors.blackColor,
                        }}
                        save={selected}
                        placeholder="Select Participants"
                        search={false}
                        boxStyles={trackStyle.dropDownStyle}
                        dropdownTextStyles={{
                            color:colors.blackColor,
                        }}

                    />
                </View>

                <View>
                    <View style={trackStyle.mainArtistConstiner}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectArtist(false)
                            }}
                            style={[trackStyle.textContainer, { backgroundColor: !selectArtist ? colors.blackColor : null }]}>
                            <Text style={[trackStyle.continerText, { color: !selectArtist ? colors.backgroundScreenColor : colors.fileTextColor }]}>{'1ST ARTIST'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectArtist(true)
                            }}
                            style={[trackStyle.textContainer, { backgroundColor: selectArtist ? colors.blackColor : null }]}>
                            <Text style={[trackStyle.continerText, { color: selectArtist ? colors.backgroundScreenColor : colors.fileTextColor }]}>{'2ND ARTIST'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={trackStyle.margins}>
                        {!selectArtist ?
                            handleFirstArtist() :
                            handleSecnodArtist()

                        }
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const trackStyle = StyleSheet.create({
    scrollStyle: {
        marginHorizontal: horizontalScale(30),
        flex: 1,
        backgroundColor: colors.backgroundScreenColor
    },
    header: {
        marginTop: moderateScale(30),
        marginBottom: moderateScale(20)
    },
    dropDownStyle: {
        backgroundColor: colors.inputborderColor,
        borderWidth: 1,
        borderColor: colors.inputborderColor,
        color:colors.blackColor
    },
    margins: {
        marginTop: moderateScale(20),
        marginBottom: moderateScale(20)
    },
    mainArtistConstiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        padding: 15,
        width: '100%',
        paddingHorizontal: moderateScale(30),
        borderRadius: 22,
        borderColor: colors.inputborderColor,
        backgroundColor: colors.inputborderColor
    },
    textContainer: {
        borderWidth: 0.1,
        borderColor: colors.inputborderColor,
        width: '48%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    continerText: {
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    inputFiled: {
        marginBottom: moderateScale(20),
        width: '100%'
    },
    inputText: {
        fontSize: 16,
        color: colors.blackColor,
        textTransform: 'uppercase',
        fontWeight: '400',
        marginBottom: moderateScale(10)
    },
    uplaodFileContainer:{
        width:'100%',
        height:'60%',
        flexDirection:'column',
        borderWidth:1,
        borderStyle:'dashed',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.fileUploadColor,
        borderRadius:10
    },
    uplaodContinerText1:{
        fontSize:14,
        color:colors.blackColor,
        fontWeight:'800',
        marginBottom:moderateScale(10),
        textTransform:'uppercase'
    },
    uplaodContinerText2:{
        fontSize:14,
        width:'70%',
        textAlign:'center',
        color:colors.blackColor,
        fontWeight:'400',
        marginBottom:moderateScale(10)
    },
})

export default AddTrackScreen;