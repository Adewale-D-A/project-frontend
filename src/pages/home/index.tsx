import { Button } from "@mui/material";
import MetaTags from "../../components/metaTags";

export default function Home() {
  return (
    <>
      <MetaTags title={"home"} description={"Introduction to product"} />
      <main>
        <h1 className=" text-5xl text-center font-bold">Home</h1>
        <Button variant="contained">Click Click</Button>
      </main>
    </>
  );
}
