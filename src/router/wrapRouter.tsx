/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 15:27:11
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 15:50:29
 * @FilePath: /my-app/src/router/wrapRouter.tsx
 * @Description: useRouter生成器
 */
import React, { Suspense} from "react";
import RouteConfig from './routeConfig';
import { RouteObject ,useRoutes } from "react-router-dom";

namespace SyncRoute{
  export type Routes = {
    path: string,
    element: any,
    children?: Routes[]
  }
}

const WrapRoute = () => {
  const syncRouter = (table: SyncRoute.Routes[]): RouteObject[] => {
    let mRouteTable: RouteObject[] = []
    table.forEach(route => {
      mRouteTable.push({
        path: route.path,
        element: (
          <Suspense fallback={ <div>路由加载ing...</div> }>
            <route.element />
          </Suspense>
        ),
        children: route.children && syncRouter(route.children)
      })
    })
    return mRouteTable
  }
 
  const element = useRoutes(syncRouter(RouteConfig))
  return element
}
export default WrapRoute