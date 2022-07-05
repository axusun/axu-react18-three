/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 15:27:23
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 20:31:31
 * @FilePath: /my-app/src/router/routerConfig.tsx
 * @Description: 路由列表
 */
import { lazy } from "react";

namespace SyncRoute {
  export type Routes = {
    path: string;
    element: any;
    children?: Routes[];
  };
}

const RouteConfig: SyncRoute.Routes[] = [
  {
    path: "/",
    element: lazy(() => import("@/pages/home"))
  },
  {
    path: "/news",
    element: lazy(() => import("@/pages/news")),
    children: [
      {
        path: ":id",
        element: lazy(() => import("@/pages/news")),
      },
    ],
  },
  { path: "/about", element: lazy(() => import("@/pages/about")) },
  { path: "/three", element: lazy(() => import("@/pages/three")) },
  { path: "*", element: lazy(() => import("@/pages/notFound")) },
];

export default RouteConfig;
