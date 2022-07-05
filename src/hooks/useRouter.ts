/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 11:49:24
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-05 11:21:42
 * @FilePath: /my-app/src/utils/router.ts
 * @Description: 路由hooks
 */
import {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

const useRouter = () => {
  const navigate = useNavigate();
  const routerParams = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const navigateTo = (url: string) => {
    navigate(url);
  };

  const navigateReplate = (url: string) => {
    navigate(url, { replace: false, state: "pop" });
  };

  const navigateBack = (backIndex: number = -1) => {
    navigate(backIndex);
  };

  const navigateForward = (forwardIndex: number = 1) => {
    navigate(forwardIndex);
  };

  return {
    navigateTo,
    navigateBack,
    navigateReplate,
    navigateForward,
    location,
    searchParams,
    routerParams,
  };
};

export default useRouter;
