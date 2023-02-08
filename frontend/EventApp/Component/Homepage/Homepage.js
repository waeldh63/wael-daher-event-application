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

import { Icon } from 'react-native-elements';

// import { Switch, useTheme } from 'react-native-paper';



export const HomePage = ({ navigation, unrenotif }) => {
    const { toggleTheme } = useState(true);

    const [timehour, settimehour] = useState('');


    fetchData = async () => {

        const response = await fetch('http://192.168.0.106:3000')
        const event = await response.json();
        settimehour(event);

    }


function delte (id){

    fetch(`http://192.168.0.106:3000/${id}`, {
        method: 'delete'}).then((result)=>{
            result.json().then((resp)=>{
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

            body: JSON.stringify({id:idevent }),
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


    async function deleteDataById() {
        const id = 2;
    
        if (id){
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
            <ScrollView
                style={{ paddingBottom: 50 }}>
                <View style={{ padding: 20 }}>
                {/* <Switch
                trackColor={{ false: "#707070", true: "#0298A6" }}
                thumbColor={papertheme ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
              /> */}
                    {timehour &&
                        timehour.map((u, i) => {
                            return (
                                <View style={{
                                    borderWidth: 1, borderRadius: 20, padding: 10, marginBottom: 10
                                    , borderColor: "#0298A6"
                                }}>
                                    <Image
                                        source={require('../Asset/images/noimage.jpg')}
                                        style={{ width: 75, height: 75, borderRadius: 15 }}
                                    />
                                    <TouchableOpacity onPress={() => delte(u.idevent)}><Icon
            name="home-outline"
            type="ionicon"
            size={25}
          
          /></TouchableOpacity>
                                    <Text style={styles.title}>{u.eventtitle}</Text>
                                    <Text style={styles.date}>Event date :{u.eventdate}</Text>
                                    <Text style={styles.date}>Created in :{u.createdate}</Text>
                                    <Text style={styles.title}>this event created by {u.createdby}</Text>
                                </View>
                            )
                        })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

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

