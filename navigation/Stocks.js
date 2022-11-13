import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const DATA = [
    {
        symbol: "AAPL",
        fullName: "Apple Inc.",
        atClose: 149.70,
        diff: 2.83
    },
    {
        symbol: "T",
        fullName: "AT&T Inc.",
        atClose: 149.70,
        diff: 2.83
    },
    {
        symbol: "AMD",
        fullName: "Advanced Micro Devices.",
        atClose: 149.70,
        diff: -2.83
    },
    {
        symbol: "NVDA.MX",
        fullName: "NVIDIA Corporation",
        atClose: 149.70,
        diff: -2.83
    }
];

export default function App(props) {
    const renderItem = ({ item }) => (
        <View style={styles.individualStockContainer}>
            <View style={styles.companyName}>
                <View style={styles.companySymbolContainer}>
                    <Text style={styles.entryText} numberOfLines={1}>{item.symbol}</Text>
                </View>
                <View style={styles.companyNameContainer}>
                    <Text style={[styles.entryText2]} numberOfLines={1} ellipsizeMode={"tail"}>{item.fullName}</Text>
                </View>
            </View>
            <View style={styles.stockInfo}>
                <View style={styles.stockClosingContainer}>
                    <Text style={styles.entryText} numberOfLines={1} ellipsizeMode={"tail"}>{item.atClose}</Text>
                </View>
                {
                    (item.diff > 0) ? 
                    (<View style={styles.stockDifferenceContainer}>
                        <Text style={styles.pos} numberOfLines={1} ellipsizeMode={"tail"}>{item.diff > 0 ? ("+" + item.diff.toString()) : item.diff}</Text>
                    </View>) :
                    (<View style={styles.stockDifferenceContainer}>
                        <Text style={styles.neg} numberOfLines={1} ellipsizeMode={"tail"}>{item.diff > 0 ? ("+" + item.diff.toString()) : item.diff}</Text>
                    </View>)
                }
            </View>
        </View>
    );
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
                <FlatList style={styles.stockList}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

// export default class StockScreen extends React.Component {
//     render(){
//         return(
//             <Header/>
//         )
//     }
// }

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
        position: "absolute",
        top: "13.5%",
        height: "3.5%",
        marginVertical: "5%",
        backgroundColor: "#2d2d30",
        marginHorizontal: "5%",
        width: "90%",
        borderRadius: "20%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    stockList: {
        transform: [{ translateY: -1 }],
        marginTop: "5%",
        height: "80%",
        backgroundColor: "#18181A",
        width: "100%"
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
    individualStockContainer: {
        paddingHorizontal: "5%",
        height: 80,
        borderBottomColor: "#7C7575",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    companyName: {
        height: "100%",
        // borderWidth: 1,
        // borderColor: "red",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: "6%",
        maxWidth: "35%",
        color: "white"
    },
    entryText: {
        color: "white",
        fontSize: "15%"
    },
    entryText2: {
        color: "#B4B4B4",
        fontSize: "12%"
    },
    stockInfo: {
        height: "100%",
        // borderWidth: 1,
        // borderColor: "red",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        // paddingVertical: "%",
        maxWidth: "35%",
        color: "white"
    },
    pos: {
        color: "green",
        fontSize: "15%"
    },
    neg:{
        color: "red",
        fontSize: "15%"
    }
});
