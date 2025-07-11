import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { navigation } from "./constants/navigation";

const App = () => {
  return (
      <Suspense>
        <Routes>
          {navigation.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
  );
};

export default App;
