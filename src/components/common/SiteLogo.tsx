import '../../css/Common.css';


const SiteLogo = () => {
    return(
        <div className='main'>
            <div className = "logo">
                <a href='/' className='touch'>
                    <h1>사고차차</h1>
                </a>
            </div>
            <div className="login">
                <span>로그인</span>
                <span> / </span>
            <span>회원가입</span>
        </div>
        </div>
        
    );
}

export default SiteLogo;