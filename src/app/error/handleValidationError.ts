const handleValidationError = (err: any) => {
    const message = err.errors.length > 0 ? err.errors[0].message : 'Validation error';

    const statusCode = 400;

    return { statusCode, message };
};

export default handleValidationError;
