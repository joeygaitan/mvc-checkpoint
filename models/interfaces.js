const uuid = require('uuid/v4')
const interfaces = [
    {id: uuid(), name: 'windows', type: 'microsoft', cost: '80.00'},
    {id: uuid(), name: 'macos', type: 'apple', cost: '3000.00'},
    {id: uuid(), name: 'linux', type: 'opensource', cost: '0.00 time'},
    {id: uuid(), name: 'ubuntu', type: 'opensource', cost: '0.00 time'}
]

    function getAll(){
        return interfaces
    }

    function getOne(id){
        const operatingSysId = interfaces.find(idOs=>idOs.id===id)
        return operatingSysId
    }

    function create(name,type,cost){
        const newOs = {}
        newOs.id = uuid()
        newOs.name = name
        newOs.type = type
        newOs.cost = cost
        interfaces.push(newOs)
        return newOs
    }

    function update(id,name,type,cost){
        const operatingSysId = interfaces.find(idOs=>idOs.id===id)
        if (!operatingSysId) return 
        if(name) operatingSysId.name = name
        if(type) operatingSysId.type = type
        if(cost) operatingSysId.cost = cost
        return operatingSysId 
    }

    function remove(id){
        const operatingSysId = interfaces.find(idOs=>idOs.id===id)
        if (!operatingSysId) return 
        interfaces.splice(interfaces.indexOf(operatingSysId),1)
        return operatingSysId
    }

    module.exports = {
        interfaces,
        getAll,
        getOne,
        create,
        update,
        remove
    }
