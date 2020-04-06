import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,Linking,Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title,Card,Button } from 'react-native-paper'
import {MaterialIcons,Entypo} from '@expo/vector-icons'

const Profile = ()=>{

    const openDial=()=>{
        if(Platform.OS === "android"){
            Linking.openURL("tel:623412")
        }else{
            Linking.openURL("telprompt:623412")
        }

    }

    return(
        <View style={styles.root}>
            <LinearGradient
            colors={["#0033ff","#6bc1ff"]}
            style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
            <Image
                style={{width:100,height:100,borderRadius:150,marginTop:-50}}
                source={{uri:"https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1002&q=80"}}

            />
            </View>
            
            <View style={{alignItems:"center",margin:15}}>
                <Title>Alfansyah</Title>
                <Title style={{fontSize:15}}>UIUX Designer</Title>
            </View>
            <Card style={styles.mycard} onPress={()=>{Linking.openURL("mailto:alfa@admin.com")}}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>alfa@admin.com</Text> />
                </View>
            </Card>
            <Card style={styles.mycard} onPress={()=>openDial()}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>623412</Text> />
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.mytext}>Rp. 8.000.000</Text> />
                </View>
            </Card>

            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Button icon="account-edit" mode="contained" theme={theme} onPress={() =>console.log('Pressed')}>
                    Update Data
                </Button>
                <Button icon="delete" mode="contained" theme={theme} onPress={() =>console.log('Pressed')}>
                    Fire Employee
                </Button>
            </View>
        </View>
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile