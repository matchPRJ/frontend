import '../../css/Common.css';

const NavBar = () => {
    return(
        <div className="bar">
            <a href='/search' className='touch'>
                <span className="barSpan">판매 비교</span>
            </a>
            <a href='/accident' className='touch'>
                <span className="barSpan">사고 비율</span>
            </a>
            <a href='/' className='touch'>
                <span className="barSpan">보험 추천</span>
            </a>
            <a href='/' className='touch'>
                <span className="barSpan">시설 위치</span>
            </a>
            <a href='/community' className='touch'>
                <span className="barSpan">커뮤니티</span>
            </a>
        </div>
    );
}

export default NavBar;