const model = require('../models/interfaces')

// function getAll(req, res, next) {
//     const data = model.getAll()
//     res.status(200).json({ data })
// }

function getAll(req,res,next){
    const data = model.getAll()
    res,status.json({ data })
}

function getOne(req,res,next){
    const idOs = model.getOne(req.params.id)
    if (idOs) return res.status(200).json(idOs)
    next()
}

function create(req,res,next){
    const newOs = model.create(req.body.name, req.body.style, req.body.cost)
    if (!req.body.name) next({error: { status: 400, message: `That aint a os >:(`}})
    res.status(201).json(newOs)
}

function update(req,res,next){
    const newOs = model.update(req.body.id, req.body.name, req.body.style,req.body.cost)
    if (newOs) return res.status(200).json(newOs)
    next()
}

function remove(req,res,next){
    const idOs = model.remove(req.params.id)
    if (!idOS) return next()
    res.status(200).json(idOs)
}


module.exports = { getAll, create, getOne, update,remove }