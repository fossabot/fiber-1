import * as React from 'react'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import tailwind from 'tailwind-rn'
import IconDFI from '../components/icons/IconDFI'
import { translate } from '../translations'
import { Button } from 'react-native'

export default function TabOneScreen (): JSX.Element {
  const [count, setCount] = React.useState(0)

  return (
    <View style={tailwind('flex-1 items-center justify-center')}>
      <IconDFI />
      <Button title='Click' onPress={() => setCount(count + 2)} />
      <Text testID='count'>
        Count: {count}
      </Text>
      <Text style={tailwind('text-xl font-bold')}>
        {translate('screens/TabOneScreen', 'Tab One TEST')}
      </Text>
      <View style={tailwind('w-4/5 h-px my-8')} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </View>
  )
}
