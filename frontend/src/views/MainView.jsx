import { Outlet } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export function MainView() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
