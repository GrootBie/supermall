import {requestbase} from "@/network/request";

export function getlogin(userinfo) {
    // return requestbase({
    //     url:'/login',
    //     method:'post',
    //     data:userinfo
    // })
    return new Promise((resolve,reject)=>{
        const data = {'token':'abcdefg'}
        if (userinfo.username==='bie'){
            resolve(data)
        }else {
            reject()
        }

    })


}