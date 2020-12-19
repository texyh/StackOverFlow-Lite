declare const dbConnection: ({ enableLogging }?: {
    enableLogging: boolean;
}) => Promise<import("typeorm").Connection>;
export default dbConnection;
