import {requestbase} from "@/network/request";
// var res
export function gethomemultidata(){
    const res =  requestbase({
        url:'/home/multidata'
    }).then(result =>{
        result.data.keywords.list=[{'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg', 'link': 'https:////h5.m.jd.com/rn/3LmeNuQDfT1nN8qZS4jZoZQMFeV7/index.html', 'title': '京东超市'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg', 'link': 'https:////pro.m.jd.com/mall/active/8tHNdJLcqwqhkLNA8hqwNRaNu5f/index.html', 'title': '数码电器'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg', 'link': 'https:////pro.m.jd.com/mall/active/3qMkfmPMc55RTahmSSpwwuxVrYMG/index.html', 'title': '京东服饰'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg', 'link': 'https:////pro.m.jd.com/mall/active/4P9a2T9osR9JvtzHVaYTPvsecRtg/index.html', 'title': '京东生鲜'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg', 'link': 'https:////daojia.jd.com/html/index.html?channel=jdapp', 'title': '京东到家'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg', 'link': 'https:////prodev.m.jd.com/mall/active/N2p5dHzdwxnAqp182PVJmc5L5Se/index.html', 'title': '充值缴费'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/199143/10/8979/4223/614599f5E45cd5464/d15aa650a0ebe596.png!q70.jpg', 'link': 'https:////wqs.jd.com/order/orderlist_jdm.shtml?sceneval=2', 'title': '物流查询'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg', 'link': 'https:////coupon.m.jd.com/center/getCouponCenter.action', 'title': '领券'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/196711/35/12751/6996/60ec1000E21b5bab4/38077313cb9eac4b.png!q70.jpg', 'link': 'https:////active.jd.com/forever/cashback/?channellv=mapp', 'title': '领金贴'}, {'image': 'https:////m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg', 'link': 'https:////plus.m.jd.com/index', 'title': 'PLUS会员'}]
        return new Promise((resolve, reject)=>{
            resolve(result)
        })
    })
        return res
}

export function gettabtitle() {
    return new Promise((resolve, reject)=>{
        const titles = [['流行','pop'],['时尚','new'],['精选','sell']]
        resolve(titles)
    })
}
export function getdetailinfo(iid) {
    return requestbase({
        url:'/detail',
        params:{
            iid
        },
    })
}

export function gethomedata(type,page) {
    return requestbase({
        url:'/home/data',
        params:{
            type,page
        },
    })

}