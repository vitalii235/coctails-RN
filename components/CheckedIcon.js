import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export const CheckedIcon = ({id, filter, setFilter}) => {
    return (
        <AntDesign onPress={() => {
            filter[id].checked = !filter[id].checked;
            setFilter(filter.slice())
        }
        } name="check" size={24} color="black"/>
    )
}