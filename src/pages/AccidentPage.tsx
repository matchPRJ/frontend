import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import React from "react";
import { targetData, choiceType, result, resultType } from "../components/Data/AccidentData";

const AccidentPage = () => {

    const [firstChoice, setFirstChoice] = React.useState<choiceType>('');
    const [seocundChoice, setSecoundChoice] = React.useState<choiceType>('');
    const [thirdChoice, setThirdChoice] = React.useState<choiceType>('');
    const [fourthChoice, setFourthChoice] = React.useState<choiceType>('');
    const [fifthChoice, setFifthChoice] = React.useState<choiceType>('');
    const [resultChoice, setResultChoice] = React.useState<resultType>('');
    let [resultTitle, setResultTitle] = React.useState('');

    const firstChoiceChange = (event: SelectChangeEvent) => {
        setFirstChoice(event.target.value as choiceType);
        setSecoundChoice('');
        setThirdChoice('');
        setFourthChoice('');
        setFifthChoice('');
        setResultChoice('');
    };

    const seocundChoiceChange = (event: SelectChangeEvent) => {
        setSecoundChoice(event.target.value as choiceType);
        setThirdChoice('');
        setFourthChoice('');
        setFifthChoice('');
        setResultChoice('');
    }

    const thirdChoiceChange = (event: SelectChangeEvent) => {
        setThirdChoice(event.target.value as choiceType);
        setFourthChoice('');
        setFifthChoice('');
        setResultChoice('');
    }

    const fourthChoiceChange = (event: SelectChangeEvent) => {
        setFourthChoice(event.target.value as choiceType);
        resultChoiceChange(event.target.value as resultType);
        setFifthChoice('');
        console.log(event.target.value as choiceType);
        console.log(event.target.value as choiceType in targetData);
    }

    const fifthChoiceChange = (event: SelectChangeEvent) => {
        setFifthChoice(event.target.value as choiceType);
        resultChoiceChange(event.target.value as resultType);
    }

    const resultChoiceChange = (choiceData : resultType) => {
        if(!(choiceData in targetData)) {
            console.log(choiceData);
            setResultChoice(choiceData);
        } else{
            setResultChoice('');
        }
    }

    
    const handleMenuItemClick = (title : string) => {
        setResultTitle(title); 
      };


    return(
        <>
            <Container maxWidth="lg">
                <Header/>
            </Container>
                <NavBar/>
            <Container maxWidth="lg">

            <Typography variant="h4" align="center" sx={{mt:5}}>
                과실 비율 조회
            </Typography>
                
            <FormControl fullWidth sx={{mt:2}}>
                <InputLabel id="first-label">
                    보행자, 자동차(이륜차), 자전거(농기계) 중 선택
                </InputLabel>
                    <Select
                        labelId="first-label"
                        id="first-select"
                        value={firstChoice}
                        onChange={firstChoiceChange}
                        label={firstChoice}
                    >
                        {targetData.target.map((target)=>(
                                <MenuItem value={target.value} >{target.title}</MenuItem>    
                            ))}
                    </Select>
            </FormControl>
            
            <FormControl fullWidth sx={{mt:2}}>
                <InputLabel id="secound-label">
                    횡단보도, 교차로, 진행방향 등 선택
                </InputLabel>
                    <Select
                        labelId="secound-label"
                        id="secound-select"
                        value={seocundChoice}
                        onChange={seocundChoiceChange}
                    >
                        {firstChoice !== '' && targetData[firstChoice].map((target)=>(
                                <MenuItem value={target.value}>{target.title}</MenuItem>    
                            ))}
                    </Select>
            </FormControl>

            <FormControl fullWidth sx={{mt:2}}>
                <InputLabel id="third-label">
                    신호 지시 중앙선, 진로변경, 앞지르기 등 선택
                </InputLabel>
                    <Select
                        labelId="third-label"
                        id="third-select"
                        value={thirdChoice}
                        onChange={thirdChoiceChange}
                    >
                        {seocundChoice !== '' && targetData[seocundChoice].map((target)=>(
                                <MenuItem value={target.value}>{target.title}</MenuItem>    
                            ))}
                    </Select>
            </FormControl>

            <FormControl fullWidth sx={{mt:2}}>
                <InputLabel id="fourth-label">
                    직진, 좌회전, 우회전 유턴 등 선택
                </InputLabel>
                    <Select
                        labelId="fourth-label"
                        id="fourth-select"
                        value={fourthChoice}
                        onChange={fourthChoiceChange}
                    >
                        {thirdChoice !== '' && targetData[thirdChoice].map((target)=>(
                                <MenuItem value={target.value} onClick={() => handleMenuItemClick(target.title)}>{target.title}</MenuItem>    
                            ))}
                    </Select>
            </FormControl>

            <FormControl fullWidth sx={{mt:2}}>
                <InputLabel id="fifth-label">
                    일부 인정기준 세부사항 추가 선택
                </InputLabel>
                    <Select
                        labelId="fifth-label"
                        id="fifth-select"
                        value={fifthChoice}
                        onChange={fifthChoiceChange}
                    >
                        {(fourthChoice in targetData) && fourthChoice !== '' && targetData[fourthChoice].map((target)=>(
                                <MenuItem value={target.value} onClick={() => handleMenuItemClick(target.title)}>{target.title}</MenuItem>    
                            ))}
                    </Select>
            </FormControl>

            { resultChoice !== ''  && 
                <>
                <Typography variant="h4" align="center" sx={{mt:5}}>
                    결과
                </Typography>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">진행경로</TableCell>
                            <TableCell align="center">
                                {firstChoice.valueOf() === 'people' && '보행자 기본과실'}
                                {firstChoice.valueOf() === 'car' && 'A 기본과실'}
                                {firstChoice.valueOf() === 'bycle' && '자전거 기본과실'}
                            </TableCell>
                            <TableCell align="center">
                                {firstChoice.valueOf() === 'car' ? 'B 기본과실' : '자동차 기본과실'}
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    {result[resultChoice].map((target)=>(          
                        <TableRow
                        key={target.aValue}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center">
                            {resultTitle}
                        </TableCell>
                        <TableCell align="center">{target.aValue}</TableCell>
                        <TableCell align="center">{target.bValue}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </>
            }
            </Container>
        </>
    )
}

export default AccidentPage;