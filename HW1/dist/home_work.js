const data = [
    {
        name: "The1",
        price: 100,
    },
    {
        name: "The2",
        price: 200,
    },
    {
        name: "The3",
        price: 100,
    },
    {
        name: "123123lorem",
        price: 300,
    },
    {
        name: "bgfadsflorem",
        price: 400,
    },
    {
        name: "The1",
        price: 500,
    },
    {
        name: "asdfasdflorem",
        price: 100,
    },
    {
        name: "afdsfasdfadsflorem",
        price: 800,
    },
    {
        name: "asdfasdfasdlorem",
        price: 1000,
    },
];
const dataGrouped = new Map();
data.forEach((el) => {
    var _a, _b, _c, _d, _e;
    if (el.price >= 1 && el.price <= 100) {
        dataGrouped.set("firstGroup", [...(_a = dataGrouped.get("firstGroup")) !== null && _a !== void 0 ? _a : [], el]);
    }
    if (el.price >= 101 && el.price <= 200) {
        dataGrouped.set("secondGroup", [...(_b = dataGrouped.get("secondGroup")) !== null && _b !== void 0 ? _b : [], el]);
    }
    if (el.price >= 201 && el.price <= 300) {
        dataGrouped.set("thirdGroup", [...(_c = dataGrouped.get("thirdGroup")) !== null && _c !== void 0 ? _c : [], el]);
    }
    if (el.price >= 301 && el.price <= 400) {
        dataGrouped.set("fourthGroup", [...(_d = dataGrouped.get("fourthGroup")) !== null && _d !== void 0 ? _d : [], el]);
    }
    if (el.price >= 401) {
        dataGrouped.set("fiveGroup", [...(_e = dataGrouped.get("fiveGroup")) !== null && _e !== void 0 ? _e : [], el]);
    }
});
dataGrouped.forEach((el, arg) => {
    el.sort((a, b) => {
        console.log(a.name.replace(/^The/, ""));
        console.log(b.name.replace(/^The/, ""));
        return a.name.replace(/^The/, "") > b.name.replace(/^The/, "") ? 1 : -1;
    });
});
console.log(Object.fromEntries(dataGrouped.entries()));
export {};
