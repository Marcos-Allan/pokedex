import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'
import { Stack, Typography, Button } from '@mui/material'
import MuiBottomNavigation from '../../components/MuiBottomNavigation';
import Card from '../../components/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiMenu from '../../components/MuiMenu';

interface Pkmon {
    id: number,
    number: number,
    name: string,
    img: string,
    type1: string,
    type2: string,
    onDelete: any,
}

export default function Team() {

    const [pkmon, setPkmon] = useState([])
    const [load, setLoad] = useState<Boolean>(true)

    function onReturn(){
        return
    }

    function onDelete(id:number) {
        console.log(id)
        axios.delete(`http://localhost:5000/team/${id}`)

        setLoad(!load)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/team')
        .then((response) => {
            setPkmon(response.data)
        })
    },[load])

    const matches = useMediaQuery('(max-width:600px)');

    return(
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                paddingBottom: {
                    xs: '130px',
                    sm: '130px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px'
                }
            }}
        >
            <MuiMenu activo={1} />
            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '74px',
                }}
            >
                {pkmon.length > 0 ? pkmon.map((pkm:Pkmon, key) => (
                    <Card
                        id={pkm.number}
                        img={pkm.img}
                        key={key}
                        name={pkm.name}
                        type1={pkm.type1}
                        type2={pkm.type2}
                        isAdd={false}
                        onDelete={() => onDelete(pkm.id)}
                        onAdd={() => onReturn()}
                    />
                )) : (
                    <Stack
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: '16px',
                                    sm: '18px',
                                    md: '24px',
                                    lg: '24px',
                                    xl: '24px',
                                },
                                letterSpacing: '4px',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                            }}
                        >Sem pokémons no seu time</Typography>
                        <Link to={'/'}>
                            <Button
                                variant='contained'
                                sx={{
                                    margin: '10px',
                                    backgroundColor: '#97aaff',
                                    transition: '0.4s',
                                    '&:hover':{
                                        backgroundColor: '#0b2495',
                                    }
                                }}
                            >
                                <Typography>
                                    Ir para a lista de pokémons
                                </Typography>
                            </Button>
                        </Link>
                    </Stack>
                )}
            </Stack>
            {matches == true && (
                <MuiBottomNavigation activo={1}/>
            )}
        </Stack>
    )
}
