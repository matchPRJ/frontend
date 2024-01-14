
import { Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return(
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <div className = "flexlogo">
                    <a href='/' className='touch'>
                        <h1>사고차차</h1>
                    </a>
                </div>

                <Button variant="contained" size="large" href="/login">
                    로그인
                </Button>

            </Toolbar>  
            </React.Fragment>
    );
}

export default Header;