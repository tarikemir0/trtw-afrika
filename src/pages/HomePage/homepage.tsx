import Articles from "./components/Articles/articles";
import Headline from "./components/HeadLine/headline";
import Latestfeatured from "./components/LatestFeatured/latestfeatured";
import Morearticles from "./components/MoreArticles/morearticles";
import Opinion from "./components/Opinion/opinion";
import Videos from "./components/Videos/videos";

const homepage = () => {
  return (
    <div className="min-h-screen">
      <Articles />
      <Headline />
      <Latestfeatured />
      <Morearticles />
      <Opinion />
      <Videos />
    </div>
  );
};

export default homepage;
