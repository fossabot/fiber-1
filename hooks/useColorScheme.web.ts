// useColorScheme from react-native does not support web currently. You can replace
// this with react-native-appearance if you would like theme support on web.
export default function useColorScheme (): 'light' {
  return 'light'
}

// TODO(fuxingloh): might not want to support web at all? Or we can do a plugin type support?
