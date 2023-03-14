import React from "react";
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
    return (
        <View style={styles.root}>
            <View style={styles.body}>
                <Text style={styles.header}>Giriş Yap</Text>
                <Text style={styles.text}>Hesabınızı açmak için detayları doldurun.</Text>
                <View style={{height : 41}} />
                <Text style={styles.input_title}>İsminiz</Text>
                <TextInput
                    style={styles.input}
                    placeholder="İsminizi Girin"
                />
                <Text style={styles.input_title}>Telefon Numaranız</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Telefon numaranızı girin"
                />
                <Text style={styles.input_title}>Şifreniz</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Şifrenizi Girin"
                    
                />
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
                <View style={{height : 41}} />
                <TouchableOpacity style={styles.social_button}>
                <View style={styles.social_boxButton}>
                    <Icon name="google" size={20} color="red" style={styles.icon} />
                    <Text style={styles.social_buttonText}>Google ile giriş yap</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.social_button}>
                <View style={styles.social_boxButton}>
                    <Icon name="facebook" size={20} color="red" style={styles.icon} />
                    <Text style={styles.social_buttonText}>Facebook ile giriş yap</Text>
                </View>
                </TouchableOpacity>
                <Text style={styles.info}>Hesabınız var mı? Giriş yap.</Text>

                
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "white",
    },
    header : {
        fontSize : 24.95,
        fontWeight : "bold",
        marginBottom : 16,
    },
    text : {
        fontSize : 12.47,
        fontWeight : "bold",
        textAlign : "left",
    },
    body : {
        width : "100%",
        flex : 9,
        justifyContent : "center",
        alignItems : "center",
    },
    input_title : {
        fontSize : 20,
        fontWeight : "bold",
        textAlign : "left",
        width : "80%",
        fontFamily : "Poppins",
        color : "black",
    },
    footer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    input: {
        width: '80%',
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#eee',
        borderRadius: 6.24,
      },
    info: {
        fontSize: 14.55,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#7A828A',
    },
    button: {
        backgroundColor: '#00825A',
        width: '80%',
        padding: 16,
        borderRadius: 3.12,
    },
    social_button: {
        marginBottom: 20, // adjust the value as per your requirement
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16.63,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    social_boxButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.24,
        borderColor: 'gray',
        borderRadius: 6.24,
        paddingHorizontal: 20,
        paddingVertical: 10, 
  
    },
    icon: {
        marginRight: 10,
        color: 'red',
    },
    social_buttonText: {
        fontSize: 14.55,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#282828',
    },

});

