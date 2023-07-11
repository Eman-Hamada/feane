 


let products = {
    data: [
      {
        productName: "Delicious Pizza",
        postMessage: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        category: "Pizza",
        price: "20",
        image:"images/f1.png",
      },
      {
        productName: "Delicious Burger",
        category: "Burger",
        price: "15",
        image: "images/f2.png",
      },
      {
        productName: "Delicious Pizza",
        category: "Pizza",
        price: "17",
        image: "images/f3.png",
      },
      {
        productName: "Delicious Pasta",
        category: "Pasta",
        price: "18",
        image: "images/f4.png",
      },
      {
        productName: "French Fries",
        category: "Fries",
        price: "10",
        image: "images/f5.png",
      },
      
      {
        productName: "Delicious Pizza",
        category: "Pizza",
        price: "16",
        image: "images/f6.png",
      },
      {
        productName: "Tasty Burger",
        category: "Burger",
        price: "12",
        image: "images/f7.png",
      },
      {
        productName: "Tasty Burger",
        category: "Burger",
        price: "19",
        image: "images/f8.png",
      },

      {
        productName: "Delicious Pasta",
        category: "Pasta",
        price: "10",
        image: "images/f9.png",
      },
    ],
  };
   

  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active1");
      } else {
        button.classList.remove("active1");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };