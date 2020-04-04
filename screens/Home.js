import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card} from 'react-native-paper'

function Home(){
    const data = [
        {id:1,name:"Indra",position:"developer"},
        {id:1,name:"Dimas",position:"designer"},
        {id:1,name:"Jabriel",position:"Scientist"},
        {id:1,name:"Daffa",position:"Engineering"},
    ]
    const renderList = data.map((item)=>{
        return(
            <Card style={styles.myCard} key={item.id}>
                <View style={styles.cardView}>
                <Image
                    styles={{width:60,height:60,borderRadius:30}}
                source={{uri:"https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"}}
                
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
            {renderList}
        </View>
    )
}

const StyleSheet = StyleSheet.create({
    myCard:{
        margin:5,
    },
    cardView:{
        flexDirection:"row"
    },
    text:{
        fontSize:18,
    }
})

export default Home