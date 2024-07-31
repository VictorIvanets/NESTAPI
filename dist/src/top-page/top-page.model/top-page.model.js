"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPageModel = exports.TopPageAdvantage = exports.HhData = exports.TopLevelCategiry = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
var TopLevelCategiry;
(function (TopLevelCategiry) {
    TopLevelCategiry[TopLevelCategiry["Courses"] = 0] = "Courses";
    TopLevelCategiry[TopLevelCategiry["Services"] = 1] = "Services";
    TopLevelCategiry[TopLevelCategiry["Books"] = 2] = "Books";
    TopLevelCategiry[TopLevelCategiry["Products"] = 3] = "Products";
})(TopLevelCategiry || (exports.TopLevelCategiry = TopLevelCategiry = {}));
class HhData {
}
exports.HhData = HhData;
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "count", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "juniorSalary", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "middleSalary", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], HhData.prototype, "seniorSalary", void 0);
class TopPageAdvantage {
}
exports.TopPageAdvantage = TopPageAdvantage;
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageAdvantage.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageAdvantage.prototype, "description", void 0);
let TopPageModel = class TopPageModel extends defaultClasses_1.TimeStamps {
};
exports.TopPageModel = TopPageModel;
__decorate([
    (0, typegoose_1.prop)({ enum: TopLevelCategiry }),
    __metadata("design:type", Number)
], TopPageModel.prototype, "firstLevelCategory", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "secondCategory", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "title", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "alias", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "category", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [HhData] }),
    __metadata("design:type", HhData)
], TopPageModel.prototype, "hh", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [TopPageAdvantage] }),
    __metadata("design:type", Array)
], TopPageModel.prototype, "advantages", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "seoText", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], TopPageModel.prototype, "tagsTitle", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [String] }),
    __metadata("design:type", Array)
], TopPageModel.prototype, "tags", void 0);
exports.TopPageModel = TopPageModel = __decorate([
    (0, typegoose_1.index)({ '$**': 'text' })
], TopPageModel);
//# sourceMappingURL=top-page.model.js.map