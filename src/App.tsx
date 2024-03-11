import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Homepage from "./pages/HomePage/homepage";

function App() {
    return (
        <>
            <div className="bg-white font-poppins">
                <div className="bg-[#01000d] sticky top-0 z-30">
                    <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:mx-auto">
                        <Header />
                    </div>
                </div>
                <Homepage />
                <div className="bg-[#01000d]">
                    <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:mx-auto">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
