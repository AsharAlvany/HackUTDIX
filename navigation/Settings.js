import { Animated, Easing, TouchableOpacity, StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
    return (
        <View style={styles.bigContainer}>
            <SafeAreaView style={styles.safeAreaView}>
                <StatusBar style={"light-content"} />
                <View style={styles.settingsTextContainer}>
                    <Text adjustsFontSizeToFit style={styles.settingsText}>Settings</Text>
                </View>
                <View style={styles.settingTabsContainer}>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Profile</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Security</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Appearance</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Notification</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Support</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Linked Banks</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Limits</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Documents</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOption}>
                        <View style={styles.settingLabelContainer}>
                            <Text adjustsFontSizeToFit style={styles.settingLabel}>Other</Text>
                        </View>
                        <Icon name={"ios-arrow-forward-outline"} style={styles.rightArrow} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
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
        justifyContent: 'start',
        flexDirection: "column",
    },
    settingsTextContainer: {
        transform: [{ translateY: -1 }],
        width: "100%",
        flex: 1,
        marginVertical: "5%",
    },
    settingsText: {
        paddingHorizontal: "5%",
        textAlign: "left",
        color: "#FF403b",
        fontSize: "100%",
    },
    settingTabsContainer: {
        transform: [{ translateY: -1 }],
        flex: 15,
        flexDirection: "column",
        marginVertical: "5%",
        width: "90%",
        backgroundColor: "#18181A",
        borderRadius: "20%",
    },
    settingOption: {
        flexDirection: "row",
        flex: 1,
        // borderWidth: 3,
        // borderColor: "blue",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#0f0d10",
    },
    settingLabelContainer: {
        // borderWidth: 3,
        // borderColor: "pink",
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    settingLabel: {
        color: "white",
        fontSize: "20%",
    },
    rightArrow: {
        fontSize: "20%",
        color: "#FF403B"
    },
});
