import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from '../AppRouter';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {check} from "../../http/userApi";
import {Spinner} from "react-bootstrap";
import './app.sass';


const App = observer(() => {
    const {user} = useContext(Context)
    const {basket} = useContext(Context)

    const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     localStorage.setItem('like', JSON.stringify([]))
    //     localStorage.setItem('Id', JSON.stringify([]))
    // }, [])

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;



