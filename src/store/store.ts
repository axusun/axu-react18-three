/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 20:12:26
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 20:32:29
 * @FilePath: /my-app/src/dva/index.ts
 * @Description: store
 */
import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { models, RootModel } from "./models";

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
