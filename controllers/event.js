const db = require('../models');

const index = (req, res) => {
    // Purpose: Fetch all examples from DB and return
    console.log('=====> Inside GET /events');

    db.Event.find({}, (err, foundEvents) => {
        if (err) console.log('Error in event#index:', err);
        res.json(foundEvents);
    });
}

const show = (req, res) => {
    // Purpose: Fetch one example from DB and return
    console.log('=====> Inside GET /events/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id

    db.Event.findById(req.params.id, (err, foundEvents) => {
        if (err) console.log('Error in event#show:', err);
        res.json(foundEvents);
    });
};

const create = (req, res) => {
    // Purpose: Create one example by adding body to DB, and return
    console.log('=====> Inside POST /events');
    console.log('=====> req.body');
    console.log(req.body); // object used for creating new example

    db.Event.create(req.body, (err, savedEvent) => {
        if (err) console.log('Error in event#create:', err);
        res.json(savedEvent);
    });
};

const update = (req, res) => {
    // Purpose: Update one example in the DB, and return
    console.log('=====> Inside PUT /events/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id
    console.log('=====> req.body');
    console.log(req.body); // object used for updating example

    db.Event.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEvent) => {
        if (err) console.log('Error in event#update:', err);
        res.json(updatedEvent);
    });
};

const destroy = (req, res) => {
    // Purpose: Update one example in the DB, and return
    console.log('=====> Inside DELETE /events/:id');
    console.log('=====> req.params');
    console.log(req.params); // object used for finding example by id
    
    db.Event.findByIdAndDelete(req.params.id, (err, deletedEvent) => {
        if (err) console.log('Error in event#destroy:', err);
          res.sendStatus(200);
          console.log(deletedEvent);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};

///////////////////////////////////////////////////////////////////////////////////////////
// DON'T USE YET - Not tested
// const query = (req, res) => {
//     // Purpose: Fetch one example via query from DB and return
//     console.log('=====> Inside "query" POST /examples/query');
//     console.log('=====> req.query');
//     console.log(req.query); // object using for doing a query search on an example

//     db.Example.find(req.query, (err, foundExample) => {
//         if (err) console.log('Error in example#query:', err);
//         res.json(foundExample);
//     });
// }