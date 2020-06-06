import React, { createContext, useEffect, useState } from "react";
import coctails from './services/API'

export const CoctailContext = createContext()

export const CoctailProvider = props => {

    const [filter, setFilter] = useState([])
    const [filtredCoctails, setFiltredCoctails] = useState([])
    const [text, setText] = useState([])
    const [numb, setNumb] = useState(0)

    let drinks = []
    let requests = []
    const getFilters = async () => {
        try {
            const r = await coctails.filters()
            const filterArr = r.data.drinks.map(item => {
                return { name: item.strCategory, checked: true }
            })
            setFilter(filterArr)
            for (let i of filterArr) {
                requests.push(i.name)
            }
            setText(requests)
        } catch (e) {
            console.error(e)
        }
    }
    const incNumb = () => {
        setNumb(numb + 1)
    }

    const getCoctails = async () => {
        if (numb === 11) {
            return
        }
        if (filter.length > 0) {
            try {
                console.log('TEXT', text);
                console.log('NUMB', numb);
                let res = await coctails.list(text[numb])
                if (drinks.length === 0) {
                    drinks.push({
                        name: text[numb],
                        data: res.data
                    })
                    setFiltredCoctails((prev) => [...prev, ...drinks.slice()])
                    incNumb()
                } else {
                    setTimeout(() => {
                        drinks.push({
                            name: text[numb],
                            data: res.data
                        })
                        setFiltredCoctails((prev) => [...prev, ...drinks.slice()])
                        incNumb()
                    }, 1500)
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
    useEffect(() => {
        getCoctails()
    }, [text])

    useEffect(() => {
        if (filter.length === 0) {
            getFilters()
        }
    }, [filter])

    return <CoctailContext.Provider value={{ drinks: drinks.drinks, filter, setFilter, filtredCoctails, getCoctails, incNumb, setText, setNumb, setFiltredCoctails }}>
        {props.children}
    </CoctailContext.Provider>
}