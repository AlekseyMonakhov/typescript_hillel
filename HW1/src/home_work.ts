type obj = {
    name: string,
    price: number
}
const data: obj[] = [
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

const dataGrouped = new Map<string, obj[]>()

data.forEach((el) => {
    if (el.price >= 1 && el.price <= 100) {
        dataGrouped.set("firstGroup", [...dataGrouped.get("firstGroup") ?? [], el])

    }
    if (el.price >= 101 && el.price <= 200) {
        dataGrouped.set("secondGroup", [...dataGrouped.get("secondGroup") ?? [], el])
    }
    if (el.price >= 201 && el.price <= 300) {
        dataGrouped.set("thirdGroup", [...dataGrouped.get("thirdGroup") ?? [], el])
    }
    if (el.price >= 301 && el.price <= 400) {
        dataGrouped.set("fourthGroup", [...dataGrouped.get("fourthGroup") ?? [], el])
    }
    if (el.price >= 401) {
        dataGrouped.set("fiveGroup", [...dataGrouped.get("fiveGroup") ?? [], el])
    }
});

dataGrouped.forEach((el, arg) => {
    el.sort((a, b) => {
        console.log(a.name.replace(/^The/, ""))
        console.log(b.name.replace(/^The/, ""))

        return a.name.replace(/^The/, "") > b.name.replace(/^The/, "") ? 1 : -1
    })
})

console.log(Object.fromEntries(dataGrouped.entries()))

