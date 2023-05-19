import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Formulario from './src/components/formulario.js';
import Paciente from './src/components/paciente.js'

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [editarPaciente, setEditarPaciente] = useState('');

  return (
    <SafeAreaView style={styles.contenedor}>
      <LinearGradient style={styles.contenedorInicial}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#6d60bc', '#ae38c4']}>
        <View style={{alignItems:'center'}}>
        <Text style={styles.titulo}>Administración de citas</Text>
        <Text style={styles.subtitulo}>Veterinaria</Text>


        <Pressable style={styles.btnNuevaCita} onPress={() => { setEditarPaciente(''); setModalVisible(true) }}>
          <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
        </Pressable>

        </View>
      
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.subtitulo, {fontWeight:'bold'}]}>Citas</Text>
        </View>


      <View style={styles.citasExt}>
      {pacientes.length === 0 ?
        <View style={[styles.contenedorInicial, {alignItems:'center'}]}>
          <Text style={[styles.subtitulo, {color:'#5d4bd4', marginTop: 20, fontWeight:'bold'}]}>No hay citas pendientes</Text>
        </View> :

        <FlatList

          data={pacientes}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item} pacientes={pacientes} setPacientes={setPacientes} setModalVisible={setModalVisible} setEditarPaciente={setEditarPaciente} />
            )
          }}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />

      }
      </View>
      <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} setPacientes={setPacientes} pacientes={pacientes} pacienteActual={editarPaciente}></Formulario>

      </LinearGradient>
    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'red',
    flex: 1,
  },
  contenedorInicial: {
    flex: 1,
    alignItems: 'stretch',
    textAlign: 'center'
  },
  titulo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'white',
    //fontWeight: 'bold',
  },
  btnNuevaCita: {
    marginBottom:20,
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNuevaCita: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900'
  },
  btnBorrarCita: {
    backgroundColor: 'red',
    padding: 15,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  citasExt: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    borderWidth: 0.9,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 10,
  }
});

export default App;
