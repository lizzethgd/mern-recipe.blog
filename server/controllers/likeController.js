const Recipe = require('../models/Recipe');

exports.add = async (req, res) => { 
  console.log(req.params.recipeId)
  console.log(req.params.userId)
  try {
    await Recipe.findByIdAndUpdate(req.params.recipeId, {
      $push: {likes: req.params.userId}
    },{new: true})
    await res.status(200).json({success : true});
    console.log('Like succesfully added');
  } catch (err) {
    res.status(500).json('error controller: '+err)
    console.log('error controller: '+err);
  }
}

exports.remove = async (req, res) => { 
  try {
     await Recipe.findByIdAndUpdate(req.params.recipeId, {
      $pull: {likes: req.params.userId}
    },{new: true})
    await res.status(200).json({success : true});
    console.log('Like succesfully deleted');
  } catch (err) {
    res.status(500).json('error controller: '+err)
    console.log('error controller: '+err);
  }
}

/* 
exports.add = async (req, res) => { 
    try {
      const like = new Like(req.body)
      await like.save()
      await res.json(like)
      console.log('Like succesfully added')
    }
    catch(err){
        res.status(500).json(err.name+': '+err.message)
        console.log(err.name+': '+err.message); 
    }
}

exports.remove = async (req, res) => {
    try {
        await Like.findByIdAndDelete(req.params.id)
        await res.status(200).json({message: "Like succesfully deleted", success : true});
        console.log('Like succesfully deleted');
      } catch (err) {
        res.status(500).json(err.name+': '+err.message)
        console.log(err.name+': '+err.message);
      }
  } 
  */


 