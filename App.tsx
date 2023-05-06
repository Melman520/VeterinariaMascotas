import React, {useState} from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Modal,
  ScrollView,
  View,
  TextInput
} from 'react-native';
import Formulario from './src/components/formulario.js';

function App(): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);
  const cerrar = () =>{
    setModalVisible(false)
  } 

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Administración de citas {''}</Text>
      <Text style={styles.subtitulo}>Veterinaria</Text>
      

      <Pressable style={styles.btnNuevaCita} onPress={()=>setModalVisible(true)}>
      <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>

      <Formulario modalVisible={modalVisible} close={cerrar}></Formulario>

     
    </SafeAreaView>

    

  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
 titulo: {
  fontSize: 30,
  color: '#1483D5',
  fontWeight: '900',
  textAling: 'center'
 },
 subtitulo: {
  fontSize: 20,
  color: '#9214D5',
  fontWeight: '600',
  textAling: 'center'
 },
 btnNuevaCita: {
  color: '6D28D9',
  backgroundColor: '#6D28D9',
  padding: 15,
  marginTop: 30,
  marginHorizontal: 20,
  borderRadius: 10
 },
 btnTextNuevaCita:{
  textAlign: 'center',
  color: '#FFF',
  fontSize: 20,
  fontWeight: '900',
  //textTrasnform: 'uppercase'
 },
});

export default App;
