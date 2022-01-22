import React, { useState } from 'react';
import { View } from 'react-native';
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

    return (
        <View style={styles.container}>
            <Text h3>Entrar no Temtudaki!</Text>
            <Input
                placeholder="E-mail"
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
                title="Entrar"
                onPress={() => entrar()}
            />

        </View>
    );
}
