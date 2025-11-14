import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { RoutePath } from "../../constants";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-screen h-screen">
      <h2 className="font-bold text-5xl">404</h2>
      <p className="text-xl">Page not found</p>

      <Button variant="filled">
        <Link to={RoutePath.PRODUCTS_LISTING}>Back to the main page</Link>
      </Button>
    </div>
  );
}
