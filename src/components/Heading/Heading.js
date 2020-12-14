import React from 'react';
import { View, StyleSheet , Text} from 'react-native';

const Heading = ({children,style,...props}) => {
    return (
        <Text {...props} style={[styles.text, style]}>
        {children}

        </Text>
    )
    }
    const styles = StyleSheet.create({
        text:{
            justifyContent: 'center', //Centered vertically
            textAlign: 'center', // Centered horizontally
            // flex:1
        }
    })

export default Heading;