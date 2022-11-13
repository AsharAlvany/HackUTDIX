import * as React from "react";
import { StatusBar, StyleSheet, Text, View, Image} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Stocks from "./navigation/Stocks";
import Portfolio from "./navigation/Portfolio";
import Settings from "./navigation/Settings";
import { SafeAreaView } from "react-navigation";

const stocksName = "Stocks";
const portfolioName = "Home";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
          }, 1500);
    });
    if(!loaded){
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
                    <Tab.Screen options={{ headerShown: false }} name={settingsName} component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
    else{
        return (
            <View style={styles.bigContainer}>
                <SafeAreaView style={styles.safeAreaView}>
                    <StatusBar style={"light-content"}/>
                    <View style={styles.imageContainer}>
                        <Image
                        style={styles.logo}
                        source={require("./assets/logo.png")}
                        />
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: '#0f0d10',
        // borderColor: "yellow",
        // borderWidth: 3,
    },
    safeAreaView: {
        // borderColor: "blue",
        // borderWidth: 3,
        flex: 1,
        alignItems: 'center',
        backgroundColor: "transparent",
        justifyContent: 'center',
        flexDirection: "column",
    },
    bottomTab: {
        backgroundColor: '#7C7575',
    },
    imageContainer: {
        width: "60%",
        height: "50%",
    },
    logo: {
        resizeMode: "contain",
        // borderColor: "blue",
        // borderWidth: 5,
        height: "100%",
        width: "100%",
    },
});
