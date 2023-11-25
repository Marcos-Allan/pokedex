import { Typography, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { common } from '@mui/material/colors';

interface Colors {
    normal: string | any,
	fire: string | any,
	water: string | any,
	electric: string | any,
	grass: string | any,
	ice: string | any,
	fighting: string | any,
	poison: string | any,
	ground: string | any,
	flying: string | any,
	psychic: string | any,
	bug: string | any,
	rock: string | any,
	ghost: string | any,
	dragon: string | any,
	dark: string | any,
	steel: string | any,
	fairy: string | any,
}

const colours:Colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
}

interface Props {
    id: number,
    img: string,
    name: string,
    type1: string,
    type2: string,
    key: any,
    isAdd: boolean,
    onDelete: any,
    onAdd: any
}
export default function Card(props: Props){
    
    const bg1: any = colours[props.type1 as any]
    const bg2: any = colours[props.type2 as any]

    return(
        <Box
            key={props.key}
            sx={{
                width: {
                    xs: '220px',
                    sm: '240px',
                    md: '290px',
                    lg: '200px',
                    xl: '290px',
                },
                height:{
                    xs: '200px',
                    sm: '220px',
                    md: '370px',
                    lg: '370px',
                    xl: '370px',
                },
                margin: '4px 4px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #000000',
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                paddingBottom:{
                    xs: '40px',
                    sm: '30px',
                    md: '20px',
                    lg: '20px',
                    xl: '20px',
                }
            }}
        >
            {props.isAdd === true ? (
                <AddIcon
                    onClick={props.onAdd}
                    sx={{
                        position: 'absolute',
                        top: '4%',
                        right: '4%',
                        fontSize: '22px',
                        cursor: 'pointer',
                        color: common.black,
                        transition: '.3s',
                        '&:hover':{
                            color: '#72ff74',
                            fontSize: '28px',
                            right: '3%',
                            top: '3%',
                        },
                    }}
                />
            ) : (
                <DeleteIcon
                    onClick={props.onDelete}
                    sx={{
                        position: 'absolute',
                        top: '4%',
                        right: '4%',
                        fontSize: '22px',
                        cursor: 'pointer',
                        color: common.black,
                        transition: '.3s',
                        '&:hover':{
                            color: '#fa2d2d',
                            fontSize: '28px',
                            right: '3%',
                            top: '3%',
                        },
                    }}
                />
            )}
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '17px',
                }}
                variant='subtitle2'
            >
                #{props.id}
            </Typography>
            <img className='pokImg' src={props.img} />
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '17px',
                    textTransform: 'capitalize'
                }}
                variant='subtitle2'
            >
            {props.name}
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    position: 'absolute',
                    bottom: 0,
                }}
            >
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: '17px',
                        backgroundColor: bg1,
                        flexGrow:1,
                        padding: '5px 0px',
                        textTransform: 'capitalize',
                        color: '#ffffff',
                    }}
                    variant='subtitle2'
                    >
                {props.type1}
                </Typography>
                {props.type2 !== '' && (
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontSize: '17px',
                            backgroundColor: bg2,
                            flexGrow:1,
                            padding: '5px 0px',
                            textTransform: 'capitalize',
                            color: '#ffffff',
                        }}
                        variant='subtitle2'
                        >
                    {props.type2}
                    </Typography>
                )}
            </Box>
        </Box>
    )
}