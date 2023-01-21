const CollectibleController = require('../controllers/collectible.controller');  
module.exports = (app) => {
    // home page to see all collectibles
    app.get('/', CollectibleController.getAllCollectibles);
    // get all collectibles after navigating through site
    app.get('/allcollectibles', CollectibleController.getAllCollectibles);
    //get one collectible
    app.get('/collectible/:id', CollectibleController.getOneCollectible);
    //create new ollectile
    app.post('/collectible/new', CollectibleController.createCollectible);
    //update collectible
    app.put('/edit/collectible/:id', CollectibleController.updateCollectible);
    //delete collectible
    app.delete('/:id/delete', CollectibleController.deleteCollectible);
}