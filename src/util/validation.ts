import z from 'zod';

export interface IValidation {
    email: string,
    password: string,
    rePassword?: string,
    name?: string,
    surname?: string,
}


export const validateRegister = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Email is invalid'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(6, 'Password must be more than 6 characters')
        .max(50, 'Password must be less than 50 characters'),
    rePassword: z
        .string()
        .min(1, 'Password is required '),
    name: z
        .string()
        .min(3, 'Name is required'),
    surname: z
        .string()
        .min(3, 'Surname is required'),
})
    .refine((data: Pick<IValidation, 'password' | 'rePassword'>) => data && data.password === data.rePassword, {
        path: ['rePassword'],
        message: 'Введенные пароли не совпадают',
    });


    export const validateAuth = z.object({
        email: z
            .string()
            .min(1, 'Email is required')
            .email('Email is invalid'),
        password: z
            .string()
            .min(1, 'Password is required')
            .min(6, 'Password must be more than 6 characters')
            .max(50, 'Password must be less than 50 characters'),
    })


// export const validate = (data: IValidation) => {
//     const schema = z.object({
//         email: z
//             .string()
//             .min(1, 'Email is required')
//             .email('Email is invalid'),
//         password: z
//             .string()
//             .min(1, 'Password is required')
//             .min(6, 'Password must be more than 6 characters')
//             .max(50, 'Password must be less than 50 characters'),
//         rePassword: z
//             .string()
//             .min(1, 'Password is required')
//     }).refine((data) => data.password === data.rePassword, {
//         path: ['confirmPassword'],
//         message: 'Введенные пароли не совпадают',
//     });
    

//     const result = schema.safeParse(data);
//     console.log(result, 'result');

//     if (result.success) {
//         return { success: true };
//     } else {
//         return { success: false, error: result.error };
//     }
// };

