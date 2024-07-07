import Joi from "joi";

const postValidator =
    Joi.object({
        title:Joi.string()
            .required()
            .error(errors => {
                errors.forEach(error =>{
                    switch (error.code){
                        case 'string.empty':
                            error.message = 'Can not be empty!!!';
                            break;
                        case 'string.min':
                            error.message = 'Can not be empty LOWER then 5';
                            break;
                        default:
                            break;
                    }
                })
                return errors
            }),
        body:Joi.string()
            .min(5)
            .max(20)
            .required()
            .messages({
                "string.min": "body must contain at least 5 characters",
                "string.max": "body must contain no more than 5 characters",
            }),
        userId:Joi.number()
            .max(2000)
            .required()
            .messages({
                "string.max": "this page contains a limited number of users",
            })


    })
export default postValidator;