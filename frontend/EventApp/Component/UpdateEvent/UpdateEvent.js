
import React, { Component, useState, useEffect } from 'react';


import { Button } from 'react-native-elements';
import {
    Text, Modal,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    RefreshControl, TextInput,  
} from 'react-native';

import { Icon } from 'react-native-elements';

import * as yup from 'yup';
import { Formik } from 'formik';
import axios, { Axios } from "axios";
import { useRoute } from '@react-navigation/native';



export const Updatevent = ({ navigation }) => {
    const [title, settitle] = useState('');
    const [EventDate, setEventDate] = useState('');
    const [created, setcreated] = useState('');
    const [createdby, setcreatedby] = useState('');
    const [idevent, setidevent] = useState('0');
    const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();

    ShowCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        setcreated(date + '-' + month + '-' + year)

    }


    useEffect(() => {
        ShowCurrentDate();
        setidevent(route.params.message);
    }


    )




    const Updatedata = async (url = `http://192.168.0.106:3000/update`) => {
       
        const res = await fetch(url, {
            method: 'PUT',
           
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({idevent:idevent, title: title, EventDate: EventDate, created: created, createdby: createdby }),
        });
        console.log(res);
        try {
            const received = await res.json();
            console.log(received);
            setModalVisible(true);
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
                      Update Your Event</Text>
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

Update Event

                        </Text>
                    </View>
                </TouchableOpacity>) : <TouchableOpacity
                    disabled={false}
                    style={[{
                        backgroundColor: "#0298A6",
                        borderRadius: 10,
                        marginVertical: 15,
                    }]}
                    onPress={() => Updatedata()}
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

                            Update Event

                        </Text>
                    </View>
                </TouchableOpacity>}
                <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Event updated</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => navigation.goBack() }>
              <Text style={styles.textStyle}>Explore Events</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = {
    subtitle: {
        fontFamily: 'Poppins', fontSize: 17, color: '#0298A6', marginVertical: 0,fontWeight: 'bold',
marginStart:5
    } ,centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: '#F3FEFF',
        borderRadius: 20,
        padding: 80,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:30
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize:18
      },

}

