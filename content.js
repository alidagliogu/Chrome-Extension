var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var ws_data;
var sc;
var last_sc;
last_sc = 0;
var data;
var obj;
var btn;
var inp;
var div;
var savebtn;
// savebtn =document.createElement("button");
// savebtn.innerText="save excel";
// savebtn.style.cssText="padding: 5px 20px;border: none;background: orange;cursor: pointer;border-radius: 10px;font-size: 16px;color: white;font-weight: 700;letter-spacing: 1px; margin-left:5px;"
btn = document.createElement("button");
inp = document.createElement("input");
inp.setAttribute("type", "number");
inp.placeholder = "tekrar sayısı";
div = document.querySelector("#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div.srch-rslt-title");
btn.innerText = "Fiyatları Listele";
btn.style.cssText = "padding: 5px 20px;border: none;background: orange;cursor: pointer;border-radius: 10px;font-size: 16px;color: white;font-weight: 700;letter-spacing: 1px; margin-left:5px;";
inp.style.cssText = "border: 1px solid orange;font-size: 16px;width: 110px;padding: 10px 16px;";
div.appendChild(inp);
div.appendChild(btn);
// div.appendChild(savebtn)
ws_data = [];
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
btn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    function dataekle() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                data = document.querySelectorAll("div.prc-box-dscntd.new-font");
                data.forEach(function (element) {
                    obj = {
                        fiyat: element.innerText,
                        marka: element.parentElement.parentElement.previousElementSibling.previousElementSibling.querySelector("span:nth-child(1)").innerText,
                        description: element.parentElement.parentElement.previousElementSibling.previousElementSibling.querySelector("span:nth-child(2)").innerText
                    };
                    ws_data.push(obj);
                });
                console.log(ws_data);
                return [2 /*return*/];
            });
        });
    }
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sc = inp.value;
                last_sc = 0;
                _a.label = 1;
            case 1:
                if (!(sc != last_sc)) return [3 /*break*/, 3];
                return [4 /*yield*/, sleep(3000)];
            case 2:
                _a.sent();
                document.querySelector("html").scrollTo(0, document.querySelector("#search-app").scrollHeight);
                last_sc += 1;
                return [3 /*break*/, 1];
            case 3: return [4 /*yield*/, dataekle()];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }
// savebtn.addEventListener("click",()=>{
//   saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
// })
);
