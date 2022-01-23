import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../style/MainStyle';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [telefone, setTelefone] = useState(null);

    const salvar = () => {
        console.log('Salvou')
    }

    return (
        <View style={styles.container}>
            <Text h3>Cadastre-se</Text>
            <Input
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={value => setEmail(value)}
            />
            <Input
                placeholder="Nome"
                onChangeText={value => setNome(value)}
            />
            <Input
                placeholder="CPF"
                keyboardType="number-pad"
                returnKeyType='done'
                onChangeText={value => setCpf(value)}
            />
            <Input
                placeholder="Telefone"
                keyboardType='phone-pad'
                returnKeyType='done'
                onChangeText={value => setTelefone(value)}
            />

            <Button
                icon={
                    <Icon
                        name="check"
                        size={15}
                        color="white"
                    />
                }
                title=" Salvar"
                buttonStyle={specificStyle.button}
                onPress={() => salvar()}
            />
        </View>
    );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: '#fff'
    },
    button: {
        width: '100%',
        marginTop: 10,
    }
})
