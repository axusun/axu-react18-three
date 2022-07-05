/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-06-28 15:49:24
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 20:15:33
 * @FilePath: /my-app/src/store/store.d.ts
 * @Description: 全局变量类型声明
 */
declare namespace Store{ 
    namespace Global {
        interface IGlobal{
            userToken:string
            value: number;
            status: 'idle' | 'loading' | 'failed';
        }
    }
}