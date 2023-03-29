import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


import churrasco from '../../assets/churrasco.png';

export default function Topo() {
  return (
    <View>
      <Image source = { churrasco } />

      <View style={styles.navbar}>
        <Text style={styles.titulo}>Churrasco em casa</Text>
        <Text>Calculando a comida e a bebida</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    displayFlex:'flex',
    justifyContent:"center",
    fontWeight:"bold",
    color:"white",
    alignItems:"center"
  },
  navbar:{

    displayFlex:'flex',
    justifyContent:"center",
    backgroundColor: "darkcyan",
    borderBottomLeftRadius: "25vh",
    borderBottomRightRadius: "25vh",
    height:"17vh"
  }
});

