import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen/GalleryScreen';
import PhotoScreen from '../screens/PhotoScreen/PhotoScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{ title: 'Gallery' }}
      />
      <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
