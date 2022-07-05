/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-06-28 15:29:02
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-05 10:06:25
 * @FilePath: /my-app/src/index.tsx
 * @Description: 主入口
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from '@/store/store'
import AppRoutes from '@/router';
import '@/styles/global.scss'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  </React.StrictMode>
);

// 性能分析
// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
