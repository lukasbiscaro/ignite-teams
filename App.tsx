import { StatusBar } from 'react-native';
import { Groups } from '@screens/Groups';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import Loading from '@components/Loading'
import NewGroup from '@screens/NewGroup';
import Players from '@screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent />
      {fontsLoaded ? <Players /> : <Loading />}
    </>
  );
}
