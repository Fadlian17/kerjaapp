import React,{useEffect,useState,useContext} from 'react';
import { StyleSheet, Text, View,Image,FlatList, Alert} from 'react-native';
import {Card,FAB} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import {Mycontext} from '../App'

const Home = ({navigation})=>{
    // const [data,setData] = useState([])
    // const [loading,setLoading]= useState(true)
    // const dispatch = useDispatch()
    // const {data,loading} = useSelector((state)=>{
    //     return state
    // })
    const {state,dispatch} = useContext(Mycontext)
    const {data,loading} = state
    
    console.log(data,loading)

    const fetchData = ()=>{
        //fetch dengan ngrok dependencies
        fetch("http://1b9cb498.ngrok.io")
        .then(res=>res.json())
        .then(results=>{

            // setData(results)
            // setLoading(false)
            dispatch({type:"ADD_DATA",payload:results})
            dispatch({type:"SET_LOADING",payload:false})
        
        }).catch(err=>{
            Alert.alert("something went wrong")
        })
    }


    useEffect(()=>{
        fetchData()
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
            <FlatList
                data={data} 
                renderItem={({item})=>{
                return renderList(item)
                }}
                keyExtractor={item=>item._id}
                onRefresh={()=>fetchData()}
                refreshing={loading}
            />
            
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