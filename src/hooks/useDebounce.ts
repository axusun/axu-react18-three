/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-05 10:17:08
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-05 14:34:46
 * @FilePath: /my-app/src/hooks/useDebounce.ts
 * @Description: 防抖hooks
 */
import { useRef } from "react";
const useDebounce = (fn: any, delay = 1000) => {
  let timer = useRef<any>(null);
  const debounce = useRef((arg: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      fn(arg);
      clearTimeout(timer.current);
    }, delay);
  });
  return debounce.current;
};

export default useDebounce;
