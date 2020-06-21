import React, { useState, useEffect } from 'react'
import { View, Image, Text,FlatList } from 'react-native';
import Axios from 'axios';
import Card from './components/card';

const SecondScreen = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get('https://api.covid19api.com/total/dayone/country/india')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    },[]);
    const newdata = data.reverse();
    return (
        <View style={{ flex: 1 }} >

            <FlatList
                data={newdata}
                renderItem={({ item }) => <Card data={item} />}
            />

        </View>
    );
}

export default SecondScreen;