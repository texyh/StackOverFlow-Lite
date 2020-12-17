"use strict";
const env = process.env.NODE_ENV || 'development';
if (env == 'development') {
    process.env.PORT = '4000';
}
else if (env == 'test') {
    process.env.PORT = '5000';
}
//# sourceMappingURL=config.js.map