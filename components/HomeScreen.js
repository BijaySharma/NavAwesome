import React from 'react';
import {View, Text, Button} from 'react-native';

function Sepreator(){
    return (
        <View style={{margin:10}}></View>
    );
}

function HomeScreen({navigation}){
    return(
        <View style={{flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize : 35, color: 'red'}}>Home Screen</Text>

            <Sepreator />
            
            <Button title="Details" onPress={()=> navigation.navigate("Details")} />
        </View>
    );
}

export default HomeScreen;