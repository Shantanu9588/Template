import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { navigation } from "./constants/navigation";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
