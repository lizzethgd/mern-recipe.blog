const Comment = require('../models/Comment');

exports.add = async (req, res) => { 
    try {
      const newComment = await new Comment(req.body)
      console.log(req.body)
      await newComment.save()
      await res.status(200).json({success : true})
      console.log('Comment succesfully added');
    }
    catch(err){
      res.status(500).json('error controller: '+err)
      console.log('error in controller '+err) 
    }
}

exports.remove = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id)
        await res.status(200).json({success : true});
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

exports.commentsByRecipe =  async (req, res) => {
    try {
      const comments = await Comment.find({recipe: req.params.recipeId})
      .populate('author', { password:0, email:0, role:0, updatedAt:0 })
      await res.status(200).json(comments);
    }catch (err) {
      res.status(500).json('error controller: '+err)
      console.log('error in controller '+err)
  }
}

exports.commentsByUser =  async (req, res) => {
    try {
      const comments = await Comment.find({author: req.params.userId})
      await res.status(200).json({success : true, comments : comments});
    }catch (err) {
      res.status(500).json(err.name+': '+err.message)
      console.log(err.name+': '+err.message);
    }
  }