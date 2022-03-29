const Like = require('../models/Like');

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


  exports.likeByUser = async (req, res) => {
    try {
        const like = await Like.findOne({user: req.params.userId, recipe: req.params.recipeId})
        console.log(like)
        await res.status(200).json({like});
        //console.log('Like succesfully deleted');
      } catch (err) {
        res.status(500).json(err.name+': '+err.message)
        console.log(err.name+': '+err.message);
      }
  } 