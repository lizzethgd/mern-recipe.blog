const Favorite = require('../models/Favorite');

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