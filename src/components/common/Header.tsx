
import { Avatar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {

    const userString = sessionStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    return(
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <div className = "flexlogo">
                    <a href='/' className='touch'>
                        <h1>사고차차</h1>
                    </a>
                </div>

                {user ? (
                    <Avatar src="/broken-image.jpg" />
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