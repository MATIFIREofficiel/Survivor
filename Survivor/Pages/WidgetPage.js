import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WidgetList from '../Components/WidgetList.js';
import WeatherWidget from '../Components/WeatherWidget.js';

import { route } from "react";


export default function WidgetPage({ route }) {
    const widgets = [WeatherWidget];

    console.log("WidgetPage.js: WidgetPage: widgets: ", widgets);

    return (
        <View>
            <WidgetList widgets={widgets}
                userWidgets={route.params[0]}
                setUserWidgets={route.params[1]}
                numberOfColumns={3}
            />
        </View>
    )
}

const styles = StyleSheet.create({})