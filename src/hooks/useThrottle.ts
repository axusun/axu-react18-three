/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-05 11:20:57
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-05 11:36:20
 * @FilePath: /my-app/src/hooks/useThrottle.ts
 * @Description: 节流hooks
 */
import { useRef } from "react";

const useThrottle = (fn: Function, time = 50) => {
  const previous = useRef(0);
  const throttle = useRef((arg: any) => {
    let now = Date.now();
    if (now - previous.current > time) {
      fn(arg);
      previous.current = now;
    }
  });
  return throttle.current;
};
export default useThrottle;
