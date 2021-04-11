import {post} from "@/http/index";

export const recharge = data => post('/order/addRechargeOrdergduong.do', data)
