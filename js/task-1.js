const userUl = document.querySelector("#categories");

// console.log(userUl);

const userUlItem = userUl.querySelectorAll("li.item");

// console.log(userUlItem);


console.log(`Number of categories: ${userUlItem.length}`);

userUlItem.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementsLi = item.querySelectorAll("ul li").length;


    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsLi}`);
});












