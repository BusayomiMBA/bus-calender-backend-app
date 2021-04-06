const passport = require('passport');
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

const create = async (req, res) => {
    // Purpose: Create one example by adding body to DB, and return
    console.log('=====> Inside POST /events');
    console.log('=====> req.body');
    console.log(req.body); // object used for creating new example
    console.log(req.user)
    console.log(req.params.userID)

    const createEvent = await db.Event.create({
        title: req.body.title,
        time: req.body.time,
        comment: req.body.comment,
        })
    console.log(createEvent)
    if (!createEvent) {
        console.log("Error in event")
    }
const foundUser = await db.User.findByIdAndUpdate(req.user._id,
         {$addToSet: { events: createEvent._id }},
        {safe: true}
    ) 
    console.log(foundUser)
     if (!foundUser) {
        console.log('Error in event#show');
    }
    // const foundSecondUser = await db.User.findByIdAndUpdate(req.params.userID,
    //     {$addToSet: { events: createEvent._id }},
    //     {safe: true}
    // )
    

    // await foundUser.events.push(createEvent._id)
    console.log("===> event created succesfully")
    res.json(createEvent)
}








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