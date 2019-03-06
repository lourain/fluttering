import request from '../request'


export const fetchPost = () => {
  return function (dispatch) {
    request('get', '/api/directory').then(res => 
      dispatch(fetch_data(res))
    )
    
  }
}
export const getDirectory = async () => {
  return {
    type: 'directory',
    data: await request('get', 'http://localhost:9999/api/directory')
  }
}
export const onincrement =  () => {
  return {
    type:'increment'
  }
  
}

export const fetch_data = (data) => {
  
  return {
    type: 'receive_data',
    data: data
  }
}