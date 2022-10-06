import { Route, Routes } from "react-router-dom";
import { MyPage } from "./MyPage";
import { SettingPage } from "./Setting";
import { MyRoutineAuthPage } from "./MyRoutineAuth";
import { PointShopPage } from "./PointShop";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="my" element={<MyPage />} />
      <Route
        path="my/routine/:routineId/auth"
        element={<MyRoutineAuthPage />}
      />
      <Route path="setting" element={<SettingPage />} />
      <Route path="pointshop" element={<PointShopPage />} />
    </Routes>
  );
};
