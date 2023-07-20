import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css"
import FeaturesProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle"> Brows by property type</h1>
                <PropertyList />
                <h1 className="homeTitle"> home guest love</h1>
                <FeaturesProperties />
                <MailList />
                <Footer/>
            </div>
        </div>

    );
};

export default Home