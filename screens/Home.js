import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper'

const Home = (props)=>{
    const data = [
        {id:1,name:"Indra",position:"Developer"},
        {id:2,name:"Dimas",position:"Designer"},
        {id:3,name:"Jabriel",position:"Scientist"},
        {id:4,name:"Daffa",position:"Engineering"},
        {id:5,name:"Putu",position:"Designer"},
        {id:6,name:"Arya",position:"Developer"},
        {id:7,name:"Jaka",position:"Scientist"},
        {id:8,name:"Dhika",position:"Scientist"},
        {id:9,name:"Jaka",position:"Scientist"},
        {id:10,name:"Dhika",position:"Scientist"},
        {id:11,name:"Jaka",position:"Scientist"},
        {id:12,name:"Dhika",position:"Scientist"},
    ]
    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard}>
                <View style={styles.cardView}>
                <Image
                    style={{width:60,height:60,borderRadius:30}}
                    source={{uri:"https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
                
                />    
                    <View style={{marginLeft:10}}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.position}</Text>
                    </View>    
                 </View>
            </Card>
        )
    })
    return(
        <View>
            <FlatList
                data={data}
                renderItem={({item})=>{
                return renderList(item)
                }}
                keyExtractor={item=>`${item.id}`}
            />
           <FAB onPress={()=>props.navigation.navigate("Create")}
            style={styles.fab}
            small
            icon="plus"
            theme={{colors:{accent:"#006aff"}}}
        />
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
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    
})

export default Home