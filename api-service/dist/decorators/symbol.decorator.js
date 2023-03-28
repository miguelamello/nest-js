"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = void 0;
const common_1 = require("@nestjs/common");
exports.Symbol = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    let symbol = request.params.symbol;
    symbol = symbol.split(' ')[0];
    symbol = symbol.trim().toLowerCase();
    symbol = symbol.replace(/[^A-Za-z.]/g, '');
    return symbol;
});
//# sourceMappingURL=symbol.decorator.js.map