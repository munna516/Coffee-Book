import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ReusableTitle from "../Reusable Title/ReusableTitle";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ReusableTitle title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></ReusableTitle>

            <Category></Category>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Home;