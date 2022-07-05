/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 13:59:24
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 16:46:59
 * @FilePath: /my-app/src/apis/home.ts
 * @Description: home api
 */
import axios from '@/utils/axios'

/**
 * 获取列表
 */
export const getUserCustomTemplateList = () =>
axios({ method: 'GET', url: 'xianxuan_api/Pub/V1/Custom/getUserCustomTemplateList' });
