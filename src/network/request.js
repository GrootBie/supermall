import axios from 'axios'

export function requestbase(config){
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/hy66',
        timeout:5000
    })
  //
  //   instance.interceptors.request.use(config => {
  //   return config
  // }, err => {
  //   // console.log(err);
  // })


    instance.interceptors.response.use(
        (res)=>{
            return res.data
        },
        (error)=>{
            console.log(error)
        }
    )
    return instance(config)
}