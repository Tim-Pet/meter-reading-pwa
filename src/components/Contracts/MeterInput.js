import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import grey from '@material-ui/core/colors/grey';

const MeterInput = (props) => {

    const [value, setValue] = useState("")
    //const [isUpdated, setIsUpdated] = useState(false)

    const handleOnChange = (e) => {
        setValue(e.target.value);
        //useState is asynchron --> Solution: implement a check-btn, make it useful by connection a plausible check to it & change data only onClick --> create custom withPromiseHook e.g. https://ysfaran.github.io/blog/post/0002-use-state-with-promise/
        //==> Update gets triggered via useEffect, as simpler workaround of asynchron setState 
    }

    useEffect(() => {
        if(value) {
            changeData();
        }
    }, [value])

    const changeData = () => {
        var newData=props.data;
        newData.contracts[props.contractNo].meterReadingDetails[0].resultNew.result=value;
        props.setData(newData);
    }

    return (
        <div>
            <StyledInput type="text" onChange={handleOnChange} value={value} placeholder="z.B.: 10200" confirmationNeeded={props.confirmationNeeded} isConfirmed={props.isConfirmed}/>
        </div>
    )
}

export default MeterInput

const StyledInput = styled.input`
    height: 30px;
    border: ${({confirmationNeeded, isConfirmed}) => ((confirmationNeeded && !isConfirmed) ? "1px solid red" : "1px solid #587494")};
    border-radius: 10px;
    padding-left: 5px;
    width: 100%;
    color: #002C5D;
    background-color: #FBFBFB;
    text-align: center;
    position: relative;

    &::placeholder {
        font-weight: 300;
    }
`