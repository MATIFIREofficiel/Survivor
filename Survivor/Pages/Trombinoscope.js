import { View, Text, Button, Image, FlatList , StyleSheet} from "react-native";
import axios from "axios";
import React, { useState, memo , useEffect, route} from 'react';

function Item({ item, onPress }) {
    return (
        <>
            <View>
                <Image
                    source={{
                        uri: `https://masurao.fr/api/employees/${item.id}/image`,
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            'X-Group-Authorization': 'AhSyHQjIpPhIvfI5OU8HHe9nyhPKwY-q',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsImVtYWlsIjoib2xpdmVyLmxld2lzQG1hc3VyYW8uanAiLCJuYW1lIjoiT2xpdmVyIiwic3VybmFtZSI6Ikxld2lzIiwiZXhwIjoxNjk1NzI2MzMwfQ.kfZoJqTF7H6Wg1egKTyA8W3r-pucZvkmvBAP0v_Fb6k',
                        },
                    }}
                    style={styles.image} />
                <Text style={styles.item}> {item.name} {item.surname} </Text>
            </View>
        </>
    );
}

const ids = [];


export default function TrombinoscopeScreen({ navigation, route }) {
    const setIsLogIng = route.params.setIsSignedIn;
    const [refreshing, setRefreshing] = useState(false);

    const [infos, setinfos] = useState([]);

    const getListEmployeesID = async () => {

        const url = 'https://masurao.fr/api/employees';
        const headers = {
            'accept': 'application/json',
            'X-Group-Authorization': 'AhSyHQjIpPhIvfI5OU8HHe9nyhPKwY-q',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsImVtYWlsIjoib2xpdmVyLmxld2lzQG1hc3VyYW8uanAiLCJuYW1lIjoiT2xpdmVyIiwic3VybmFtZSI6Ikxld2lzIiwiZXhwIjoxNjk1NzI2MzMwfQ.kfZoJqTF7H6Wg1egKTyA8W3r-pucZvkmvBAP0v_Fb6k'
        };

        try {
            const response = await axios.get(url, { headers });
            setinfos(response.data);
        } catch (error) {
            console.log(error.accept);
            return [];
        }
    };

    const handleButtonPress = async () => {
        handleRefresh();
        setIsLogIng(false);
    };
    useEffect(() => {
        getListEmployeesID();
    }, []);

    const handleRefresh = () => {
        setRefreshing(true);
        console.log("refreshing");
        setRefreshing(false);
    };
 
    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => console.log("pressed")}
            />
        );
    };

    return (

        <View style={styles.homePage}>
            <Button
                title="test"
                onPress={handleButtonPress}
            />

            <FlatList
                refreshing={true}
                data={infos}
                renderItem={renderItem}
                numColumns={2}
                extraData={infos}
            />

        </View>
    )
}

const styles = StyleSheet.create ({
    homePage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        paddingBottom: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 100,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 40,
        overflow:"hidden",
        padding : 10,
    },
});
