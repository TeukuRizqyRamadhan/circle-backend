import * as Joi from "joi"

export const addThread = Joi.object({
    content: Joi.string().required(),
    images: Joi.string().allow('')
})

export const updateThread = Joi.object({
    content: Joi.string().allow(''),
    images: Joi.string().allow('')
})