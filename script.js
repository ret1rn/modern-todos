fetch("https://dummyjson.com/users")
    .then(msg => msg.json())
    .then(msg => setData(msg.users))

const allArr = []
const form = document.querySelector("form")
const items = document.querySelectorAll(".items")

function setData(arr) {
    for(let item of arr) {
        allArr.push(item)
    }
    reload(allArr)
}

function reload (arr) {
    items.forEach(el => el.innerHTML = "")
    for(let item of arr) {
        let box = document.createElement("div"),
            top = document.createElement("div"),
            bottom = document.createElement("div"),
            fullName = document.createElement("h1"),
            img = document.createElement("img"),
            age = document.createElement("span"),
            ageNum = document.createElement("span");
        // console.log(item.firstName);
        fullName.innerHTML = `${item.firstName} ${item.lastName}`
        img.src = item.image
        age.innerHTML = "Age"
        ageNum.innerHTML = item.age

        box.classList.add("item")
        top.classList.add("top")
        bottom.classList.add("bottom")
        fullName.classList.add("top__full-name")
        age.classList.add("bottom__age")
        ageNum.classList.add("bottom__ageNum")

        box.append(top, bottom)
        top.append(fullName, img)
        bottom.append(age, ageNum)
        if(+ageNum.innerHTML < 30) {
            items[0].append(box)
        } else if(+ageNum.innerHTML >= 30 && +ageNum.innerHTML < 40){
            items[1].append(box)
        } else {
            items[2].append(box)
        }
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let task = {
        id: Math.random()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })

    if(task.image.length !== 0) {
        allArr.push(task)
    }

    reload(allArr)
})