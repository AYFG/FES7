var express = require("express");
var router = express.Router();
// const loginCheck = require("../module/loginCheck");
// const upload = require("../module/imageUpload");

const postModel = require("../model/post");

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    const result = await post.save();
    res.status(200).json({
      message: "upload success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await postModel.find({});
    res.status(200).json({
      message: "read success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "detail success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "update success!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete success!!",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;

// router.get("/", loginCheck, (req, res) => {
//   res.status(200).json({
//     message: "login success!!",
//   });
// });

// router.post("/upload", upload.single("image"), (req, res) => {
//   const file = req.file;
//   console.log(file);
//   res.status(200).json({
//     message: "upload success!!",
//   });
// });
// let arr = [];
// router.post("/main", (req, res) => {
//   const data = req.body.data;
//   // res 메소드 3가지 1.send
//   // res.send("문자열이 전송됩니다!!");
//   // 2. json
//   // res.json({
//   //   message: "json 응답",
//   // });
//   // 3.render
//   res.render("index");
// });

// GET 메서드
// router.get("/read", (req, res) => {
//   res.status(200).json({
//     message: "read success",
//   });
// });

// POST 메서드
// router.post("/create", (req, res) => {
//   const data = req.body.data;
//   arr.push(data);
//   res.status(200).json({
//     message: "create success",
//     result: arr,
//   });
// });
// router.post("/create", (req, res) => {
//   const { data } = req.body;
//   arr.push(data);
//   res.status(200).json({
//     message: "create success",
//     result: arr,
//   });
// });

// // PUT 메서드

// // update/0
// router.put("/update/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message: "success!!",
//     result: arr,
//   });
// });

// // DELETE 메서드
// router.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   arr.splice(id, 1);
//   res.status(200).json({
//     message: "delete success!",
//     result: arr,
//   });
// });
