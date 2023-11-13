import { useState, useEffect } from 'react'

import axios from 'axios'
import { Stack } from '@mui/material'
import MuiBottomNavigation from '../../components/MuiBottomNavigation';
import Card from '../../components/Card';

interface Pkmon {
    id: number,
    number: number,
    name: string,
    img: string,
    type1: string,
    type2: string,
}

export default function Team() {

    const [pkmon, setPkmon] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/team')
        .then((response) => {
            console.log(response.data[0])
            setPkmon(response.data)
        })
    },[])

    return(
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                paddingBottom: '130px',
            }}
        >
            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {pkmon.map((pkm:Pkmon, key) => (
                    <Card
                        id={pkm.number}
                        img={pkm.img}
                        key={key}
                        name={pkm.name}
                        type1={pkm.type1}
                        type2={pkm.type2}
                        isAdd={false}
                    />
                ))}
            </Stack>
            <MuiBottomNavigation activo={1}/>
        </Stack>
    )
}