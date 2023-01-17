const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/collectioncorner',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Connected to the database'))
    .catch((err)=>console.log( 'here is your error: ',err))