const Collectible = require('../models/collectible.model')

module.exports= {
    getAllCollectibles: (req,res) =>{
        Collectible.find()
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            res.status(400).json(err) 
            // console.log(err)
        })
    },
    getOneCollectible: (req,res) => {
        Collectible.findById(req.params.id)
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            res.status(400).json(err) 
            // console.log(err)
        })
    },
    createCollectible: (req,res) => {
        Collectible.create(req.body)
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            res.status(400).json(err) //allows us to see an error from the client
            // console.log(err)
        })
    },
    updateCollectible: (req,res) => {
        Collectible.updateOne({_id:req.params.id}, req.body, {runValidators:true}) //req.body is the data we pass to update
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            res.status(400).json(err) 
            console.log(err)
        })
    },
    deleteCollectible: (req,res) => {
        Collectible.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            res.status(400).json(err) 
            // console.log(err)
        })
    }
}