import React from 'react';
import {View, Text, Button} from 'react-native';

function Sepreator(){
    return (
        <View style={{margin:10}}></View>
    );
}

function DetailScreen({navigation}){


    return(
        <View style={{flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize : 35, color: 'red'}}>Detail Screen</Text>
            <Sepreator />

            <Button
                title="Go to details screen again"
                onPress={() => navigation.push("Details")}
            />

            <Sepreator />
            
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />

            <Sepreator />

            <Button
                title="Go Back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

export default DetailScreen;