import { Post } from "./Post";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <Header/>
      <h1>Hello World</h1>
      <Post author="Volnei" />
    </>
  );
}
