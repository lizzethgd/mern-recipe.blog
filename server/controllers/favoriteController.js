const Recipe = require('../models/Recipe');

exports.add = async (req, res) => { 
    try {
      await Recipe.findByIdAndUpdate(req.params.recipeId, {
        $push: {favorites: req.params.userId}
      },{new: true})
      await res.status(200).json({success : true})
      console.log('Favorite succesfully added')
    }catch(err){
        res.status(500).json(err.name+': '+err.message)
        console.log(err.name+': '+err.message); 
    }
}

exports.remove = async (req, res) => {
    try {
      await Recipe.findByIdAndUpdate(req.params.recipeId, {
        $pull: {favorites: req.params.userId}
      },{new: true})
      await res.status(200).json({success : true})
      console.log('Favorite succesfully deleted');
    } catch (err) {
      res.status(500).json(err.name+': '+err.message)
      console.log(err.name+': '+err.message);
    }
}


exports.favoritesByUser = async(req, res) => {
  try { 
    const recipes = await Recipe.find({favorites: req.params.userId } )
      .populate('author', { password:0, email:0, updatedAt:0 })
      .populate('language', 'name')
      .populate('category', 'name')
      .populate('region', 'name')
    console.log(recipes) 
    await res.status(200).json({
    recipes: recipes,
    total: recipes.length 
  });
  }catch (err) {
    res.status(500).json(err.name+': '+err.message)
    console.log(err.name+': '+err.message);
  }
} 


/* 
exports.add = async (req, res) => { 
  try {
    const favorite = new Favorite(req.body)
    await favorite.save()
    await res.json(favorite)
    console.log('Favorite succesfully added')
  }
  catch(err){
      res.status(500).json(err.name+': '+err.message)
      console.log(err.name+': '+err.message); 
  }
}

exports.remove = async (req, res) => {
  try {
      await Favorite.findByIdAndDelete(req.params.id)
      await res.status(200).json({message: "Favorite succesfully deleted", success : true});
      console.log('Favorite succesfully deleted');
    } catch (err) {
      res.status(500).json(err.name+': '+err.message)
      console.log(err.name+': '+err.message);
    }
}
 */
