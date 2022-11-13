import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Activity from "./navigation/Activity";
import Stocks from "./navigation/Stocks";
import Portfolio from "./navigation/Portfolio";
import Settings from "./navigation/Settings";

const activityName = "Activity";
const stocksName = "Stocks";
const portfolioName = "Home";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName={portfolioName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === portfolioName) {
                            iconName = focused ? 'document' : 'document-outline';
                        } else if (rn === activityName) {
                            iconName = focused ? 'ios-time' : 'ios-time-outline';
                        }
                        else if (rn === stocksName) {
                            iconName = focused ? 'md-trending-up' : 'ios-trending-up-outline';
                        }
                        else if (rn === settingsName) {
                            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                        }

                        return <Icon name={iconName} size={size} color={color} />

                    },
                    tabBarActiveTintColor: "#FF403b",
                    tabBarInactiveTintColor: "#B4B4B4",
                    tabBarStyle: {
                        backgroundColor: "#0F0D10",
                        height: "11%",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.0,
                        borderTopWidth: 0,
                    },
                })}
            >

                <Tab.Screen styles={styles.bottomTab} options={{ headerShown: false }} name={portfolioName} component={Portfolio} />
                <Tab.Screen options={{ headerShown: false }} name={stocksName} component={Stocks} />
                <Tab.Screen options={{ headerShown: false }} name={activityName} component={Activity} />
                <Tab.Screen options={{ headerShown: false }} name={settingsName} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    bottomTab: {
        backgroundColor: '#7C7575',
    },
});
