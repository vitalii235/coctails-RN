import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from './Theme'

export const renderFooter = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }