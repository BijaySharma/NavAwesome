import React from 'react';
import { View, Text, Button } from 'react-native';

//custom components
import Sepreator from './SepreatorComponent';


function ProfileScreen({navigation, route}){
    return(
        <View style={{flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize : 35, color: 'red'}}>Profile Screen</Text>
            <Sepreator />
            <Button title="Update Screen Title" onPress={()=> navigation.setOptions({title: 'Updated Title'})} />
        </View>  
    );
}

export default ProfileScreen;