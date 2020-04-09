import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal,Alert } from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee = ()=>{
    const [Name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [salary,setSalary] = useState("")
    const [picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)

const pickFromGallery = async ()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        console.log(data)
    }else{
        Alert.alert("you need to give a permission to work")
    }
}

const pickFromCamera = async ()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
        let data = await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        console.log(data)
    }else{
        Alert.alert("you need to give a permission to work")
    }
}


    return(
        <View style={styles.root}>
            <TextInput
                    label='Name'
                    style={styles.inputStyle}
                    value={Name}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setName(text)}
            />
            <TextInput
                    label='Email'
                    style={styles.inputStyle}
                    value={email}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setEmail(text)}
            />
            <TextInput
                    label='Phone'
                    style={styles.inputStyle}
                    value={phone}
                    theme={theme}
                    keyboardType="number-pad"
                    mode="outlined"
                    onChangeText={text => setPhone(text)}
            />
            <TextInput
                    label='Salary'
                    style={styles.inputStyle}
                    value={salary}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setSalary(text)}
            />

            <Button icon="upload" mode="contained" style={styles.inputStyle} theme={theme} onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button icon="content-save" mode="contained" style={styles.inputStyle} theme={theme} onPress={() => console.log("saved")}>
                Saved
            </Button>

            <Modal animationType="slide" transparent={false} visible={modal} onRequestClose={()=>{setModal(false)
            }}>
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                            <Button icon="camera" mode="contained" theme={theme} onPress={() => pickFromCamera()}>
                                Camera
                            </Button>
                            <Button icon="image-area" mode="contained" theme={theme} onPress={() => pickFromGallery()}>
                              Gallery
                            </Button>
                    </View>
                    <Button icon="close" theme={theme} onPress={() => setModal(false)}>
                        cancel
                    </Button>
                </View>
            </Modal>
        </View>

    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%"
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }
})

export default CreateEmployee