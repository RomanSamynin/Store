import React, {useContext, useEffect} from 'react';
import Main from '../components/main';
import Header from '../components/header';
import Footer from '../components/footer'
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {fetchTypes} from '../http/deviceApi';
import {fetchBrands} from '../http/deviceApi';
import {fetchDevices} from '../http/deviceApi';

const Shop = observer( () => {
    const {device} = useContext(Context)
    const {basket} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 9).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 9).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

// Serch panel
    useEffect(() => {
        fetchDevices().then(data => {

            let arrName = data.rows.map(data => {return data.name})
            
            let filtresName = arrName.filter(name => {
                return name.toLowerCase().includes(device.value.toLowerCase())
            })
            
            let arrIndex = filtresName.map(data => {
                return arrName.indexOf(data)
            } )

            let newARR = []

            arrIndex.map((index) => {
                return newARR.push(data.rows[index])
             })

             device.setDevices(newARR)
             device.setTotalCount(data.count) 

        })
    }, [device.value])

    return (
        <div>
            <Header/>
            <Main/> 
            <Footer/> 
        </div>
    )
});

export default Shop

