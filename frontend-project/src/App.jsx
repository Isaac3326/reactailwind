import ArticlesContainer from "./design/components/ArticlesContainer";
import Header from "./design/components/Header";
import MainArticle from "./design/components/MainArticle";
import NewContainer from "./design/components/NewContainer";
function App() {
  return (
    <>
      <main className="px-4 pt-6">
        <Header />
        <div className="lg:flex lg:gap-8">
          <MainArticle />
          <NewContainer />
        </div>
        <ArticlesContainer/>
      </main>
    </>
  );
}

export default App;
