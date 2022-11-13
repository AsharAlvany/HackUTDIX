import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useRef } from "react";

export default function App() {
    let [money, setMoney] = useState(0.00);
    return (
        <View style={styles.bigContainer}>
            <SafeAreaView style={styles.safeAreaView}>
                <StatusBar style={"light-content"} />
                <View style={styles.portfolioTextContainer}>
                    <Text adjustsFontSizeToFit style={styles.portfolioText}>Portfolio</Text>
                </View>
                <View style={styles.moneyHandlingContainer}>
                    <View style={styles.netBalanceContainer}>
                        <Text adjustsFontSizeToFit style={styles.netBalance}>
                            Net Balance
                        </Text>
                    </View>
                    <View style={styles.moneyContainer}>
                        <Text adjustsFontSizeToFit style={styles.money}>
                            ${parseFloat(money).toFixed(2)}
                        </Text>
                    </View>
                    <View style={styles.moneyManipContainer}>
                        <View style={styles.addFundsContainer}>
                            <Text adjustsFontSizeToFit style={styles.addFunds}>
                                Add Funds
                            </Text>
                        </View>
                        <View style={styles.transferFundsContainer}>
                            <Text adjustsFontSizeToFit style={styles.transferFunds}>
                                Transfer Funds
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mainGraph}>

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
    portfolioTextContainer: {
        marginVertical: "5%",
        flex: 0.4,
        // borderWidth: 3,
        // borderColor: "red",
        backgroundColor: 'transparent',
        width: "100%",
    },
    portfolioText: {
        paddingHorizontal: "5%",
        // borderWidth: 3,
        // borderColor: "blue",
        textAlign: "left",
        color: "#FF403B",
        fontSize: "100%",
    },
    moneyHandlingContainer: {
        marginVertical: "5%",
        backgroundColor: "#18181A",
        flexDirection: "column",
        width: "90%",
        flex: 2,
        // borderWidth: 3,
        // borderColor: "purple",
        borderRadius: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    mainGraph: {
        marginTop: "5%",
        width: "100%",
        backgroundColor: "#18181A",
        flex: 4,
        // borderWidth: 3,
        // borderColor: "pink",
    },
    netBalanceContainer: {
        // borderWidth: 3,
        // borderColor: "pink",
        flex: 0.75,
        width: "90%",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    netBalance: {
        fontSize: "15%",
        color: "white",
        // borderWidth: 1,
        // borderColor: "blue",
        textAlign: "center",
    },
    moneyContainer: {
        // borderWidth: 3,
        // borderColor: "pink",
        flex: 1,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    money: {
        color: "white",
        fontSize: "100%",
    },
    moneyManipContainer: {
        flex: 1,
        // borderWidth: 3,
        // borderColor: "pink",
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",

    },
    addFundsContainer: {
        backgroundColor: "#2d2d30",
        marginLeft: "5%",
        marginRight: "2.5%",
        flex: 1,
        // borderWidth: 1,
        // borderColor: "blue",
        padding: 10,
        borderRadius: "20%",
    },
    addFunds: {
        width: "100%",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    transferFundsContainer: {
        backgroundColor: "#2d2d30",
        marginLeft: "2.5%",
        marginRight: "5%",
        flex: 1,
        // borderWidth: 1,
        // borderColor: "blue",
        padding: 10,
        borderRadius: "20%",
    },
    transferFunds: {
        width: "100%",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"

    },
});
