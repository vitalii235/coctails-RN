import React from 'react'
import {StyleSheet} from 'react-native'

const colors ={
    colorMain:'#7e7e7e'
}
export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#fff',
        paddingTop:10
    },
    loader:{
        marginBottom:25, 
        alignItems:'center'
    },
    color:{
        color:colors.colorMain
    },
    container: {
        backgroundColor: '#fff',
    },
    flatListContainer:{
        marginBottom:50
    },
    item: {
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        height: '100%',
        color:colors.colorMain
    },
    buttonContainer: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        bottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    drincContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      image: {
        width: 70,
        height: 70,
      },
      imageContainer: {
        padding: 20,
      },
      nameOfGroup: {
        paddingLeft: 20,
        color:colors.colorMain
      },
      textOfGroup:{
        color:colors.colorMain
      },
      headerStyleMain: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})