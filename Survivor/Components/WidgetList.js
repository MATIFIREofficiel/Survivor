import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import React, { route, useState, useRef } from 'react'
import WeatherWidget from './WeatherWidget';
import { TextInput } from 'react-native-gesture-handler';

export default function WidgetList(props) {

  const inputRef = useRef(null);

  const renderTextInput = () => {
      return (
        <TextInput
          ref={inputRef}
          style={styles.cityInput}
          placeholder="name of the city"
        >
        </TextInput>
      )
    }

  const [isWeatherClicked, setisWeatherClicked] = useState(false);


  const openKeyboard = (item) => {
    console.log("WidgetList.js: openKeyboard: item: ", item);
    if (item.name === "WeatherWidget") {
      setisWeatherClicked(true);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };


  const [widgets, setWidgets] = useState(props.widgets);


  function Item({ item, onPress }) {
    const Widget = item;
    return (
      <>
        <View>
          <TouchableOpacity onPress={onPress} style={styles.item}>
            <Widget />
          </TouchableOpacity>
        </View>
      </>
    );
  }


  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        onPress={() =>
          openKeyboard(item)}
        columnCount={3}
      />
    );
  };

  return (
    <View >
      <FlatList
      style={styles.list}
        refreshing={true}
        data={widgets}
        renderItem={renderItem}
        numColumns={3}
        extraData={widgets}
      />
      <TextInput
        ref={inputRef}
        style={[styles.cityInput, { display: isWeatherClicked ? 'flex' : 'none' }]}
        placeholder="name of the city"
        onBlur={() => setisWeatherClicked(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cityInput: {
    alignItems: 'center',
    marginLeft: 160,
    borderWidth: 2,
    width: 100,
    borderColor: 'blue',
    borderRadius: 5,
  },
  list: {
    marginTop: 10,
  },
})