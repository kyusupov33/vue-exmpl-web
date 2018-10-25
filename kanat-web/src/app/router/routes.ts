import Main from "@/app/components/Main/Main";
import Operation from "@/app/components/Operation/Operation";
import Rope from "@/app/components/Rope/Rope";
import Login from "@/app/components/Login/Login";
import Home from "@/app/components/Home/Home";
import * as path from "./paths";

function route(path: string, name: string, component: any, children: any) {
  return {
    exact: true,
    path,
    name,
    component,
    children
  };
}

export const routes = [
  route(path.LOGIN_URL, "login", Login, null),
  route(path.HOME_URL, "", Main, [
    route(path.HOME_URL, "home", Home, null),
    route(path.ROPES_URL, "ropes", Rope, null),
    route(path.ROPE_OPERATIONS_URL, "rope-operations", Operation, null)
  ]),
  {
    path: "*",
    redirect: path.HOME_URL
  }
];
