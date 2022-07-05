/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-06-28 15:29:02
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-05 14:36:04
 * @FilePath: /my-app/src/features/counter/Counter.tsx
 * @Description: 测试页
 */
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/store';
import styles from './index.module.css';
import { useRouter,useDebounce, useThrottle } from '@/hooks';

const Home:React.FC = () =>{
  const count = useAppSelector((state)=>state.global.userToken);
  const dispatch = useAppDispatch();
  const {navigateTo} = useRouter();
  
  const fetchList = useDebounce(() =>{
    console.log('防抖')
  },100)
  const throList = useThrottle(() =>{
    console.log('节流')
  },1000)

  useEffect(()=>{
    fetchList(1)
    fetchList(3)

    window.addEventListener("resize",()=>{
      console.log(1)
      throList(2)
    })
  },[])


 

  const toA = () =>{
    navigateTo('/three')
    // toHref('baidu.com')
    // getUserCustomTemplateList().then(res=>{
    //   console.log(res)
    // })
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch.global.setUserToken('1111')}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
      </div>
      {/* <Link to="/about">to about</Link> */}
      <div onClick={toA}>to aaa</div>
    </div>
  );
}

export default Home
