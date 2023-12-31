import Joi from 'joi'

export const validar = usuario => {
    const usuarioSchema = Joi.object({
        nombre: Joi.string().min(3).max(30).required(),
        edad: Joi.number().min(0).max(100).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        repeat_password: Joi.ref('password')
    })

    const { error } = usuarioSchema.validate(usuario)
    if (error) {
        return { result: false, error }
    }
    return { result: true }
}
