class AppError extends Error {
    statusCode: number;
    error: string;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        this.error = message;
    };
}

export { AppError };
