const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res)=>{
  User.findById(req.params)
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error while getting details according to ID'+ err));
});

router.post('/add', function(req, res, next) {
    User.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json(' User deleted '))
    .catch(err => res.status(400).json('Error while deleting : ' + err));
  });
  router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then(user => {
          user.name = req.body.name;
          user.phoneNum = Number(req.body.phoneNum);
          user.profilePic = req.body.profilePic;
          user.address = req.body.address;
          user.facebookLink = req.body.facebookLink;
          user.instagramLink = req.body.instagramLink;
          userlinkedinLink = req.body.linkedinLink;
          // user.skills = req.body.skills;
          // user.projects.projectname = req.body.projects.projectname,
          // user.projects.description = req.body.projects.description,
          // user.projects.technologies = req.body.projects.technologies
      user.save()
      .then(()=>res.json('User updated'))
      .catch(err => res.status(500).json('Error while deleting : '+err));
        

    }).catch(err => res.status(400).json("Error while updating : "+ err));

  });



module.exports= router;