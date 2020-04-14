import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,ActivityIndicator} from 'react-native';
import {Card,FAB} from 'react-native-paper'

const Home = ({navigation})=>{
    const [data,setData] = useState([])
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
        //fetch dengan ngrok dependencies
        fetch("http://20191539.ngrok.io")
        .then(res=>res.json())
        .then(results=>{
            console.log(results)
            setData(results)
            setLoading(false)
        }) 
    },[])
    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard}

            onPress={()=>navigation.navigate("Profile",{item})}
            >
                <View style={styles.cardView}>
                <Image
                    style={{width:60,height:60,borderRadius:30}}
                    source={{uri:item.picture}}
                
                />    
                    <View style={{marginLeft:10},{flex:1}}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.position}</Text>
                    </View>    
                 </View>
            </Card>
        )
    })
    return(
        <View style={{flex:1}}>
            {loading?
            <ActivityIndicator size="large" color="#0000ff"/>
            :
            <FlatList
                data={data}
                renderItem={({item})=>{
                return renderList(item)
                }}
                keyExtractor={item=>item._id}
            />
            }
            
           <FAB onPress={()=>navigation.navigate("Create")}
            style={styles.fab}
            small
            icon="plus"
            theme={{colors:{accent:"#006aff"}}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    myCard:{
        margin:7,
    },
    cardView:{
        flexDirection:"row",
        padding:6
    },
    text:{
        fontSize:18,
        marginLeft:10
    },
    fab: {
        position:'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    
})

export default Home