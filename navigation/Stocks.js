import { StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


export default function App() {
    return (
        <View style={styles.bigContainer}>
            <SafeAreaView style={styles.safeAreaView}>
                <StatusBar style={"light-content"} />
                <View style={styles.stocksContainer}>
                    <Text adjustsFontSizeToFit style={styles.stocksText}>
                        Stocks
                    </Text>
                </View>
                <View style={styles.searchContainer}>
                    <Icon adjustsFontSizeToFit name={"md-search"} color={"#FFFFFF"} style={styles.imNotSure} size={"15%"} />
                    <TextInput keyboardAppearance={"dark"} style={styles.textInput} placeholder={"Search"} placeholderTextColor={"#B4B4B4"} />
                </View>
                <View style={styles.stockList}>

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
    stocksContainer: {
        transform: [{ translateY: -1 }],
        width: "100%",
        flex: 1,
        marginVertical: "5%",
        // borderWidth: 3,
        // borderColor: "blue",
    },
    stocksText: {
        paddingHorizontal: "5%",
        textAlign: "left",
        color: "#FF403b",
        fontSize: "100%",
    },
    searchContainer: {
        marginVertical: "5%",
        backgroundColor: "#2d2d30",
        marginHorizontal: "5%",
        flex: 0.75,
        width: "90%",
        borderRadius: "20%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    stockList: {
        flex: 14.25,
    },
    imNotSure: {
        marginLeft: "5%",
        flex: 1,

    },
    textInput: {
        // borderWidth: 1,
        // borderColor: "blue",
        flex: 13,
        color: "white"
    },
});
