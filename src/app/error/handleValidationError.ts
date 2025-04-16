
const handleValidationError = (err: any) => {
    const error = Object.values(err.errors).map((val: any) => ({
        path: val?.path,
        message: val?.message,
    }));
    const statusCode = 400;
    return { statusCode, message: 'Validation error', error };
};

export default handleValidationError;
