const Joi = require('@hapi/joi');

const validatRegisterAdmin = (data) => {
    const Schema = Joi.object({

        firstName : Joi.string()
                        .required()
                        .min(4),
        lastName : Joi.string()
                        .required()
                        .min(4),
        email : Joi.string()
                    .required()
                    .email()
                    .min(6),
        password : Joi.string()
                       .required()
                       .min(6)
    });
    return Schema.validate(data)
};

const validatLoginAdmin = (data) => {
    const Schema = Joi.object({

        email : Joi.string()
                    .required()
                    .email()
                    .min(6),
        password : Joi.string()
                       .required()
                       .min(6)
    });
    return Schema.validate(data)
};

module.exports = {validatRegisterAdmin, validatLoginAdmin};