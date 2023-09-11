import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WidgetListAll from './WidgetListAll.js';
import WeatherWidget from '../Components/WeatherWidget.js';

import { route } from "react";


export default function WidgetPage({ route }) {
    const widgets = [WeatherWidget];

    console.log("WidgetPage.js: WidgetPage: widgets: ", route.params[0]);

    return (
        <View>
            <WidgetListAll widgets={widgets}
                userWidgets={route.params[0]}
                numberOfColumns={3}
            />
        </View>
    )
}

const styles = StyleSheet.create({})