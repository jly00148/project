import { message } from 'antd';
import * as types  from './actionTypes.js';
import api from 'api';

const getLoadingReqestStartAction = ()=>({
    type:types.LOADING_REQEST_START,
})
const getLoadingReqestDoneAction = ()=>({
    type:types.LOADING_REQEST_DONE,
})
const addCategoriesAction = (payload)=>({
    type:types.ADD_CATEGORIES,
    payload
})
const getSetPageAction = (payload)=>({
    type:types.ADD_CATEGORIES_LIST,
    payload
})


//添加分类
export const getAddAction = (values)=>{
    return (dispatch,getState)=>{
        dispatch(getLoadingReqestStartAction())
        api.addCategories(values)
        .then(result=>{
            if(result.code == 1){
                message.success(result.message,2,function(){
                    window.location.href='/category'//添加完分类后重新刷新使form表单清空
                });//数字代表秒,数字后可传回调
            }
            else{
                message.error(result.message,2);
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试！');
        })
        .finally(()=>{
            dispatch(getLoadingReqestDoneAction())
        })
    }
}

//添加商品页面加载完成需要回传商品分类等级到form表单
export const getLevelCategories = (level)=>{
    return (dispatch,getState)=>{
        api.getLevelCategories(level)
        .then(result=>{
            dispatch(addCategoriesAction(result.data));
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试！');
        })
    }
}

//添加商品页面添加商品成功后回到list页面，要把刚才添加的商品信息展示出来
export const getCategoriesListAction = (page)=>{
    return (dispatch,getState)=>{
        dispatch(getLoadingReqestStartAction())
        api.getCategoriesList({page:page})
        .then(result=>{
            if(result.code == 1){
                dispatch(getSetPageAction(result.data))
            }else{
            message.error('获取首页数据失败，请稍后再试！');
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试！');
        })
        .finally(()=>{
            dispatch(getLoadingReqestDoneAction())
        })

    }
}

//更新分类名称
export const handleUpdateNameAction = (name,id)=>{
    return (dispatch,getState)=>{
        const current = getState().get('category').get('current');
        dispatch(getLoadingReqestStartAction())
        api.updateCategoriesList({name,id,current})
        .then(result=>{
            if(result.code == 1){
                message.success('更新分类名称成功',2);
            }else{
                message.error('获取首页数据失败，请稍后再试！');
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试！');
        })
        .finally(()=>{
            dispatch(getLoadingReqestDoneAction())
        })

    }
}

//更新手机分类名称
export const handleUpdateMobileNameAction = (mobileName,id)=>{
    return (dispatch,getState)=>{
        const current = getState().get('category').get('current');
        dispatch(getLoadingReqestStartAction())
        api.updateCategoriesMobileList({mobileName,id,current})
        .then(result=>{
            if(result.code == 1){
                message.success('更新手机分类名称成功',2);
            }else{
                message.error('获取首页数据失败，请稍后再试！');
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试！');
        })
        .finally(()=>{
            dispatch(getLoadingReqestDoneAction())
        })

    }
}

//更新排序
export const handleUpdateOrderAction = (newOrder,id)=>{
    return (dispatch,getState)=>{
        const page = getState().get('category').get('current');
        dispatch(getLoadingReqestStartAction())
        api.updateCategoriesOrderList(
            {
                order:newOrder,
                id:id,
                page:page
            }
            )
        .then(result=>{
            if(result.code == 1){
                message.success('更新排序成功',2,function(){
                    window.location.href="/category"
                });
            }else{
                message.error('获取排序数据失败，请稍后再试！');
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试！');
        })
        .finally(()=>{
            dispatch(getLoadingReqestDoneAction())
        })

    }
}

//更新排序
export const handleIsShowAction = (checked,id)=>{
    return (dispatch,getState)=>{
        const page = getState().get('category').get('current');
        api.updateCategoriesIsShowList(
            {
                isShow:checked,
                id:id,
                page:page
            }
            )
        .then(result=>{
            if(result.code == 1){
                dispatch(getSetPageAction(result.data))
            }else{
                message.error('获取排序数据失败，请稍后再试！');
            }
        })
        .catch(err=>{
            message.error('网络错误，请稍后再试！');
        })
    }
}