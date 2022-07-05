/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 20:12:26
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 20:32:55
 * @FilePath: /my-app/src/store/models/index.ts
 * @Description: models
 */

import { Models } from "@rematch/core";
import { global } from "./global";

export interface RootModel extends Models<RootModel> {
  global: typeof global;
}

export const models: RootModel = {
  global,
};
