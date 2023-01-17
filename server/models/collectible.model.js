const mongoose = require('mongoose');

const CollectibleSchema = new mongoose.Schema({
    itemName: {
        type:String,
        // required:[true,"Item name is required!"],
        // minLength:[3, "Item name must be at least 3 characters long!"]
    },
    category: {
        type:String,
        // enum:[
        //     'Music',
        //     'Movies',
        //     'Figurines'
        // ],
        // required:[true,"Category is required!"]
    },
    link: {
        type:String
    },
    description: {
        type:String,
        // required:[true,"Collectible description is required!"],
        // minLength:[3,"Collectible description must be at least 3 characters long!"]
    },
},{timestamps:true}) //gives us _id, createdAt and updatedAt

const Collectible= mongoose.model('Collectible', CollectibleSchema)


module.exports = Collectible