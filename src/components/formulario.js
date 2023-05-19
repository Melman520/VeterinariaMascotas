import React, { useEffect, useState } from 'react';
import {
  Pressable,
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Alert
} from 'react-native';

const Formulario = ({ modalVisible, setModalVisible, setPacientes, pacientes, pacienteActual }) => {
  const [paciente, setPaciente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [telefono, setTelefono] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if ([pacienteActual]) {
      setPaciente(pacienteActual.paciente)
      setPropietario(pacienteActual.propietario)
      setEmail(pacienteActual.email)
      setTelefono(pacienteActual.telefono)
      setSintomas(pacienteActual.sintomas)
    }
  }, [pacienteActual])

  const editarCita = () => {
    if ([
      paciente, propietario,
      //email, sintomas
    ].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios')
      return
    }
    const actualizarPaciente = {
      id: pacienteActual.id,
      paciente,
      propietario,
      email,
      telefono,
      sintomas
    }
    const citasActualizadas = pacientes.map((cita) => 
    cita.id === actualizarPaciente.id ? actualizarPaciente : cita);
    setPacientes(citasActualizadas)

    setModalVisible(false)

    //Limpiar los campos
    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setSintomas('')

  }

  const crearCita = () => {
    if ([
      paciente, propietario,
      //email, sintomas
    ].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios')
      return
    }
    const nuevoPaciente = {
      id: Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      sintomas
    }

    setPacientes([...pacientes, nuevoPaciente])
    setModalVisible(false)

    //Limpiar los campos
    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setSintomas('')
  }
  return (
    <Modal animationType='slide' visible={modalVisible} style={styles.modalContainer}>
      <SafeAreaView style={styles.modalContent}>
        <ScrollView>
          <Pressable style={styles.btnCloseModal} onPress={() => setModalVisible(false)}>
            <Text style={styles.btnTextCloseModal}>{pacienteActual ? 'Cancelar' : 'Cerrar'}</Text>
          </Pressable>
          <View><Text style={styles.label}>Nombre paciente</Text></View>
          <TextInput style={styles.input}
            placeholder='Nombre paciente'
            value={paciente}
            onChangeText={setPaciente}></TextInput>

          <View><Text style={styles.label}>Nombre propietario</Text></View>
          <TextInput style={styles.input}
            placeholder='Nombre propietario'
            value={propietario}
            onChangeText={setPropietario}
          ></TextInput>

          <View><Text style={styles.label}>Email</Text></View>
          <TextInput style={styles.input}
            placeholder='Email'
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}></TextInput>

          <View><Text style={styles.label}>Telefono</Text></View>
          <TextInput style={styles.input}
            placeholder='Telefono'
            keyboardType='number-pad'
            maxLength={10}
            value={telefono}
            onChangeText={setTelefono}></TextInput>

          <View><Text style={styles.label}>Sintomas</Text></View>
          <TextInput style={styles.input}
            placeholder='Sintomas'
            onChangeText={setSintomas}
            value={sintomas}
          >
          </TextInput>


          <Pressable style={styles.btnNuevaCita} onPress={pacienteActual ? editarCita : crearCita} >
            <Text style={styles.btnTextNuevaCita}>{pacienteActual ? 'Actualizar' : 'Nueva cita'}</Text>
          </Pressable>

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
    color: 'black'
  },
  input: {
    fontSize:18,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  btnCloseModal: {
    backgroundColor: '#eb4034',
    padding: 15,
    marginTop: 5,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextCloseModal: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    //textTrasnform: 'uppercase'
  },
  btnNuevaCita: {
    backgroundColor: 'blue',
    padding: 15,
    paddingBottom: 10,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    //fontWeight: '900',
    //textTrasnform: 'uppercase'
  },
});

export default Formulario;