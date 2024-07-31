import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string!',
    'string.min': 'Name should be at least {#limit} characters!',
    'string.max': 'Name should be at most {#limit} characters!',
    'any.required': 'Name is required!',
  }),
  phoneNumber: Joi.string().required().messages({
    'string.base': 'Phone number should be a string!',
    'any.required': 'Phone number is required!',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be a string!',
    'string.email': 'Email is not valid!',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'IsFavourite should be a boolean!',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .messages({
      'string.base': 'ContactType should be a string!',
      'any.only': 'ContactType should be one of [work, home, personal]!',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string!',
    'string.min': 'Name should be at least {#limit} characters!',
    'string.max': 'Name should be at most {#limit} characters!',
  }),
  phoneNumber: Joi.string().messages({
    'string.base': 'Phone number should be a string!',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be a string!',
    'string.email': 'Email is not valid!',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'IsFavourite should be a boolean!',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .messages({
      'string.base': 'ContactType should be a string!',
      'any.only': 'ContactType should be one of [work, home, personal]!',
    }),
});
