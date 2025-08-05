import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const Home = lazy(() => import("./pages/Home.tsx"));

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading…</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>
);
