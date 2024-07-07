import axios from 'axios'
export async function getPageList(params) {
  return axios(`/kg-economics/material/pageList`, {
    method: 'GET',
    params
  });
}
export async function getDetail(params) {
  return axios(`/kg-economics/material/detail`, {
    method: 'GET',
    params
  });
}