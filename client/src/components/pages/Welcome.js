import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Topbar from '../../scenes/global/Topbar';
import Dashboard from '../../scenes/dashboard';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Sidebar from '../../scenes/global/Sidebar';
import CurrentTrip from '../../scenes/currentTrip';
import HospitalPage from '../../scenes/hospitals';

const Welcome = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [loginState, setLoginState] = useState(false);
    async function populateData() {
        const req = await fetch('http://localhost:5500/api/data', {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setName(data.quote)
        } else {
            alert(data.error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const username = jwt_decode(token).username
            console.log(username);
            if (!username) {
                localStorage.removeItem('token')
            } else {
                setLoginState(true)
                populateData()
            }
        }
        else {
            localStorage.removeItem('token')
            alert('You are not logged in')
            navigate('/login')
        }
    }, [])
    return (
        loginState ?
            <>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <div className="app">
                            <Sidebar isSidebar={isSidebar} name={name} />
                            <main className="content">
                                <Topbar setIsSidebar={setIsSidebar} />
                                <Routes>
                                    <Route path='home' element={<Dashboard></Dashboard>}></Route>
                                    <Route path='current-trip' element={<CurrentTrip></CurrentTrip>} />
                                    <Route path='hospital' element={<HospitalPage></HospitalPage>} />
                                </Routes>
                            </main>
                        </div>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </> :
            <>
                <h1>You are not Logged in</h1>
            </>
    );
};

export default Welcome;