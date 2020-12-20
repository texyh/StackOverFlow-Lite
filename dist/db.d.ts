declare const dbConnection: (enableLogging?: boolean, name?: string) => Promise<import("typeorm").Connection>;
export default dbConnection;
