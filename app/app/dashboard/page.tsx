import { LocalIndex } from "./LocalIndex";

const IS_DEV = process.env.NODE_ENV === "development";

export default async function Home() {
  if (IS_DEV) {
    return <LocalIndex />;
  }

  return (
    <LocalIndex />
  );
}
