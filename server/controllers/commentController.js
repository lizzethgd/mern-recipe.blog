const Comment = require('../models/Comment');

exports.create = async (req, res) => { 
    try {
      const comment = new Comment(req.body)
      await comment.save()
      await res.json(comment)
    }
    catch(err){
        res.status(500).json(err.name+': '+err.message)
        console.log(err.name+': '+err.message); 
    }
}

exports.remove = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id)
        await res.status(200).json({message: "Comment succesfully deleted", success : true});
        console.log('Comment succesfully deleted');
      } catch (err) {
        res.status(500).json(err.name+': '+err.message)
        console.log(err.name+': '+err.message);
      }
  }


exports.update = async (req, res) => {
    try {
      const updateComment = await Comment.findByIdAndUpdate(req.params.id, {
        $set: req.body
      },{new: true})
      await res.status(200).json({success : true, comment: updateComment});
    } catch (err) {
      res.status(500).json(err.name+': '+err.message)
      console.log(err.name+': '+err.message);
    }
  }
