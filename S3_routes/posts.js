const express =require(  'express');

const { getPosts, createPost}  =require( '../S1_controllers/postsController');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

module.exports=router;