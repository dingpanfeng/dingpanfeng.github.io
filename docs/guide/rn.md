## React Native简介
**一次学习，随处编写**,React Native (简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，是Facebook早先开源的JS框架 React 在原生移动应用平台的衍生产物，目前支持iOS和Android两个平台。RN使用Javascript语言，RN 在 WebView 的方案上更进一步，借助 App 内置 Javascrpit 引擎，将 JavaScript 和 Native 进行桥接，直接通过 JavaScript 来调取 Native 的相关组件，在性能上比 WebView 要更胜一筹。

### 优点
* 一次编写，随处运行，可以在多个平台上运行的代码类型。因此，你只需构建一次多平台 App 即可
* React Native 开发的应用支持热更新，因为 React Native 的产物是 bundle 文件，其实本质上就是 JS 代码，在 App 启动的时候就会去服务器上获取 bundle 文件，我们只需要更新 bundle 文件。
* 节约成本，降低应用开发的时间消耗。因为相同的代码可以用来构建面向不同平台的应用
* 原生渲染，虽然我们使用的是 JavaScript 语言编写的代码，但是实际上是调用了原生的 API 和原生的 UI 组件。

### 缺点
* 动画性能，React Native 在动画效率和性能的支持还存在一些问题，性能上不如原生Api
* 渲染时需要JavaScript和原生之间通信，在有些场景如拖动可能会因为通信频繁导致卡顿
* 不能完全屏蔽原生平台，有部分组件和API都区分了Android 和 IOS 版本,即便是共享组件,也会有平台独享的函数。也就是说仍不能真正实现严格意义上的“一套代码，多平台使用”。另外，因为仍对ios 和Android的原生细节有所依赖，所以需要开发者若不了解原生平台，会遇到一些坑。

### 原理
RN 需要一个 js 的运行环境，在 ios 上直接使用内置的 javascriptCore，在 Android 上使用 webkit.org 官方开源的 jsc.so。此外还集成了其他开源组件，如 fresco 图片组件，okhttp 网络组件等;

RN 会把应用的 js 代码（包括依赖的 Framework）编译成一个 jsbundle文件；RN 的整体框架目标就是为了解释运行这个 js 脚本文件，如果是 js 扩展的 api，则直接通过 bridge 调用 native 方法；如果是 ui 界面，则映射到 virtual Dom 这个虚拟的 js 数据结构中，通过 bridge 传递到 Native，然后根据数据属性设置各个对应的真实 Native 的 view。bridge 是一种 js 和 Native 代码通信的机制，用 bridge 函数传入对方 module 和 method 即可达到异步回调的结果

![Alt text](/rn.jpeg)

* JavaScriptCore 是 JavaScript 引擎，通常会被叫做虚拟机，专门设计来解释和执行 JavaScript 代码
* ReactJS负责描述和管理VirtualDom,指挥原生组件进行绘制和更新，同时很多计算逻辑也在js里面进行。ReactJS自身是不直接绘制UI的，UI绘制是非常耗时的操作，原生组件最擅长这事情。
* Bridges用来翻译ReactJS的绘制指令给原生组件进行绘制，同时把原生组件接收到的用户事件反馈给ReactJS。

### Virtual DOM
* 首先 Virtual DOM 和真实 DOM 都有一个共同点：都是用来描述页面 UI 控件。
* Virtual DOM 具有平台无关性：它描述的 UI 控件只是数据结构层的，具体渲染工作是交给了原生渲染引擎（浏览器、iOS、Android）去处理。

```js
/*
 * @Author: dingpanfeng
 * @Date: 2021-02-02 21:34:32
 * @LastEditors: dingpanfeng
 * @LastEditTime: 2021-02-05 14:17:16
 * @FilePath: /myReactApp/app/scenes/home/index.js
 */
import React, { useRef, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Animated, View, StyleSheet, PanResponder, Text, Button, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
//https://www.infoq.cn/public/v1/my/recommond //size: 30
const Home = ({ route, navigation }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [str, setStr] = useState('本地存储');
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ],
                { useNativeDriver: false } //第二个参数
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if (value !== null) {
                // value previously stored
                setStr(value)
            }
        } catch (e) {
            // error reading value
        }
    }
    useEffect(() => {
        (async () => {
            try {
                let response = await fetch(
                    "https://facebook.github.io/react-native/movies.json"
                );
                let responseJson = await response.json();
                setData(responseJson.movies)
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };
    return (
        <View style={styles.container}>
            <Text>{str}</Text>
            <SafeAreaView style={styles.main}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
            <Text style={styles.titleText}>Drag this box!</Text>
            <Button title="getData" onPress={() => getData()} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                }}
                {...panResponder.panHandlers}
            >
                <View style={styles.box} />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
    }
});

export default Home;
```
