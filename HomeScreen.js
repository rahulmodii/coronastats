import React from 'react'
import { View, Image, Text } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 2, margin: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={{ height: 250, width: 300 }} />
            </View>
            <View style={{ flex: 4, margin: 20, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>
                    MDH Uncle Still alive
          </Text>
            </View>
        </View>
    );
}

export default HomeScreen;