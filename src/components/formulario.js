import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Button
} from 'react-native';

function Formulario({modalVisible, close}){
    return(
        <Modal animationType='slide' visible={modalVisible} style={styles.modalContainer}>
        <SafeAreaView style={styles.modalContent}>
          <ScrollView>
            <View><Text style={styles.label}>Nombre paciente</Text></View>
            <TextInput style={styles.input}></TextInput>

            <View><Text style={styles.label}>Nombre propietario</Text></View>
            <TextInput style={styles.input}></TextInput>

            <View><Text style={styles.label}>Email</Text></View>
            <TextInput style={styles.input}></TextInput>

            <View><Text style={styles.label}>Telefono</Text></View>
            <TextInput style={styles.input}></TextInput>

            <View><Text style={styles.label}>Sintomas</Text></View>
            <TextInput style={styles.input}></TextInput>


            <Button title='Enviar solicitud' style={{marginBottom:100}}></Button>
            <Button title='Cerrar' onPress={close}></Button>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      overflow: 'hidden',
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 30
    },
  });

export default Formulario;