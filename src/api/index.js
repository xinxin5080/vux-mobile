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
