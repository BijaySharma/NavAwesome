import React from 'react';
import {View, Text, Button} from 'react-native';

//custom Components
import Sepreator from './SepreatorComponent';


function DetailScreen({route, navigation}){

    
    return(
        <View style={{flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize : 35, color: 'red'}}>Detail Screen</Text>
            <Sepreator />

            <Text style={{fontSize: 20}}>Name : {route.params.name}</Text>
             
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