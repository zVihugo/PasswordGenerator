import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <>
        <Text  style={styles.title}>BAT PASSWORD GENERATOR</Text>
        <Image
            source={require('../../../assets/bat-logo.png')}
            alt='Bat Logo'
            style={{resizeMode: 'contain', height: 180}}
        >
        </Image>
    </>
  );
}