
import React, { Component, useState, useEffect } from 'react';


import { Button } from 'react-native-elements';
import {
    Text, Modal,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    RefreshControl, TextInput, Alert
} from 'react-native';

import { Icon } from 'react-native-elements';

import * as yup from 'yup';
import { Formik } from 'formik';
import axios from "axios";



export const AddEvent = () => {
    const [title, settitle] = useState('');
    const [EventDate, setEventDate] = useState('');
    const [created, setcreated] = useState('');
    const [createdby, setcreatedby] = useState('');


    ShowCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        setcreated(date + '-' + month + '-' + year)

    }


    useEffect(() => {
        ShowCurrentDate();

    }


    )
    const postData = async (url = 'http://192.168.0.106:3000/store-data') => {
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ title: title, EventDate: EventDate, created: created, createdby: createdby }),
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



    return (
        <SafeAreaView >
            <ScrollView
                style={{ paddingBottom: 50, paddingHorizontal: 20 }}>
                <View style={{ alignItems: "center", marginTop: 15 }}>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 16, color: '#C2C2C2' }}>
                        Add Your Event</Text>
                    <Text>{created}</Text>
                </View>
                <Text style={styles.subtitle}>Title</Text>
                <View style={{ backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 10, marginVertical: 10 }}>
                    <TextInput
                        placeholder='Event title'
                        onChangeText={text => settitle(text)}
                        returnKeyType="next"
                        blurOnSubmit={false}
                    /></View>
                <Text style={styles.subtitle}>Event Date</Text>

                <View style={{ backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 10, marginVertical: 10 }}>
                    <TextInput
                        placeholder='Event Date'
                        onChangeText={text => setEventDate(text)}
                        returnKeyType="next"

                        blurOnSubmit={false}
                    /></View>
                <Text style={styles.subtitle}>Event Created Date</Text>

                <View style={{ backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 10, marginVertical: 10 }}>
                    <TextInput
                        placeholder={created} editable={false}

                        returnKeyType="next"
                        blurOnSubmit={false}
                    /></View>
                <Text style={styles.subtitle}>Event Created BY</Text>

                <View style={{ backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 10, marginVertical: 10 }}>
                    <TextInput
                        placeholder='Event created by'
                        onChangeText={text => setcreatedby(text)}
                        returnKeyType="next"
                        blurOnSubmit={false}
                    /></View>


                {title == '' || EventDate == '' || createdby == '' ? (<TouchableOpacity
                    disabled={true}
                    style={{
                        backgroundColor: "#000",

                        borderRadius: 10,
                        marginVertical: 15,
                    }}
                    title="Submit">
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 5,
                        }}>
                        <Text
                            style={{ fontFamily: 'Poppins', fontSize: 24, color: '#FFF' }}>

                            Create Event

                        </Text>
                    </View>
                </TouchableOpacity>) : <TouchableOpacity
                    disabled={false}
                    style={[{
                        backgroundColor: "#0298A6",
                        borderRadius: 10,
                        marginVertical: 15,
                    }]}
                    onPress={() => postData()}
                    title="Submit">
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 5,
                        }}>
                        <Text
                            style={{ fontFamily: 'Poppins', fontSize: 24, color: '#FFF' }}>

                            Create Event

                        </Text>
                    </View>
                </TouchableOpacity>}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = {
    subtitle: {
        fontFamily: 'Poppins', fontSize: 17, color: '#0298A6', marginVertical: 0,fontWeight: 'bold',
marginStart:5
    }

}

