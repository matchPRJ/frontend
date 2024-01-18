
import { Avatar, Button, Divider, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {

    //화면 이동 네비게이션
    const navigate = useNavigate();

    // 세션 스토리지에 저장된 유저 정보 가져오기
    const userString = sessionStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    // 메뉴 오픈 여부 및 위치 확인 
    const [menuOpen, setMenuOpen] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menuOpen);

    // 메뉴 오픈 위치 저장
    const menuClick = (event: React.MouseEvent<HTMLElement>) => {
        setMenuOpen(event.currentTarget);
      };
    // 메뉴 위치 초기화
    const menuClose = () => {
        setMenuOpen(null);
      };
    // 로그아웃 처리
    const logout = () =>{
        //세션 스토리지 초기화
        sessionStorage.clear();
        // 로그인 화면으로 이동
        navigate('/login');
    }
    return(
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <div className = "flexlogo">
                    <a href='/' className='touch'>
                        <h1>사고차차</h1>
                    </a>
                </div>

                {user ? (
                    <>
                    <IconButton
                        onClick={menuClick}
                        size="small"
                        sx={{ ml: 2 }}
                    >
                        <Avatar src="/broken-image.jpg" />
                        <div>{user.nickname}</div>
                    </IconButton>

                    <Menu
                    anchorEl={menuOpen}
                    id="account-menu"
                    open={open}
                    onClose={menuClose}
                    onClick={menuClose}
                    >
                        <MenuItem onClick={menuClose}>
                            마이페이지
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={()=>{logout()}}>
                            로그아웃
                        </MenuItem>
                    </Menu>
                </>
                ) : (
                    <Button variant="contained" size="large" href="/login">
                        로그인
                    </Button>
                )}
            </Toolbar>  
            </React.Fragment>
    );
}

export default Header;