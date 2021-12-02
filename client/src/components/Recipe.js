

const Recipe = () => {

return (
<div className="w3-content" style={{maxWidth:"1100px"}}>
    <div className="w3-row w3-padding-16" id="about">
        <div className="w3-col m6 w3-padding-large ">
        <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" className="w3-round w3-image w3-opacity-min" alt="Table Setting" width={600} height={450}/>
        </div>
        <div className="w3-col m6 w3-padding-large">
        <h3 className="w3-center">About Catering</h3><br/>
        <h5 className="w3-center">Tradition since 1889</h5>
        <p className="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
        <p className="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div className="w3-container w3-padding-16" id="contact">
        <h3>Contact</h3><br/>
        <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
        <p className="w3-text-blue-grey w3-large"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
        <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
    </div>
</div>
    )
}

export default Recipe


 {/*       <div classNameName="recipe_container">
            <div classNameName="top_recipe">
              <div classNameName="image_recipe"></div>
              <div classNameName="ingedients_recipe"></div>
            </div>
            <div classNameName="preparation_recipe">

            </div>
        </div> */ }