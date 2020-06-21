import React from 'react'
import { View, Text } from 'react-native';

const Card = (props) => {
    return (
        <View style={{ height: 200, margin: 10, backgroundColor: 'white', borderRadius: 20 }}>
            <View style={{flex:1,backgroundColor:'#ffc4a3',justifyContent:'center'}}>
            <Text style={{padding:20,fontSize:25}}>Date: <Text>{new Date(props.data.Date).toDateString()}</Text></Text>
            </View>
            <View style={{flex:1,backgroundColor:'#e79c2a',justifyContent:'center'}}>
            <Text style={{padding:20,fontSize:25}}>Confirmed:<Text>{props.data.Confirmed}</Text></Text>
            </View>
            <View style={{flex:1,backgroundColor:'#ff9a76',justifyContent:'center'}}>
            <Text style={{padding:20,fontSize:25}}>Active:<Text>{props.data.Active}</Text></Text>
            </View>
            <View style={{flex:1,backgroundColor:'#3ca59d',justifyContent:'center'}}>
            <Text style={{padding:20,fontSize:25}}>Recovered:<Text>{props.data.Recovered}</Text></Text>
            </View>
            <View style={{flex:1,backgroundColor:'#f96d80',justifyContent:'center'}}>
            <Text style={{padding:20,fontSize:25}}>Deaths:<Text>{props.data.Deaths}</Text> </Text>
            </View>
        </View>
    );
}

export default Card;