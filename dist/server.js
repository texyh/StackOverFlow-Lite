"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const app_1 = require("./app");
db_1.default().then(x => {
    app_1.default.listen(process.env.PORT, () => {
        console.log(`app started at port ${process.env.PORT}`);
    });
});
//# sourceMappingURL=server.js.map