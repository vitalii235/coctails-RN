import React, { useContext, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { CoctailContext } from '../ContextAPI'
import { CheckedIcon } from '../components/CheckedIcon'
import { styles } from '../components/Theme'

const FilterScreen = ({ navigation, title }) => {
    const context = useContext(CoctailContext)
    const setFilter = context.setFilter
    const setNumb = context.setNumb
    const setText = context.setText
    const filter = context.filter
    const setFiltredCoctails= context.setFiltredCoctails
    const [filterList, setFilterList] = useState(context.filter)

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    style={styles.flatListContainer}
                    keyExtractor={item => item.name.toString()}
                    data={filterList}
                    renderItem={
                        ({ item, index }) => {
                            return (
                                <View key={item.name} style={styles.item}>
                                    <Text style={styles.text} onPress={() => {
                                        filterList[index].checked = !filterList[index].checked
                                        setFilterList(filterList.slice())
                                    }
                                    }>
                                        {item.name}
                                    </Text>
                                    {filterList[index].checked ? <CheckedIcon id={index} filter={filterList} setFilter={setFilterList} /> : null}
                                </View>
                            )
                        }
                    }
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='APPLY' color='black' onPress={() => {
                    let arr = filter.filter((item) => item.checked)
                    let newArr = []
                    for (let i of arr) {
                        newArr.push(i.name)
                    }
                    setFilter(filterList.slice())
                    setText(newArr.slice())
                    setNumb(0)
                    setFiltredCoctails([])
                }
                } />
            </View>
        </View>
    )
}

export default FilterScreen
