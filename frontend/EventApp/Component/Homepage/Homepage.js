import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-elements';
import {
    Text, Modal, 
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    RefreshControl
} from 'react-native';
import { AuthContext } from '../Context';

import { Icon } from 'react-native-elements';
import { Switch, useTheme } from 'react-native-paper';
import { useTheme as use } from '@react-navigation/native';

// import { Switch, useTheme } from 'react-native-paper';



export const HomePage = ({ navigation, unrenotif }) => {

    const { colors } = use();

    const papertheme = useTheme();
    const { toggleTheme } = React.useContext(AuthContext)

    const [timehour, settimehour] = useState('');


    fetchData = async () => {

        const response = await fetch('http://192.168.0.106:3000')
        const event = await response.json();
        settimehour(event);

    }


    function delte(id) {

        fetch(`http://192.168.0.106:3000/${id}`, {
            method: 'delete'
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
            })
        })
    }


    const deleteData = async (url = `http://192.168.0.106:3000/delete`) => {
        const idevent = 2;
        const res = await fetch(url, {
            method: 'delete',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ id: idevent }),
        });
        console.log(res);
        try {
            const received = await res.json();
            console.log(received);
            return received;
        }
        catch (error) {
            console.log('ERROR: ' + error);
        }
    };
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    async function deleteDataById() {
        const id = 2;

        if (id) {
            try {
                const res = await fetch(`http://192.168.0.106:3000/delete/event/${id}`, { method: "delete" });



            } catch (err) {
                console.log('ERROR: ' + err);
            }
        }
    }



    useEffect(() => {
        fetchData();

    }


    )
    return (
        <SafeAreaView>
            <ScrollView  refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
                style={{ paddingBottom: 50 }}>
                <View style={{ padding: 20 }}>
                <View>

              
                </View>
                    <View style={{flexDirection:'row',justifyContent:"space-between",marginVertical:10}}>
                    <Text style={{color:colors.text,fontSize:18}}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: "#707070", true: "#0298A6" }}
                        thumbColor={papertheme ? "#FFFFFF" : "#FFFFFF"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={colors.background == "#F3FEFF" ? false : true}
                    /></View>

                    {timehour &&
                        timehour.map((u, i) => {
                            return (
                                <View style={{
                                    borderWidth: 3, borderRadius: 20, padding: 10, marginBottom: 10
                                    , borderColor: "#0298A6"
                                }}>
                                    <Image
                                        source={require('../Asset/images/noimage.jpg')}
                                        style={{ width: 75, height: 75, borderRadius: 15 }}
                                    />
                                    
                                    <Text style={[styles.title, { color: colors.text }]}>{u.eventtitle} </Text>
                                    <Text style={[styles.date, { color: colors.text }]}>Event date :{u.eventdate}</Text>
                                    <Text style={[styles.date, { color: colors.text }]}>Created in :{u.createdate}</Text>
                                    <Text style={[styles.title, { color: colors.text }]}>this event created by {u.createdby}</Text>
                                    
                                    <TouchableOpacity 
                                    style={{alignItems:"center",padding:10,borderRadius:20,marginTop:10,
                                    justifyContent:"space-between",backgroundColor:"#0298A6"
                                    }}
                                     onPress={() => { navigation.navigate('Updatevent', { message: u.idevent}) }}>
                                    <Text style={[styles.title, { color:"#FFF",marginTop:0 }]}> click here to Update event</Text>
                                    
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomePage;
const styles = {
    title: {

        fontFamily: 'Poppins',
        fontSize: 19,
        color: '#353844',
        fontWeight: 'bold',
        marginTop: 15
    },
    date: {

        fontFamily: 'Poppins',
        fontSize: 14,
        color: '#353844',
        fontWeight: 'bold',
        marginTop: 5
    }
}

