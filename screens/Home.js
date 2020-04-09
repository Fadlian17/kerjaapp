import React from 'react';
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper'

const Home = ({navigation})=>{
    const data = [
        {id:"1",name:"Alfa",email:"alfa@admin.com",salary:"Rp. 8.000.000",phone:"623412",position:"Developer",picture:"https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:"2",name:"Dimas",email:"dimasa@admin.com",salary:"Rp.2.000.000",phone:"623412",position:"Designer",picture:"https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:"3",name:"Jabriel",email:"jabrie@admin.com",salary:"Rp. 4.000.000",phone:"623412",position:"Scientist",picture:"https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:"4",name:"Daffa",email:"daffa@admin.com",salary:"Rp. 7.000.000",phone:"623412",position:"Engineering",picture:"https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},

    ]
    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard}

            onPress={()=>navigation.navigate("Profile",{item})}
            >
                <View style={styles.cardView}>
                <Image
                    style={{width:60,height:60,borderRadius:30}}
                    source={{uri:"https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
                
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
                keyExtractor={item=>item.id}
            />
           <FAB onPress={()=>navigation.navigate("Create")}
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
        position:'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    
})

export default Home