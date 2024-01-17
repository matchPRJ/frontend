import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Search from '../../img/car_search.jpg';
import Accident from '../../img/car_recall.jpg';
import Recommend from '../../img/car_recommend.jpg';
import Info from '../../img/car_info.jpg';
import Community from '../../img/car_community.jpg';
import '../../css/MainCarousel.css';


const MainView = () => {
    return(
        <div className='CarouselDiv'>
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={3500}>
                <div className='div1'>
                    <img src={Search} alt="Search"/>
                    <p className='Text1'>판매 비교 서비스</p>
                    <span className='Explan1'>🔍 판매 비교 기능 소개<br/><br/>
                        1️⃣ 정확한 필터링<br/>
                        차량의 브랜드, 모델, 연식, 주행 거리, 가격대 등 다양한 옵션으로 검색할 수 있어, 필요한 조건에 맞춰 정확한 결과를 얻을 수 있습니다.
                        <br/><br/>
                        2️⃣ 시간 절약<br/>
                        수많은 중고차 중에서 원하는 옵션을 선택하여 검색하므로, 차량을 일일이 확인하며 비교하는 데 소요되는 시간을 단축할 수 있습니다.
                        <br/><br/>
                        3️⃣ 맞춤 추천<br/>
                        자신이 원하는 옵션을 선택하면, 해당 조건에 맞는 중고차 목록이 제공되어 더욱 신속하게 비교 차량을 찾을 수 있습니다.</span>
                    <a href="/search" className='touch'>
                        <button className='Button'>자세히 살펴보기</button>
                    </a>
                </div>
                <div className='div3'>
                    <img src={Accident} alt="Accident"/>
                    <p className='Text2'>사고 비율 측정 서비스</p>
                    <span className='Explan2'>🔍 사고 비율 측정 서비스 소개<br/><br/>
                        1️⃣ 사고 환경 입력<br/>
                        서비스를 이용하는 운전자는 특정 상황에서의 사고 비율을 측정하기 위해 사고가 발생할 환경 조건을 입력합니다. 
                        예를 들어 도로 환경, 교통 상황 등을 고려하여 사고 환경을 세밀하게 설정할 수 있습니다.
                        <br/><br/>
                        2️⃣ 정확한 비율 측정<br/>
                        입력된 사고 환경 조건을 기반으로 서비스는 해당 조건에서의 차량 사고 발생 가능성을 정확하게 측정합니다. 
                        통계적인 분석과 머신러닝 알고리즘을 활용하여 사고의 원인 및 잘못된 비율을 예측하고 제시합니다.</span>
                    <a href="/" className='touch'>
                        <button className='Button'>자세히 살펴보기</button>
                    </a>
                </div>
                <div className='div2'>
                    <img src={Recommend} alt="Recommend"/>
                    <p className='Text3'>보험 추천 서비스</p>
                    <span className='Explan3'>🔍 보험 추천 기능 소개<br/><br/>
                        1️⃣ 개인 정보 입력<br/>
                        서비스를 이용하는 사용자는 자신의 나이, 차종, 주행거리 등과 같은 정보를 입력합니다. 
                        이를 통해 사용자의 운전 환경과 차량 특성을 정확하게 파악하여 맞춤형 보험 추천을 제공합니다.
                        <br/><br/> 
                        2️⃣ 최저 보험료 검색<br/>
                        사용자가 입력한 정보를 기반으로 서비스는 다양한 보험사의 상품을 분석하여 가장 낮은 보험료를 제공하는 보험사를 찾아줍니다. 
                        이를 통해 사용자는 저렴한 가격에 최적의 보험을 선택할 수 있습니다.
                        <br/><br/>
                        3️⃣ 맞춤 추천<br/> 
                        사용자에게 다양한 보험사의 추천 결과를 제시합니다. 
                        최종적으로 사용자가 선택한 옵션에 따라 가장 많이 언급된 보험사를 추천하여 보험 가입 결정을 돕습니다.
                    </span>
                    <a href="/insurance" className='touch'>
                        <button className='Button'>자세히 살펴보기</button>
                    </a>
                </div>
                <div className='div2'>
                    <img src={Info} alt="Info"/>
                    <p className='Text4'>시설 위치 정보 서비스</p>
                    <span className='Explan4'>🔍 시설 위치 정보 서비스 소개<br/><br/>
                        1️⃣ 주요 시설 목록 제공<br/> 
                        서비스는 근처에 위치한 다양한 주요 시설을 나열하여 제공합니다. 
                        주유소, 병원, 카센터 등 다양한 종류의 시설 정보를 한눈에 확인할 수 있어 사용자의 편의를 도모합니다.
                        <br/><br/>
                        2️⃣ 위치 기반 검색 및 지도 표시<br/>
                        사용자는 현재 위치를 기반으로 원하는 시설을 쉽게 찾을 수 있습니다. 
                        지도를 통해 시설들의 위치를 시각적으로 확인하고, 가장 가까운 시설을 선택할 수 있습니다.
                        <br/><br/>
                        3️⃣ 금액 및 평점 비교<br/>
                        주유소의 경우는 가격 정보를, 병원이나 카센터의 경우는 서비스 평점을 확인할 수 있습니다. 
                        이를 통해 사용자는 비교적 저렴한 가격이나 좋은 서비스를 제공하는 시설을 선택할 수 있습니다. 
                    </span>
                    <a href="/" className='touch'>
                        <button className='Button'>자세히 살펴보기</button>
                    </a>
                </div>
                <div className='div2'>
                    <img src={Community} alt="Community"/>
                    <p className='Text5'>커뮤니티 게시판</p>
                    <span className='Explan5'>
                        📣 자동차 커뮤니티 게시판 서비스 소개<br/><br/>
                        1️⃣ 정보 공유와 소통<br/>
                        다른 자동차 애호가들과 함께 정보를 공유하고 소통할 수 있습니다. 
                        최신 자동차 트렌드, 운전 팁, 유지 보수 꿀팁 등 다양한 주제로 의견을 나누며, 소중한 경험을 공유할 수 있습니다.
                        <br/><br/>
                        2️⃣ 전문적인 조언과 도움<br/>
                        자동차 전문가들과 열정적인 커뮤니티 구성원들이 함께하는 게시판에서 전문적인 조언과 
                        도움을 받을 수 있습니다. 궁금한 사항이나 문제가 있을 때 다양한 의견과 해결책을 얻어 자신의 차량 관리를 보다 
                        효과적으로 할 수 있습니다.
                    </span>
                    <a href="/community" className='touch'>
                        <button className='Button'>자세히 살펴보기</button>
                    </a>
                </div>
            </Carousel>
        </div>
    );
}

export default MainView;