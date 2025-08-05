import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const Links = lazy(() => import("./pages/Links.tsx"));

const router = createBrowserRouter([{ path: "/", element: <Links /> }]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading…</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>
);
