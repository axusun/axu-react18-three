/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 11:24:38
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 16:47:35
 * @FilePath: /my-app/src/pages/notFound/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import useRouter from '@/hooks/useRouter';
const  NotFound = ()=> {
  const {navigateBack} = useRouter()
  
  const back = () =>{
    navigateBack()
  }
  return (
    <div onClick={back}>
      404
    </div>
  );
}

export default NotFound;
