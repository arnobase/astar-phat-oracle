import { PhalaApiContext } from '../context/PhalaApiProvider';
import { AstarApiContext } from '../context/AstarApiProvider';
import { useContext } from 'react';
import { Box, Chip, Tooltip } from '@mui/material';

export function ApiStatus(props) {

    const GreenDot = ()=>{
        return <>
            <svg fill="#00b100" width="30px" height="30px" viewBox="0 0 20.00 20.00" xmlns="http://www.w3.org/2000/svg" stroke="#00b100" stroke-width="2">
                <g id="SVGRepo_iconCarrier"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path></g>
            </svg>
        </>
    }
    const RedDot = ()=>{
        return <>
            <svg fill="#b10000" width="30px" height="30px" viewBox="0 0 20.00 20.00" xmlns="http://www.w3.org/2000/svg" stroke="#b10000" stroke-width="2">
                <g id="SVGRepo_iconCarrier"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path></g>
            </svg>
        </>
    }
    const StatusDot = (props)=> {
        if(props.api?._isReady) {
            return <GreenDot/>
        }
        else {
            return <RedDot/>
        }
    }

    const phalaContext = useContext(PhalaApiContext)
    const astarContext = useContext(AstarApiContext)

    const apis={phala:phalaContext, astar:astarContext}
    const api = apis[props.context].api
    const provider = apis[props.context].provider

    const context = props.context.charAt(0).toUpperCase() + props.context.slice(1);
    console.log("Api.isReady",api?._isReady)
    console.log("Api.provider",provider?.endpoint)
    return (<>
        <Tooltip placement="top" title={provider?.endpoint}>
            <Box display="flex" alignItems="center" sx={{marginLeft:"auto"}}>
                <Chip icon={<StatusDot api={api} />} label={context+" testnet"} />
                
            </Box>
        </Tooltip>
    </>);

}