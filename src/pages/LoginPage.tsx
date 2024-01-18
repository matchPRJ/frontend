import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Link } from '@mui/material';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import axios from 'axios';
import Header from '../components/common/Header';
import { useNavigate } from "react-router-dom";


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginPage() {

  const [loginFailed, setLoginFailed] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('id'),
      password: data.get('password'),
    });

    axios.post("http://localhost:6400/user/login", {
      id: data.get('id'),
      password: data.get('password')
    })
    .then((Response) => {
      console.log(Response.data)
      if(Response.data.id != null){
        console.log("로그인 성공")
        setLoginFailed(false);
        sessionStorage.setItem('user', JSON.stringify(Response.data));
        const userString = sessionStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;
        console.log(user);
        navigate('/');
      }else{
        console.log("로그인 실패");
        setLoginFailed(true);
      }
    }) 
    .catch((Error) => {console.log(Error)})
  };

  return (
        <>
        <Container maxWidth="lg">
            <Header/>
        </Container>
        
        <Container component="main" maxWidth="xs">
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                {/* 로그인 이미지 */}
                <Avatar sx={{width: 60, height: 60}}/>

                {/* 로그인 텍스트 */}
                <h1><b>로그인</b></h1>

                {/* 로그인 폼 */}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

                    {/* 아이디 텍스트 필드 */}
                    <TextField
                    error={loginFailed}
                    helperText={loginFailed ? "아이디를 확인하세요" : ""}
                    margin="normal"
                    fullWidth
                    id="id"
                    label="아이디"
                    name="id"
                    />

                    {/* 비밀번호 텍스트 필드 */}
                    <TextField
                    error={loginFailed}
                    helperText={loginFailed ? "비밀번호를 확인하세요" : ""}
                    margin="normal"
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    />

                    {/* 로그인 정보 기억 할건지 선택 상자 */}
                    {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="로그인 정보 기억하기"
                    /> */}

                    {/* 로그인 버튼 */}
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    로그인
                    </Button>

                    {/* 로그인 밑 화면 분할 */}
                    <Grid container>
                    <Grid item xs>
                        {/* 비밀번호 찾기 */}
                        <Link href="#" variant="body2">
                        비밀번호를 잊어버리셨나요?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            아직 회원이 아니신가요?
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>

                {/* Material UI 표시 */}
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
  );
}