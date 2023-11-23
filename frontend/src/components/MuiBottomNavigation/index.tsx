import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import { common } from '@mui/material/colors';

import GroupsIcon from '@mui/icons-material/Groups';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

interface Props {
    activo: number,
}

export default function MuiBottomNavigation(props: Props){
    
    const value:number = props.activo

    return(

        <Stack
            sx={{
                width: '100%',
                backgroundColor: '#728cff',
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                position: 'fixed',
                bottom: '0px',
                left: '0px',
                padding: '10px 0px'
            }}
        >

            <Stack
                sx={{
                    width: '50px',
                    padding: '4px 6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                <Link
                    to='/'
                    className='textDecoration'
                >
                    {value == 0 ? (
                        <CatchingPokemonIcon
                            sx={{
                                color: common.white,
                                fontSize: '26px',
                                transition: '.2s',
                            }}
                            />
                            ) : (
                        <CatchingPokemonIcon
                            sx={{
                                color: common.black,
                                transition: '.2s',
                            }}
                        />
                    )}
                        {value == 0 && (
                            <Typography
                                sx={{
                                    fontSize: '10px',
                                    textAlign: 'center',
                                    color: common.white,
                                    transition: '.2s',
                                }}
                                variant='subtitle2'
                                >Home</Typography>
                        )}
                </Link>
            </Stack>

            <Stack
                sx={{
                    width: '50px',
                    padding: '4px 6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link
                    to='/team'
                    className='textDecoration'
                >
                    {value == 1 ? (
                        <GroupsIcon
                            sx={{
                                color: common.white,
                                fontSize: '26px',
                                transition: '.2s',
                            }}
                            />
                            ) : (
                        <GroupsIcon
                            sx={{
                                color: common.black,
                                transition: '.2s',
                            }}
                            />
                            )}
                    {value == 1 && (
                        <Typography
                            sx={{
                                fontSize: '10px',
                                textAlign: 'center',
                                color: common.white,
                                transition: '.2s',
                            }}
                            variant='subtitle2'
                        >Team</Typography>
                    )}
                </Link>
            </Stack>
        </Stack>
        
    )
}   