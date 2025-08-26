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
exports.Titulação = void 0;
var typeorm_1 = require("typeorm");
var usu_rio_1 = require("./usu\u00E1rio");
var projeto-predial_1 = require("./projeto-predial");
var Titulação;
(function (Titulação) {
    Titulação["MESTRADO"] = "mestrado";
    Titulação["DOUTORADO"] = "doutorado";
})(Titulação || (exports.Titulação = Titulação = {}));
;
var Arquiteto = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = typeorm_1.BaseEntity;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _titulação_decorators;
    var _titulação_initializers = [];
    var _titulação_extraInitializers = [];
    var _anos_experiência_empresarial_decorators;
    var _anos_experiência_empresarial_initializers = [];
    var _anos_experiência_empresarial_extraInitializers = [];
    var _projeto-predials_decorators;
    var _projeto-predials_initializers = [];
    var _projeto-predials_extraInitializers = [];
    var _usuário_decorators;
    var _usuário_initializers = [];
    var _usuário_extraInitializers = [];
    var Arquiteto = _classThis = /** @class */ (function (_super) {
        __extends(Arquiteto_1, _super);
        function Arquiteto_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.titulação = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _titulação_initializers, void 0));
            _this.anos_experiência_empresarial = (__runInitializers(_this, _titulação_extraInitializers), __runInitializers(_this, _anos_experiência_empresarial_initializers, void 0));
            _this.projeto-predials = (__runInitializers(_this, _anos_experiência_empresarial_extraInitializers), __runInitializers(_this, _projeto-predials_initializers, void 0));
            _this.usuário = (__runInitializers(_this, _projeto-predials_extraInitializers), __runInitializers(_this, _usuário_initializers, void 0));
            __runInitializers(_this, _usuário_extraInitializers);
            return _this;
        }
        return Arquiteto_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Arquiteto");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _titulação_decorators = [(0, typeorm_1.Column)({ type: "enum", enum: Titulação })];
        _anos_experiência_empresarial_decorators = [(0, typeorm_1.Column)()];
        _projeto-predials_decorators = [(0, typeorm_1.OneToMany)(function () { return projeto-predial_1.default; }, function (projeto-predial) { return projeto-predial.arquiteto; })];
        _usuário_decorators = [(0, typeorm_1.OneToOne)(function () { return usu_rio_1.default; }, function (usuário) { return usuário.arquiteto; }, { onDelete: "CASCADE" }), (0, typeorm_1.JoinColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _titulação_decorators, { kind: "field", name: "titula\u00E7\u00E3o", static: false, private: false, access: { has: function (obj) { return "titula\u00E7\u00E3o" in obj; }, get: function (obj) { return obj.titulação; }, set: function (obj, value) { obj.titulação = value; } }, metadata: _metadata }, _titulação_initializers, _titulação_extraInitializers);
        __esDecorate(null, null, _anos_experiência_empresarial_decorators, { kind: "field", name: "anos_experi\u00EAncia_empresarial", static: false, private: false, access: { has: function (obj) { return "anos_experi\u00EAncia_empresarial" in obj; }, get: function (obj) { return obj.anos_experiência_empresarial; }, set: function (obj, value) { obj.anos_experiência_empresarial = value; } }, metadata: _metadata }, _anos_experiência_empresarial_initializers, _anos_experiência_empresarial_extraInitializers);
        __esDecorate(null, null, _projeto-predials_decorators, { kind: "field", name: "projeto-predials", static: false, private: false, access: { has: function (obj) { return "projeto-predials" in obj; }, get: function (obj) { return obj.projeto-predials; }, set: function (obj, value) { obj.projeto-predials = value; } }, metadata: _metadata }, _projeto-predials_initializers, _projeto-predials_extraInitializers);
        __esDecorate(null, null, _usuário_decorators, { kind: "field", name: "usu\u00E1rio", static: false, private: false, access: { has: function (obj) { return "usu\u00E1rio" in obj; }, get: function (obj) { return obj.usuário; }, set: function (obj, value) { obj.usuário = value; } }, metadata: _metadata }, _usuário_initializers, _usuário_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Arquiteto = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Arquiteto = _classThis;
}();
exports.default = Arquiteto;
