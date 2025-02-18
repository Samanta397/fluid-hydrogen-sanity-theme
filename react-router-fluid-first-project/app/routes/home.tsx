import type { Route } from "./+types/home";
import {client} from "~/sanity/client";
import type {SanityDocument} from "@sanity/client";
import {HOME_PAGE_QUERY} from "~/groqs/homePageQuery";
import {HeaderLayout} from "~/components/sections/headerLayout";
import {previewContext} from "~/sanity/preview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const { options } = await previewContext(request.headers);
  return { homePage: await client.fetch<SanityDocument>(HOME_PAGE_QUERY, {}, options) };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { homePage } = loaderData;


  console.log(homePage)
  // return <Welcome />;
  return (
    <>
      <HeaderLayout sections={homePage.headerSections}/>
      {/*<Container>*/}
      {/*  <h1 className="text-4xl font-bold mb-8">Posts</h1>*/}
      {/*  <ul className="flex flex-col gap-y-4">*/}
      {/*    kkk*/}
      {/*    /!*{posts.map((post) => (*!/*/}
      {/*    /!*  <li className="hover:underline" key={post._id}>*!/*/}
      {/*    /!*    <Link to={`/${post.slug.current}`}>*!/*/}
      {/*    /!*      <h2 className="text-xl font-semibold">{post.title}</h2>*!/*/}
      {/*    /!*      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>*!/*/}
      {/*    /!*    </Link>*!/*/}
      {/*    /!*  </li>*!/*/}
      {/*    /!*))}*!/*/}
      {/*    /!*{homePage.headerSections[0].text}*!/*/}
      {/*  </ul>*/}
      {/*</Container>*/}
    </>
  );
}
