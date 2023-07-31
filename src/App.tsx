import styles from "./App.module.css";
import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <Post author="Volnei Neves" content="Aute eu occaecat cillum ipsum quis est reprehenderit in deserunt eu incididunt qui et."></Post>
      </div>
    </>
  );
}
