import Articles from "./components/Articles/articles";
import Headline from "./components/HeadLine/headline";
import Latestfeatured from "./components/LatestFeatured/latestfeatured";
import Morearticles from "./components/MoreArticles/morearticles";
import Opinion from "./components/Opinion/opinion";
import Videos from "./components/Videos/videos";

const homepage = () => {
    return (
        <div>
            <div className="min-h-screen md:py-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:mx-auto">
                <div className="lg:flex mb-10 lg:gap-8">
                    <div className="lg:w-3/5">
                        <Headline />
                    </div>
                    <div className="lg:w-2/5">
                        <Latestfeatured />
                    </div>
                </div>
                <div className="lg:flex lg:gap-8">
                    <div className="mb-6 lg:w-3/5">
                        <Articles />
                    </div>
                    <div className="lg:w-2/5">
                        <Opinion />
                    </div>
                </div>
            </div>
            <div>
                <Videos />
            </div>
            <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:mx-auto">
                <Morearticles />
            </div>
        </div>
    );
};

export default homepage;
