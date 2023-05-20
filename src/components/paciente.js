import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'


const Paciente = ({ item, pacientes, setPacientes, setEditarPaciente, setModalVisible }) => {
    const { paciente, propietario } = item

    const handleDelete = () => {
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setPacientes(pacientes.filter(({ id }) => id !== item.id))
        });
    };
    
    const opacityValue = useRef(new Animated.Value(1)).current;

    return (
        <Animated.View style={[styles.container, { opacity: opacityValue }]} key={item.id}>

            <Text style={styles.text}>{paciente}</Text>
            <Text style={styles.text}>{propietario}</Text>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button} onPress={() => { setEditarPaciente(item); setModalVisible(true); }}>
                    <Image source={require('./../media/lapiz.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDelete()}>
                    <Image source={require('./../media/borrar.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        elevation:5,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOffset: { hieght: 10, width: 10 },
        margin: 10,
        width: 165,
        borderWidth: 0.8,
        borderRadius: 30
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width: 50,
        height: 40,
        margin: 5
    },
    buttonDelete: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width: 50,
        height: 40,
        margin: 5,
        alignItems: 'center'
    },
});

export default Paciente