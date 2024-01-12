export interface Option {
  value: string;
  label: string;
}

export const tagOptions: Option[] = [
  { value: '', label: '전체' },
  { value: '국산', label: '국산' },
  { value: '수입', label: '수입' },
]
  
export const typeOptions: Option[] = [
  { value: '', label: '전체' },
  { value: '경차', label: '경차' },
  { value: '소형차', label: '소형차' },
  { value: '준중형차', label: '준중형차' },
  { value: '중형차', label: '중형차' },
  { value: '대형차', label: '대형차' },
  { value: 'RV', label: 'RV' },
  { value: '승합차', label: '승합차' },
  { value: '스포츠카', label: '스포츠카' },
  { value: 'SUV', label: 'SUV' },
];
  
export const oilOptions: Option[] = [
  { value: '', label: '전체' },
  { value: '가솔린', label: '가솔린' },
  { value: '디젤', label: '디젤' },
  { value: '전기', label: '전기' },
  { value: 'LPG', label: 'LPG' },
];

const brand1 = ['기아', '현대', '한국GM', '르노코리아', '제네시스', '쌍용', '쉐보레'];
const brand2 = ['벤츠', 'BMW', '아우디', '폭스바겐', '랜드로버', '볼보', '포르쉐',
  '랙서스', '지프', '재규어', '포드', '푸조', '도요타', '인피니티', '마세라티', '닛산',
  '혼다', '링컨', '캐딜락', '테슬라', '크라이슬러', '시트로엥', '벤틀리', '피아트', '쉐보레',
  '닷지', '페라리', '스마트', '람보르기니', '허머', '롤스로이스', '미쯔비시', '중한자동차',
  '스즈키', '사브', '애스턴마틴', '스바루', '동풍자동차', '로버', 'GMC', '다이하쓰', '맥라렌',
  '폴스타', '마쯔다', '마이바흐', '폰티악', 'LEVC'];

export const brandOptions: Option[] = [
  { value: '', label: '전체' },
  ...brand1.map(brand => ({ value: brand, label: brand })),
  ...brand2.map(brand => ({ value: brand, label: brand })),
];

const year = ['최소', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998'
, '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009'
, '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
, '2021', '2022', '2023', '최대'];

export const yearOptions: Option[] = [
  ...year.map(year => ({ value: year, label: year})),
];

const km = ['최소', '10000km', '20000km', '30000km', '40000km', '50000km', '60000km', '70000km', '80000km', '90000km'
, '100000km', '110000km', '120000km', '130000km', '140000km', '150000km', '160000km', '170000km', '180000km', '190000km'
, '200000km','최대'];

export const kmOptions: Option[] = [
  ...km.map(km => ({ value: km, label: km})),
];