import '../../../css/Community.css';

interface ReadPageProps {
    btitle: string;
    bcontent: string;
    bnickname: string;
    modDate: string;
    link?: string;
}

const ReadPage: React.FC<ReadPageProps> = ({btitle, bcontent, bnickname, modDate, link}) => {
    return(
        <div className="readPage">
            <div className="readButtons">
                <text className='font1'>수정</text>
                <text>|</text>
                <text className='font2'>삭제</text>
            </div>
            <text className='readTitle'>{btitle}</text>
            <div className='readName'>
                <text>작성자: [{bnickname}]</text>
                <text>[{modDate}]</text>
            </div>
            <div className='readArea'>
                {link && <img src={link} alt="게시물 이미지" />}
                <text>{bcontent}</text>
            </div>
        </div>
    );
}

export default ReadPage;