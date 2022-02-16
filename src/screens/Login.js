import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../style/MainStyle';

export default function Login({ navigation }) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Principal' }]
        })
    }

    const cadastrar = () => {
        navigation.navigate("Cadastro")
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
            <Text h3>Entrar no Temtudaki!</Text>
            <Input
                label='Your Email Address'
                //placeholder="E-mail"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                keyboardType="email-address"
                onChangeText={value => setEmail(value)}
            />
            <Input
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry
                onChangeText={value => setPassword(value)}
            />
            <Button
                icon={
                    <Icon
                        name="check"
                        size={15}
                        color="white"
                    />
                }
                title=" Entrar"
                buttonStyle={specificStyle.button}
                onPress={() => entrar()}
            />
            <Button
                icon={
                    <Icon
                        name="user"
                        size={15}
                        color="white"
                    />
                }
                title=" Cadastrar"
                buttonStyle={specificStyle.button}
                onPress={() => cadastrar()}
            />
        </View>
    );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        marginTop: 10,
        borderRadius: 5,
    },
})
