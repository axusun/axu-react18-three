/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 20:12:26
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 20:32:37
 * @FilePath: /my-app/src/store/models/global.ts
 * @Description: global全局状态管理
 */
import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const global = createModel<RootModel>()({
  state: {
    userToken: "",
  } as Store.Global.IGlobal,
  reducers: {
    setToken: (state, userToken: string) => {
      return {
        ...state,
        userToken,
      };
    },
  },
  effects: (dispatch) => ({
    setUserToken(token: string) {
      dispatch.global.setToken(token);
    },
  }),
});
