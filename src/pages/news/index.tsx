/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 10:38:49
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 21:08:14
 * @FilePath: /my-app/src/pages/about/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import useRouter from '@/hooks/useRouter';

const  About = () => {
  const {routerParams,searchParams} = useRouter()
  console.log(routerParams,process.env.NODE_ENV,searchParams.get('id'))
  return (
    <div className='t6'>
      news
    </div>
  );
}

export default About;

