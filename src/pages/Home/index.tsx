import { useState, useEffect } from 'react';
import axios from 'axios'
import { Stack, Button } from '@mui/material'
import { yellow } from '@mui/material/colors';
import MuiBottomNavigation from '../../components/MuiBottomNavigation';
import Card from '../../components/Card';

type Pkmon = {
    data:{
        name: string,
        id: number,
        'sprites': {
            'versions': {
                'generation-v':{
                    'black-white':{
                        'animated': {
                            'front_default': string,
                        }
                    }
                }
            }
        },
        types: [
            {
                type: {
                    name: string,
                }
            },
            {
                type: {
                    name: string,
                }
            }
        ],
    }
}

export default function Home() {

    const [pkmons, setPkmons] = useState([])
    
    const [pkmonNumber, setPkmonNumber] = useState<number>(1)
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        loadData(pkmonNumber)
    },[loading])
    
    function loadData(num:number){
        var endpoints = []
        for(let i = 1; i < num+10; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        console.log(endpoints)
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPkmons(res as any))
        return response
    }


    return(
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                paddingBottom: '130px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
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
                {pkmons.map((pokemon: Pkmon, key) => (
                    <Card
                        key={key}
                        id={pokemon.data.id}
                        name={pokemon.data.name}
                        type1={pokemon.data.types[0].type.name}
                        type2={pokemon.data.types[1] ? pokemon.data.types[1].type.name : ''}
                        img={pokemon['data']['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}
                        isAdd={true}
                    />
                ))}
            </Stack>

            <Button
                variant='contained'
                onClick={() => {
                    setPkmonNumber(pkmonNumber + 10)
                    setLoading(!loading)
                }}
                sx={{
                    width: '40%',
                    textTransform: 'uppercase',
                    marginTop: '10px',
                    fontSize: '17px',
                    backgroundColor: yellow.A400,
                    '&:hover':{
                        backgroundColor: yellow.A700,
                    }
                }}
            >carregar mais</Button>
            <MuiBottomNavigation activo={0} />
        </Stack>
    )
}