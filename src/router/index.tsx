/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 10:00:47
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 16:15:27
 * @FilePath: /my-app/src/router/router.tsx
 * @Description: 路由入口
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import WrapRouter from './wrapRouter'


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <WrapRouter/>
    </BrowserRouter>
  );
};

export default AppRoutes;
