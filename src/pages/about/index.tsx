/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 10:38:49
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-05 11:12:31
 * @FilePath: /my-app/src/pages/about/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import './index.scss'

const  About = () => {
  useEffect(()=>{
    console.log(1)
  },[])
  return (
    <div className='about t6'>
      About
    </div>
  );
}

export default About;
