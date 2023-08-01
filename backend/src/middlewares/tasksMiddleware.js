const validateFieldTitle = (request, response, next) => {
    const { body } = request;

    if(body.title === undefined) {
        return response.status(400).json({message: 'The field "title" is required'});
        
    }else if(body.title === '') {
        return response.status(400).json({message: 'The field cannot be empty'});

    }else {
        next();
    }

}

const validateFieldStatus = (request, response, next) => {
    const { status } = request.body;

    if(status === undefined) {
        return response.status(400).json({message: 'The field "Status" is required'});
    }else if(status === '') {
        return response.status(400).json({message: 'The field Status cannot be empty'});
    }else {
        next();
    }
}

module.exports = {
    validateFieldTitle,
    validateFieldStatus
}