import React from 'react';
import {View, Text, Button} from 'react-native';

function Sepreator(){
    return (
        <View style={{margin:10}}></View>
    );
}

function HomeScreen({navigation}){

    // we will pass this data as route params for Details Screen
    // if this data is not passed then initial Parameters will passed -- Look at App.js
    const data = {
        name : "Bijay Sharma"
    }

    return(
        <View style={{flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize : 35, color: 'red'}}>Home Screen</Text>

            <Sepreator />
            
            <Button title="Details" onPress={()=> navigation.navigate("Details", data)} />
        </View>
    );
}

export default HomeScreen;