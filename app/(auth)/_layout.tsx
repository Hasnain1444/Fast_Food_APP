
import { View, Text , SafeAreaView} from 'react-native'

import {Slot} from "expo-router"

export default function _layout() {
  return (
    <SafeAreaView>
        <Text>Auth Layout</Text>
        <Slot/>
    </SafeAreaView>
  )
}