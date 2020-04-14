import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee = ({navigation})=>{
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [salary,setSalary] = useState("")
    const [picture,setPicture] = useState("")
    const [position,setPosition] = useState("")
    const [modal,setModal] = useState(false)

    const submitData = () =>{
        //fetch dengan ngrok dependencies diganti setiap 7 jam
        fetch("http://20191539.ngrok.io/send-data",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                salary,
                picture,
                position
            })
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`${data.name} saved success`)
        })
    }

const pickFromGallery = async ()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        if(!data.cancelled){
            let newfile = { 
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}`

            }
            handleUpload(newfile)
        }
    }else{
        Alert.alert("you need to give a permission to work")
        navigation.navigate("Home")
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
        if(!data.cancelled){
            let newfile = {
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}`
        }
        handleUpload(newfile)
        }
    }else{
        Alert.alert("you need to give a permission to work")
    }
}

const handleUpload = (image)=>{
    const data = new FormData()
    data.append('file',image)
    data.append('upload_preset','kerjaApp')
    data.append("cloud_name","dte29rquo")

    fetch("https://api.cloudinary.com/v1_1/dte29rquo/image/upload",{
        method:"post",
        body:data
    }).then(res=>res.json()).
    then(data=>{
        setPicture(data.url)
    })
}


    return(

        <View>

            <TextInput
                    label='Name'
                    style={styles.inputStyle}
                    value={name}
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
            <TextInput
                    label='Position'
                    style={styles.inputStyle}
                    value={position}
                    theme={theme}
                    mode="outlined"
                    onChangeText={text => setPosition(text)}
            />

            <Button icon={picture==""?"upload":"upload"} mode="contained" style={styles.inputStyle} theme={theme} onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button icon="content-save" mode="contained" style={styles.inputStyle} theme={theme} onPress={()=>submitData()}>
                Saved
            </Button>

            {/* menampilkan modal menuju pilihan menu upload */}
            <Modal animationType="slide" transparent={true} visible={modal} onRequestClose={()=>{setModal(false)
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