import { Stack, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

interface Props {
    activo: number,
}

export default function MuiMenu(props: Props){
    
    const matches = useMediaQuery('(max-width:600px)');
    
    return(
        <Stack
            sx={{
                backgroundColor: '#728cff',
                width: '100%',
                padding: '20px',
                paddingLeft: '60px',
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
                    color: '#efefef',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    flexWrap: 'wrap',
                    fontSize: '22px',
                }}
                variant='h1'
            >
                pokédex
            </Typography>
                {matches == false && (
                    <Stack
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            // backgroundColor: 'orange',
                            flexGrow: 2,
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