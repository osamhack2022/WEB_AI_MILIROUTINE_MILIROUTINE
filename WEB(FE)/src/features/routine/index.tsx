import { Route, Routes } from "react-router-dom";
import { RoutineDetailPage } from "./RoutineDetail";
import { RoutineMakePage } from "./RoutineMake";

export const RoutineRoutes = () => {
  return (
    <Routes>
      <Route path="make" element={<RoutineMakePage />} />
      <Route path=":routineId" element={<RoutineDetailPage />} />
    </Routes>
  );
};
