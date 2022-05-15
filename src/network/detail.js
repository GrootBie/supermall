import {requestbase} from "@/network/request";

export function getdetailinfo(iid) {
    return requestbase({
        url:'/detail',
        params:{
            iid
        },
    })
}

