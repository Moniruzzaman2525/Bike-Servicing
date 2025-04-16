const handleDuplicateError = (err: any) => {

    const extractedField = err?.meta?.target?.[0];

    const errorMessage = extractedField
        ? `${extractedField} already exists`
        : 'Duplicate value exists in the database';

    const statusCode = 400;

    return { statusCode, message: errorMessage };
};

export default handleDuplicateError;
