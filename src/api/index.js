import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api'
// 新闻列表
export const newslist = () => axios.get(`/getnewslist`).then(res => res.data)
// 新闻详情
export const newsdetails = id => axios.get(`/getnew/${id}`).then(res => res.data)
// 评论列表
export const commentlist = (id, pageindex) => axios.get(`/getcomments/${id}`, { params: { pageindex } }).then(res => res.data)
// 发表评论
export const publish = (id, content) => axios.post(`/postcomment/${id}`, content).then(res => res.data)
// 获取图片列表顶部
export const imgstop = () => axios.get(`/getimgcategory`).then(res => res.data)
// 根据分类获取图片
export const imgclassify = id => axios.get(`/getimages/${id}`).then(res => res.data)
// 图文详情小图和商品列表轮播图
export const imgmin = id => axios.get(`/getthumimages/${id}`).then(res => res.data)
// 图片描述
export const imgdescribe = id => axios.get(`/getimageInfo/${id}`).then(res => res.data)
// 商品列表
export const goodslist = pageindex => axios.get(`getgoods`, { params: { pageindex } }).then(res => res.data)
// 获取商品价格及描述
export const goodsdescribe = id => axios.get(`/goods/getinfo/${id}`).then(res => res.data)
// 图文
export const goodstxt = id => axios.get(`/goods/getdesc/${id}`).then(res => res.data)
