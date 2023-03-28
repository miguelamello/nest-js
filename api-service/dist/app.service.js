"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AppService_instances, _AppService_getUpdatedQuote;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
let AppService = class AppService {
    constructor() {
        _AppService_instances.add(this);
        this.stooqApiKey = 'sd2t2ohlcvn&h';
    }
    getDoc() {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'documentation.html'));
        return new common_1.StreamableFile(file);
    }
    getQuote(symbol) {
        return __classPrivateFieldGet(this, _AppService_instances, "m", _AppService_getUpdatedQuote).call(this, symbol);
    }
};
_AppService_instances = new WeakSet(), _AppService_getUpdatedQuote = async function _AppService_getUpdatedQuote(symbol) {
    const response = await fetch(`https://stooq.com/q/l/?s=${symbol}&f=${this.stooqApiKey}&e=json`);
    return await response.json();
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map