import {requestbase} from "@/network/request";

export function getcategory() {
    return requestbase({
        url:'/category',
    })
}

export function getcategoryinfo(maitKey) {
    return requestbase({
        url: "/subcategory",
        params: {maitKey}
    })
}