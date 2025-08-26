"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var construtor_1 = require("./construtor");
var projeto-predial_1 = require("./projeto-predial");
var Contrato = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = typeorm_1.BaseEntity;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _necessidade_bolsa_decorators;
    var _necessidade_bolsa_initializers = [];
    var _necessidade_bolsa_extraInitializers = [];
    var _justificativa_decorators;
    var _justificativa_initializers = [];
    var _justificativa_extraInitializers = [];
    var _data_manifestação_decorators;
    var _data_manifestação_initializers = [];
    var _data_manifestação_extraInitializers = [];
    var _projeto-predial_decorators;
    var _projeto-predial_initializers = [];
    var _projeto-predial_extraInitializers = [];
    var _construtor_decorators;
    var _construtor_initializers = [];
    var _construtor_extraInitializers = [];
    var Contrato = _classThis = /** @class */ (function (_super) {
        __extends(Contrato_1, _super);
        function Contrato_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.necessidade_bolsa = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _necessidade_bolsa_initializers, void 0));
            _this.justificativa = (__runInitializers(_this, _necessidade_bolsa_extraInitializers), __runInitializers(_this, _justificativa_initializers, void 0));
            _this.data_manifestação = (__runInitializers(_this, _justificativa_extraInitializers), __runInitializers(_this, _data_manifestação_initializers, void 0));
            _this.projeto-predial = (__runInitializers(_this, _data_manifestação_extraInitializers), __runInitializers(_this, _projeto-predial_initializers, void 0));
            _this.construtor = (__runInitializers(_this, _projeto-predial_extraInitializers), __runInitializers(_this, _construtor_initializers, void 0));
            __runInitializers(_this, _construtor_extraInitializers);
            return _this;
        }
        return Contrato_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Contrato");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _necessidade_bolsa_decorators = [(0, typeorm_1.Column)()];
        _justificativa_decorators = [(0, typeorm_1.Column)()];
        _data_manifestação_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _projeto-predial_decorators = [(0, typeorm_1.ManyToOne)(function () { return projeto-predial_1.default; }, function (projeto-predial) { return projeto-predial.contratos; }, { onDelete: "CASCADE" })];
        _construtor_decorators = [(0, typeorm_1.ManyToOne)(function () { return construtor_1.default; }, function (construtor) { return construtor.contratos; }, { onDelete: "CASCADE" })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _necessidade_bolsa_decorators, { kind: "field", name: "necessidade_bolsa", static: false, private: false, access: { has: function (obj) { return "necessidade_bolsa" in obj; }, get: function (obj) { return obj.necessidade_bolsa; }, set: function (obj, value) { obj.necessidade_bolsa = value; } }, metadata: _metadata }, _necessidade_bolsa_initializers, _necessidade_bolsa_extraInitializers);
        __esDecorate(null, null, _justificativa_decorators, { kind: "field", name: "justificativa", static: false, private: false, access: { has: function (obj) { return "justificativa" in obj; }, get: function (obj) { return obj.justificativa; }, set: function (obj, value) { obj.justificativa = value; } }, metadata: _metadata }, _justificativa_initializers, _justificativa_extraInitializers);
        __esDecorate(null, null, _data_manifestação_decorators, { kind: "field", name: "data_manifesta\u00E7\u00E3o", static: false, private: false, access: { has: function (obj) { return "data_manifesta\u00E7\u00E3o" in obj; }, get: function (obj) { return obj.data_manifestação; }, set: function (obj, value) { obj.data_manifestação = value; } }, metadata: _metadata }, _data_manifestação_initializers, _data_manifestação_extraInitializers);
        __esDecorate(null, null, _projeto-predial_decorators, { kind: "field", name: "projeto-predial", static: false, private: false, access: { has: function (obj) { return "projeto-predial" in obj; }, get: function (obj) { return obj.projeto-predial; }, set: function (obj, value) { obj.projeto-predial = value; } }, metadata: _metadata }, _projeto-predial_initializers, _projeto-predial_extraInitializers);
        __esDecorate(null, null, _construtor_decorators, { kind: "field", name: "construtor", static: false, private: false, access: { has: function (obj) { return "construtor" in obj; }, get: function (obj) { return obj.construtor; }, set: function (obj, value) { obj.construtor = value; } }, metadata: _metadata }, _construtor_initializers, _construtor_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Contrato = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Contrato = _classThis;
}();
exports.default = Contrato;
