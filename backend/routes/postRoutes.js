const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");


router.get("/", 
    postController.getAllPosts);
router.get("/new",
    postController.newPost);
   router.post("/",
    postController.createPost
   );
   router.get("/:id/edit",
    postController.editPost
   );
   router.get("/:id",
    postController.getPostById);
    router.put("/:id",
        postController.updatePost);
        router.delete("/:id",
            postController.deletePost
        );

module.exports = router;