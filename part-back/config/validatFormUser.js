const Joi = require ('@hapi/joi');

const addUserValidation = (data) => {
    const Schema = Joi.object({
        adress: Joi.string(),
        firstName : Joi.string()
                        .required()
                        .min(4),
        lastName : Joi.string()
                        .required()
                        .min(4),
        phone : Joi.string()
                    .required(),
        email : Joi.string()
                    .email()
                    .required()
                    .min(6),
        password : Joi.string()
                        .required()
                        .min(6)
    });
    return Schema.validate(data);
};

const loginUserValidation = (data) =>{
    const Schema = Joi.object({
        email : Joi.string()
                    .required()
                    .email()
                    .min(6),
        password : Joi.string()
                        .required()
                        .min(6)
    });
    return Schema.validate(data);
}

module.exports = {addUserValidation, loginUserValidation};