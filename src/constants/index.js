import d01 from '@/assets/images/meal-plan/d01.jpg';
import d02 from '@/assets/images/meal-plan/d02.jpg';
import l01 from '@/assets/images/meal-plan/l01.jpg';
import l02 from '@/assets/images/meal-plan/l02.jpg';
import l03 from '@/assets/images/meal-plan/l03.jpg';
import m01 from '@/assets/images/meal-plan/m01.jpg';
import m02 from '@/assets/images/meal-plan/m02.jpg';
import s01 from '@/assets/images/meal-plan/s01.jpg';
import column1 from '@/assets/images/blogs/column-1.jpg';
import column2 from '@/assets/images/blogs/column-2.jpg';
import column3 from '@/assets/images/blogs/column-3.jpg';
import column4 from '@/assets/images/blogs/column-4.jpg';
import column5 from '@/assets/images/blogs/column-5.jpg';
import column6 from '@/assets/images/blogs/column-6.jpg';
import column7 from '@/assets/images/blogs/column-7.jpg';
import column8 from '@/assets/images/blogs/column-8.jpg';
import iconCup from '@/assets/images/icons/icon_cup.png';
import iconKnife from '@/assets/images/icons/icon_knife.png';
import myRecommend1 from '@/assets/images/news/MyRecommend-1.jpg';
import myRecommend2 from '@/assets/images/news/MyRecommend-2.jpg';
import myRecommend3 from '@/assets/images/news/MyRecommend-3.jpg';

const ENV = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
};

const StorageKey = {
  authUser: '@auth:user',
};

const ROUTES = {
  ROOT_PATH: '/',
  LOGIN_PATH: '/signin',
  RECORD_PATH: '/my-records',
  COLUMN_PATH: '/columns',
};

export const HEADER = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'Contact', url: '/contact' },
  { id: 3, name: 'Privacy Policy', url: '/privacy-policy' },
];

const ColumnsList = [
  {
    id: 1,
    date: '2021.05.17',
    time: '23:25',
    tags: ['魚料理', '和食', 'DHA'],
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    image: column1,
  },
  {
    id: 2,
    date: '2021.05.17',
    time: '23:25',
    tags: ['魚料理', '和食', 'DHA'],
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    image: column2,
  },
  {
    id: 3,
    date: '2021.05.17',
    time: '23:25',
    tags: ['魚料理', '和食', 'DHA'],
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    image: column3,
  },
  {
    id: 4,
    date: '2021.05.17',
    time: '23:25',
    tags: ['魚料理', '和食', 'DHA'],
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    image: column4,
  },
  {
    id: 5,
    date: '2021.05.17',
    time: '23:25',
    tags: ['魚料理', '和食', 'DHA'],
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    image: column5,
  },
  {
    id: 6,
    date: '2021.05.17',
    time: '23:25',
    tags: ['魚料理', '和食', 'DHA'],
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    image: column6,
  },
  {
    id: 7,
    date: '2021.05.17',
    time: '23:25',
    tags: ['魚料理', '和食', 'DHA'],
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    image: column7,
  },
  {
    id: 8,
    date: '2021.05.17',
    time: '23:25',
    tags: ['魚料理', '和食', 'DHA'],
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    image: column8,
  },
];

const CardData = [
  { id: 1, title: 'RECOMMENDED COLUMN', subtitle: 'オススメ' },
  { id: 2, title: 'RECOMMENDED DIET', subtitle: 'ダイエット' },
  { id: 3, title: 'RECOMMENDED BEAUTY', subtitle: '美容' },
  { id: 4, title: 'RECOMMENDED HEALTH', subtitle: '健康' },
];

const Filter = [
  { id: 1, label: 'Morning', icon: iconKnife },
  { id: 2, label: 'Lunch', icon: iconKnife },
  { id: 3, label: 'Dinner', icon: iconKnife },
  { id: 4, label: 'Snack', icon: iconCup },
];

const Meals = [
  { id: 1, name: 'Morning', time: '05.20', image: m01 },
  { id: 2, name: 'Lunch', time: '05.20', image: l03 },
  { id: 3, name: 'Dinner', time: '05.20', image: d01 },
  { id: 4, name: 'Snack', time: '05.20', image: l01 },
  { id: 5, name: 'Morning', time: '05.21', image: m02 },
  { id: 6, name: 'Lunch', time: '05.21', image: l02 },
  { id: 7, name: 'Dinner', time: '05.21', image: d02 },
  { id: 8, name: 'Snack', time: '05.21', image: s01 },
];

const DataLineChart = [
  { id: 1, month: '6月', value1: 100, value2: 100 },
  { id: 2, month: '7月', value1: 93, value2: 97 },
  { id: 3, month: '8月', value1: 80, value2: 70 },
  { id: 4, month: '9月', value1: 79, value2: 86 },
  { id: 5, month: '10月', value1: 66, value2: 80 },
  { id: 6, month: '11月', value1: 65, value2: 70 },
  { id: 7, month: '12月', value1: 63, value2: 83 },
  { id: 8, month: '1月', value1: 50, value2: 71 },
  { id: 9, month: '2月', value1: 43, value2: 63 },
  { id: 10, month: '3月', value1: 30, value2: 58 },
  { id: 11, month: '4月', value1: 25, value2: 48 },
  { id: 12, month: '5月', value1: 20, value2: 52 },
];

const FilterItems = [
  { id: 1, label: '日', color: 'bg-white-light text-yellow-500' },
  { id: 2, label: '週', color: 'bg-white-light text-yellow-500' },
  { id: 3, label: '月', color: 'bg-white-light text-yellow-500' },
  { id: 4, label: '年', color: 'bg-yellow-500 text-white-light' },
];

const RecordFilterData = [
  {
    id: 1,
    label: 'BODY RECORD',
    description: '自分のカラダの記録',
    image: myRecommend1,
  },
  {
    id: 2,
    label: 'MY EXERCISE',
    description: '自分の運動の記録',
    image: myRecommend2,
  },
  {
    id: 3,
    label: 'MY DIARY',
    description: '自分の日記',
    image: myRecommend3,
  },
];

const PAGE_SIZE = 10;

export {
  ENV,
  ROUTES,
  StorageKey,
  PAGE_SIZE,
  ColumnsList,
  CardData,
  Filter,
  Meals,
  DataLineChart,
  FilterItems,
  RecordFilterData,
};
