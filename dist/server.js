"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.default.listen(process.env.PORT, () => {
    console.log(`app started at port ${process.env.PORT}`);
});
//# sourceMappingURL=server.js.map