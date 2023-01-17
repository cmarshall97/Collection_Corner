const CollectibleController = require('../controllers/collectible.controller');  
module.exports = (app) => {
    app.get('/');
    // get all pets
    app.get('/allcollectibles', CollectibleController.getAllCollectibles);
    //get one pet
    app.get('/collectible/:id', CollectibleController.getOneCollectible);
    //create new pet
    app.post('/collectible/new', CollectibleController.createCollectible);
    //update pet
    app.put('/edit/collectible/:id', CollectibleController.updateCollectible);
    //delete pet
    app.delete('/:id/delete', CollectibleController.deleteCollectible);
    //get all pets by user in session
    app.get('/mycollections');
}