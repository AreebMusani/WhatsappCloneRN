import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function ChatScreen() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, borderBottomWidth: StyleSheet.hairlineWidth,borderColor: 'grey', paddingBottom: 10, marginVertical: 5}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'grey'}}></View>
              <View style={{flexGrow: 1, paddingHorizontal: 5}}>
                <Text style={{fontWeight: 'bold'}}>Areeb Musani</Text>
                <Text>Hey Bro, What's up?</Text>
              </View>
              <Text>06/07/2021</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, borderBottomWidth: StyleSheet.hairlineWidth,borderColor: 'grey', paddingBottom: 10, marginVertical: 5}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'grey'}}></View>
              <View style={{flexGrow: 1, paddingHorizontal: 5}}>
                <Text style={{fontWeight: 'bold'}}>Areeb Musani</Text>
                <Text>Hey Bro, What's up?</Text>
              </View>
              <Text>06/07/2021</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, borderBottomWidth: StyleSheet.hairlineWidth,borderColor: 'grey', paddingBottom: 10, marginVertical: 5}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'grey'}}></View>
              <View style={{flexGrow: 1, paddingHorizontal: 5}}>
                <Text style={{fontWeight: 'bold'}}>Areeb Musani</Text>
                <Text>Hey Bro, What's up?</Text>
              </View>
              <Text>06/07/2021</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, borderBottomWidth: StyleSheet.hairlineWidth,borderColor: 'grey', paddingBottom: 10, marginVertical: 5}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'grey'}}></View>
              <View style={{flexGrow: 1, paddingHorizontal: 5}}>
                <Text style={{fontWeight: 'bold'}}>Areeb Musani</Text>
                <Text>Hey Bro, What's up?</Text>
              </View>
              <Text>06/07/2021</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });

export default ChatScreen
