import { useState } from 'react'
import { Stack, Typography, InputBase, Button } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

interface Props {
    activo: number,
}

export default function MuiMenu(props: Props){
    
    const matches = useMediaQuery('(max-width:600px)');
    const [inputText, setInputText] = useState<string>('')
    
    return(
        <Stack
            sx={{
                backgroundColor: '#728cff',
                width: {
                    xs: '100vw',
                    sm: '100vw',
                    md: '100vw',
                    lg: '100vw',
                    xl: '100vw',
                },
                padding: '20px',
                position: 'fixed',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                top: 0,
                left: 0,
                height: '20px',
                zIndex: 4,
                flexWrap: 'wrap',
            }}
            >
            <Typography
                sx={{
                    flexGrow: 1,
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    flexWrap: 'wrap',
                    fontSize: '22px',
                }}
                variant='h1'
            >
                pokédex
            </Typography>
            {props.activo == 0 && (
                <Stack
                    sx={{
                        flex: 2,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <InputBase
                        sx={{
                            color: '#ffffff',
                            border: '1px solid #ffffff',
                            padding: '0px 10px',
                            flex: 3,
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '10px',
                            height: '26px',
                        }}
                        onChange={(e) => setInputText(e.target.value as string)}
                        value={inputText}
                    />
                    <Button
                        variant='contained'
                        sx={{
                            flex: 1,
                            height: '26px',
                            borderBottomLeftRadius: '0px',
                            borderTopLeftRadius: '0px',
                            backgroundColor: '#ffffff',
                            padding: '2px',
                            marginRight: {
                                xs: '30px',
                                sm: '10px',
                                md: '10px',
                                lg: '10px',
                                xl: '10px',
                            },
                            '&:hover': {
                                flex: 1,
                                borderBottomLeftRadius: '0px',
                                borderTopLeftRadius: '0px',
                                backgroundColor: '#ffffff',
                            }
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#728cff',
                                fontSize: '12px',
                            }}
                        >
                            search
                        </Typography>
                    </Button>
                </Stack>
            )}
                {matches == false && (
                    <Stack
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            flexGrow: 1,
                            }}
                    >
                        <Link to='/'>
                            {props.activo == 0 ? (
                                <Typography
                                    sx={{
                                        color: '#ffffff',
                                        cursor: 'pointer',
                                        padding: '0px 20px',
                                        fontSize: '18px',
                                        transition: '.4s',
                                        border: '1px solid #efefef',
                                        '&:hover':{
                                            fontSize: '19px',
                                        }
                                    }}
                                    >
                                    Home
                                </Typography>
                            ) : (
                                <Typography
                                    sx={{
                                        color: '#ffffff',
                                        cursor: 'pointer',
                                        padding: '0px 20px',
                                        fontSize: '18px',
                                        transition: '.4s',
                                        '&:hover':{
                                            fontSize: '19px',
                                        }
                                    }}
                                    >
                                    Home
                                </Typography>
                            )}
                        </Link>
                        <Link to='/team'>
                            {props.activo == 1 ? (
                                
                                <Typography
                                sx={{
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '0px 20px',
                                    fontSize: '18px',
                                    transition: '.4s',
                                    border: '1px solid #efefef',
                                        '&:hover':{
                                            fontSize: '19px',
                                        }
                                    }}
                                    >
                                    My Team
                                </Typography>
                            ):(
                                <Typography
                                    sx={{
                                        color: '#ffffff',
                                        cursor: 'pointer',
                                        padding: '0px 20px',
                                        fontSize: '18px',
                                        transition: '.4s',
                                        '&:hover':{
                                            fontSize: '19px',
                                        }
                                    }}
                                    >
                                    My Team
                                </Typography>
                            )}
                        </Link>
                        
                    </Stack>
                )}
        </Stack>
    )
}