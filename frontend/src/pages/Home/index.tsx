import { useState, useEffect } from 'react';
import axios from 'axios'
import { Stack, Button } from '@mui/material'
import MuiBottomNavigation from '../../components/MuiBottomNavigation';
import Card from '../../components/Card';

import MuiMenu from '../../components/MuiMenu';
import useMediaQuery from '@mui/material/useMediaQuery';

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
    let pkmAdded = {}

    const [pkmonNumber, setPkmonNumber] = useState<number>(1)
    const [loading, setLoading] = useState<Boolean>(true)

    async function savePkm(idPK:number) {
        
        pkmAdded = {}
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idPK}`)
        .then(function (response) {
            pkmAdded = response.data
            onAdd(pkmAdded)
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            console.log('TERMINOU')
        })
    }

    async function onAdd(pokemon) {

        await axios.post('http://localhost:5000/team', {
            id: crypto.randomUUID(),
            number: pokemon.id,
            name: pokemon.name,
            type1: pokemon.types[0].type.name,
            type2: pokemon.types[1] ? pokemon.types[1].type.name : "",
            img: pokemon.sprites['versions']['generation-v']['black-white']['animated']['front_default']
        })
        .then(function () {
            console.log('POKEMON ADICONADO AO BD')
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        loadData(pkmonNumber)
    },[loading])
    
    function loadData(num:number){
        var endpoints = []
        for(let i = 1; i < num+20; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        console.log(endpoints)
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPkmons(res as any))
        return response
    }

    const matches = useMediaQuery('(max-width:600px)');

    return(
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '74px',
                '::-webkit-slider-thumb':{
                    backgroundColor: 'orange',
                    width: '10px'
                },
                paddingBottom: {
                    xs: '130px',
                    sm: '130px',
                    md: '0px',
                    lg: '0px',
                    xl: '0px',
                }
            }}
        >
            <MuiMenu activo={0} />
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
                        onAdd={() => savePkm(pokemon.data.id)}
                    />
                ))}
            </Stack>

            <Button
                variant='contained'
                onClick={() => {
                    if(pkmonNumber >= 120 && pkmonNumber < 132){
                        setPkmonNumber(132)
                        setLoading(!loading)
                        return
                    }else if(pkmonNumber >= 220 && pkmonNumber < 232){
                        setPkmonNumber(231)
                        setLoading(!loading)
                        return
                    }else{
                        setPkmonNumber(pkmonNumber + 20)
                        setLoading(!loading)
                        return
                    }
                }}
                sx={{
                    width: {
                        xs: '220px',
                        sm: '240px',
                        md: '290px',
                        lg: '200px',
                        xl: '290px',
                    },
                    textTransform: 'uppercase',
                    marginTop: '10px',
                    fontSize: '17px',
                    backgroundColor: '#97aaff',
                    transition: '0.4s',
                    '&:hover':{
                        backgroundColor: '#0b2495',
                    }
                }}
            >carregar mais</Button>
            {matches == true && (
                <MuiBottomNavigation activo={0} />
            )}
        </Stack>
    )
}