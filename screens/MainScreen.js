import React, { useContext, useLayoutEffect } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { CoctailContext } from '../ContextAPI'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../components/Theme'
import { renderFooter } from '../components/renderFooter';

const res = (item, arr) => {
  for (let i of arr) {
    if (i.name === item) {
      return true
    }
  }
  return false
}

const MainScreen = ({ navigation }) => {
  const context = useContext(CoctailContext)
  const filtredCoctails = context.filtredCoctails
  const getCoctails = context.getCoctails
  const filter = context.filter

  let checked = []
  if (filter) {
    checked = filter.filter((item) => item.checked)
  }

  let fiiltered = []
  if (filtredCoctails) {
    fiiltered = filtredCoctails.filter((item) => {
      let r = res(item.name, checked)
      return r
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome.Button onPress={() => navigation.navigate('Filters')} name="filter" color="black" backgroundColor="#fff" size={24} />
      ),
    });
  }, [navigation]);

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
  };

  return (
    <View style={styles.mainContainer}>
      {filtredCoctails ?
        <FlatList
          onScroll={({ nativeEvent }) => {
            if (fiiltered.length === checked.length) {
              if (isCloseToBottom(nativeEvent)) {
                alert('This is the end)))');
              }
            }
          }}
          keyExtractor={item => item.name.toString()}
          data={fiiltered}
          onEndReached={getCoctails}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => {
            return (
              <View>
                <Text style={styles.nameOfGroup}>{item.name}</Text>
                {item.data.drinks.map((i) => {
                  return (
                    <View key={i.idDrink} style={styles.drincContainer}>
                      <View style={styles.imageContainer}>
                        <Image
                          style={styles.image}
                          source={{
                            uri: i.strDrinkThumb
                          }}
                        />
                      </View>
                      <Text style={styles.textOfGroup}>{i.strDrink}</Text>
                    </View>
                  )
                })}
              </View>
            )
          }}
        /> : null}
    </View>
  )
}
export default MainScreen


