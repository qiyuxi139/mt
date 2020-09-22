import axios from '@/axios.js'

const api = {
  getSearchHotWord () {
    return axios.get('api/meituan/header/searchHotWords.json')
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getIStyle () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getGoodList(){
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getClassify(){
    return axios.get('/api/meituan/list/classify.json');
  },
  getAreaList(){
    return axios.get('/api/meituan/list/areaList.json');
  },
  getHotCityList(){
    return axios.get('/api/meituan/city/hot.json');;
  },
  getRecentsCityList(){
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList(){
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition(){
    return axios.get('/api/meituan/city/getPosition.json');
  },
  getAllCityList(){
    return axios.get('/api/meituan/city/cityList.json')
  },
  login(params){
    return axios.get('/api/meituan/login', params)
  },
  register(params){
    return axios.get('/api/meituan/register', params)
  }
}

export default api
