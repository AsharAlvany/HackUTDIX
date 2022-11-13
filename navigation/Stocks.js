import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, Image,  Animated, Easing } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const RotateCwView = (props) => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const fadeValue = useRef(new Animated.Value(0.2)).current;

    React.useEffect(() => {
      Animated.loop(
        Animated.parallel([
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false
          }),
          Animated.sequence([
            Animated.timing(fadeValue, {
              toValue: 1,
              duration: 500,
              easing: Easing.linear,
              useNativeDriver: false
            }),
            Animated.timing(fadeValue, {
              toValue: 0.2,
              duration: 500,
              easing: Easing.linear,
              useNativeDriver: false
            }),
          ])
        ])
      ).start();
    }, [spinValue, fadeValue]);
  
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
  
    return (
      <Animated.View
        style={{
          ...props.style,
          transform:
            [
              { rotate: spin }
            ],
          opacity: fadeValue,
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

// const DATA = [
//     {
//         symbol: "AAPL",
//         fullName: "Apple Inc.",
//         atClose: 149.70,
//         diff: 2.83
//     },
//     {
//         symbol: "T",
//         fullName: "AT&T Inc.",
//         atClose: 149.70,
//         diff: 2.83
//     },
//     {
//         symbol: "AMD",
//         fullName: "Advanced Micro Devices.",
//         atClose: 149.70,
//         diff: -2.83
//     },
//     {
//         symbol: "NVDA.MX",
//         fullName: "NVIDIA Corporation",
//         atClose: 149.70,
//         diff: -2.83
//     }
// ];

const DATA = [
    "ATVI",
    "ADBE",
    "ADP",
    "ABNB",
    "ALGN",
    "GOOGL",
    "GOOG",
    "AMZN",
    "AMD",
    "AEP",
    "AMGN",
    "ADI",
    "ANSS",
    "AAPL",
    "AMAT",
]
const DATA2 = [
    "Activision Blizzard",
    "Adobe Inc.",
    "ADP",
    "Airbnb",
    "Align Technology",
    "Alphabet Inc. (Class A)",
    "Alphabet Inc. (Class C)",
    "Amazon",
    "AMD",
    "American Electric Power",
    "Amgen",
    "Analog Devices",
    "Ansys",
    "Apple Inc.",
    "Applied Materials",
]
export default class TestClass extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          dataReceived: false,
          stockData: [],
        };
      }
    async fetchData(symbol, name) {
        let fetchURL = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=cdo5doaad3i5o5ol5i00cdo5doaad3i5o5ol5i0g";
        let response = await fetch(fetchURL);
        let newData = await response.json();
        this.setState(prevState => ({
            stockData: [...prevState.stockData, {
                "symbol": symbol,
                "fullName": name,
                "atClose": newData.c,
                "diff": newData.d
            }]
        }))
      }
    App = (props) => {
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
        // useEffect(() => {
        //     let newData;
        //     let fetchURL = "https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=e1e90825a924fe8c6cc89cd125af9d05";
        //     fetch(fetchURL)
        //         .then((response) => {
        //             updateNasdaq(response.json())
        //             console.log(nasdaqData)
        //             updateNasdaqLoaded(true)
        //             for (let i = 0; i < 15; i++) {
        //                 fetchURL = "https://finnhub.io/api/v1/quote?symbol=" + nasdaqData[i]["symbol"] + "&token=cdo5doaad3i5o5ol5i00cdo5doaad3i5o5ol5i0g";
        //                 fetch(fetchURL)
        //                     .then((response) => {
        //                         newData = response.json();
        //                         console.log(newData)
        //                         this.setState(prevState => ({
        //                             stockData: [...prevState.stockData, {
        //                                 symbol: nasdaqData[i]["symbol"],
        //                                 fullName: nasdaqData[i]["name"],
        //                                 atClose: newData.c,
        //                                 diff: newData.d
        //                             }]
        //                         }))
        //                     })
        //             }
        //             updateStockDataLoaded(true)
                    
        //         })
        // }, []);
        useEffect(() =>{
            for (let i = 0; i < 15; i++) {
                this.fetchData(DATA[i], DATA2[i]);
            }
            this.setState({dataReceived : true})
        },[])
        if (this.state.dataReceived) {
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
                            data={this.state.stockData}
                            renderItem={renderItem}
                            keyExtractor={item => item.symbol}
                        />
                    </SafeAreaView>
                </View>
            );
        }
        else {
            return (
                <View style={styles.bigContainer}>
                    <SafeAreaView style={styles.safeAreaView}>
                        <StatusBar style={"light-content"} />
                        <View style={styles.stocksContainer2}>
                            <Text adjustsFontSizeToFit style={styles.stocksText}>
                                Stocks
                            </Text>
                        </View>
                        <View style={styles.searchContainer2}>
                            <Icon adjustsFontSizeToFit name={"md-search"} color={"#FFFFFF"} style={styles.imNotSure} size={"15%"} />
                            <TextInput keyboardAppearance={"dark"} style={styles.textInput} placeholder={"Search"} placeholderTextColor={"#B4B4B4"} />
                        </View>
                        <View style={styles.stockList2}>
                            <RotateCwView style={styles.spinnerContainer}>
                                <Icon
                                name={"ios-refresh-outline"}
                                color={"#FF403b"}
                                size={60}
                                />
                            </RotateCwView>
                        </View>
                    </SafeAreaView>
                </View>
            );
        }
    }
    render(){
        return(
            <this.App/>
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
        justifyContent: 'start',
        flexDirection: "column",
    },
    stocksContainer: {
        transform: [{ translateY: -1 }],
        width: "100%",
        flex: 0.9,
        marginVertical: "5%",
        // borderWidth: 3,
        // borderColor: "blue",
    },
    stocksContainer2: {
        transform: [{ translateY: -1 }],
        width: "100%",
        flex: 0.97,
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
    searchContainer2: {
        transform: [{translateY: -16}],
        marginBottom: "5%",
        backgroundColor: "#2d2d30",
        marginHorizontal: "5%",
        width: "90%",
        borderRadius: "20%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 0.6,
    },
    stockList: {
        transform: [{ translateY: -1 }],
        marginTop: "5%",
        height: "80%",
        backgroundColor: "#18181A",
        width: "100%"
    },
    stockList2: {
        flex: 14.25,
        // transform: [{ scaleX: 10 }],
        // marginTop: "5%",
        backgroundColor: "#18181A",
        width: "100%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center"
    },
    spinnerContainer: {
        height: "20%",
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    spinner: {
        size: 40,
        // borderColor: "blue",
        // borderWidth: 5,
        // height: "100%",
        // width: "100%",
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
    neg: {
        color: "red",
        fontSize: "15%"
    }
});
