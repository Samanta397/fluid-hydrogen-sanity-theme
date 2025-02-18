import { redirect } from "react-router";
import { destroySession, getSession } from "~/sessions";
import {Route} from "../../../../.react-router/types/app/+types/root";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};