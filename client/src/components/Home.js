import "../assets/css/home.scss"
import Timeline from './Timeline';
import AllRecipes from './AllRecipes';

const Home = () => {
return (
<div className="w3-light-green w3-center home_container">   
    <Timeline />
    <AllRecipes />
</div>
)
}

export default Home
