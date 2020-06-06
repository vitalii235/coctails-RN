import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import FilterScreen from '../screens/FilterScreen';

const Stack = createStackNavigator();

export const AppNavigation = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerStyle: {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.43,
                        shadowRadius: 9.51,
                        elevation: 15,
                    }
                }
            }>
            <Stack.Screen
                name="Home"
                component={MainScreen}
                options={({ navigation, route }) => ({
                    headerTitle: 'Drinks',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                })}
            />
            <Stack.Screen name="Filters" component={FilterScreen}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
        </Stack.Navigator>
    )
}