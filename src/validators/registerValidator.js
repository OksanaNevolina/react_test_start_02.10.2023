import Joi from "joi";

const registerValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base': 'Логін повинен відповідати pattern'
    }),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base':'Пароль повинен відповідати pattern'
    }),
    re_password: Joi.any().equal(Joi.ref('password')).required().messages({
    'eny.only':'Повторіть пароль'
})
})
export {
    registerValidator
}