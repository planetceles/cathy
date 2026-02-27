const year = document.getElementById("current-year");
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const hamButton = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-links");

if (hamButton && navLinks) {
    hamButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamButton.classList.toggle("open");

        hamButton.setAttribute("aria-expanded", isOpen);
    });
}


const events = [

  // ================= JANUARY =================
  {
    id: "new-year",
    name: "New Year's Festival",
    type: "public",
    eventDate: "01-01",
    start: "12-20",
    end: "01-10",
    theme: {
      primary: "#D4AF37",
      secondary: "#000000",
      accent: "#FFFFFF"
    },
    gifts: ["champagne hampers", "luxury cakes", "corporate gift boxes"]
  },

  // ================= FEBRUARY =================
  {
    id: "valentine",
    name: "Valentine's Collection",
    type: "commercial",
    eventDate: "02-14",
    start: "01-10",
    end: "02-28",
    theme: {
      primary: "#C21833",
      secondary: "#F8C8DC",
      accent: "#FFF5F7"
    },
    gifts: ["roses", "romantic cakes", "perfumes", "watches", "couple hampers"]
  },

  // ================= MARCH =================
  {
    id: "human-rights",
    name: "Human Rights Day Specials",
    type: "public",
    eventDate: "03-21",
    start: "03-01",
    end: "03-25",
    theme: {
      primary: "#007A4D",
      secondary: "#FFB612",
      accent: "#000000"
    },
    gifts: ["south african hampers", "cultural gift boxes", "corporate appreciation"]
  },

  // ================= APRIL =================
  {
    id: "april-fools",
    name: "April Fools Fun Gifts",
    type: "commercial",
    eventDate: "04-01",
    start: "03-27",
    end: "04-05",
    theme: {
      primary: "#6A0DAD",
      secondary: "#FFD700",
      accent: "#FFFFFF"
    },
    gifts: ["funny cakes", "surprise boxes", "mystery hampers"]
  },

  {
    id: "freedom-day",
    name: "Freedom Day Collection",
    type: "public",
    eventDate: "04-27",
    start: "04-15",
    end: "04-30",
    theme: {
      primary: "#E03C31",
      secondary: "#007A4D",
      accent: "#FFB612"
    },
    gifts: ["heritage hampers", "proudly SA gifts"]
  },

  // ================= MAY =================
  {
    id: "mothers-day",
    name: "Mother's Day Luxury Collection",
    type: "commercial",
    eventDate: "05-12", // example (second Sunday May varies yearly)
    start: "05-01",
    end: "05-20",
    theme: {
      primary: "#F4A6B8",
      secondary: "#E6BE8A",
      accent: "#FFFFFF"
    },
    gifts: ["flower boxes", "spa hampers", "handbags", "jewelry"]
  },

  // ================= JUNE =================
  {
    id: "youth-day",
    name: "Youth Day Specials",
    type: "public",
    eventDate: "06-16",
    start: "06-01",
    end: "06-20",
    theme: {
      primary: "#1E90FF",
      secondary: "#FFD700",
      accent: "#FFFFFF"
    },
    gifts: ["tech gadgets", "fashion items", "sneakers"]
  },

  // ================= AUGUST =================
  {
    id: "womens-day",
    name: "Women's Day Collection",
    type: "public",
    eventDate: "08-09",
    start: "08-01",
    end: "08-20",
    theme: {
      primary: "#800080",
      secondary: "#D4AF37",
      accent: "#FFFFFF"
    },
    gifts: ["perfumes", "luxury handbags", "premium cakes", "jewelry"]
  },

  // ================= SEPTEMBER =================
  {
    id: "heritage-day",
    name: "Heritage Day Luxury Collection",
    type: "public",
    eventDate: "09-24",
    start: "09-10",
    end: "09-30",
    theme: {
      primary: "#FFB612",
      secondary: "#007A4D",
      accent: "#000000"
    },
    gifts: ["braai sets", "cultural hampers", "south african gifts"]
  },

  // ================= OCTOBER =================
  {
    id: "halloween",
    name: "Halloween Collection",
    type: "commercial",
    eventDate: "10-31",
    start: "10-15",
    end: "10-31",
    theme: {
      primary: "#FF7518",
      secondary: "#000000",
      accent: "#6A0DAD"
    },
    gifts: ["themed cakes", "kids boxes", "party hampers"]
  },

  // ================= NOVEMBER =================
  {
    id: "black-friday",
    name: "Black Friday Luxury Deals",
    type: "commercial",
    eventDate: "11-29", // varies yearly
    start: "11-15",
    end: "11-30",
    theme: {
      primary: "#000000",
      secondary: "#D4AF37",
      accent: "#FFFFFF"
    },
    gifts: ["discount hampers", "limited gift boxes"]
  },

  // ================= DECEMBER =================
  {
    id: "christmas",
    name: "Christmas Luxury Collection",
    type: "public",
    eventDate: "12-25",
    start: "12-01",
    end: "12-26",
    theme: {
      primary: "#B22222",
      secondary: "#006400",
      accent: "#FFD700"
    },
    gifts: ["premium hampers", "family boxes", "corporate gifts", "designer cakes"]
  }

];

function isDateInRange(today, start, end) {
    if (start <= end) {
        return today >= start && today <= end;
    }
    else {
        return today >= start || today <= end;
    }
}
function getCurrentEvent() {
    const today = new Date();
    const todayNumber = (today.getMonth() + 1) * 100 + today.getDate();

    for (let event of events) {
        const [startMonth, startDay] = event.start.split("-").map(Number);
        const [endMonth, endDay] = event.end.split("-").map(Number);

        const startNumber = startMonth * 100 + startDay;
        const endNumber = endMonth * 100 + endDay;

        if (isDateInRange(todayNumber, startNumber, endNumber)) {
            return event;
        }
    }
    return null;
}
document.addEventListener("DOMContentLoaded", function () {
    const activeEvent = getCurrentEvent();
    const eventElement = document.getElementById("currentEventName");

    if (activeEvent && eventElement) {
        eventElement.textContent = activeEvent.name;
    }
    else if (eventElement) {
        eventElement.textContent = "Luxury Gifts Collection"
    }
});

// upcoming event
function getUpcomingEvent() {
  const today = new Date();
  const currentYear = today.getFullYear();

  let upcoming = null;
  let smallestTimeDiff = Infinity;

  for (let event of events) {
    const [month, day] = event.eventDate.split("-").map(Number);

    // Create event date for THIS year
    let eventDate = new Date(currentYear, month - 1, day);

    // If event already passed, move to next year
    if (eventDate <= today) {
      eventDate = new Date(currentYear + 1, month - 1, day);
    }

    const timeDiff = eventDate - today;

    if (timeDiff < smallestTimeDiff) {
      smallestTimeDiff = timeDiff;
      upcoming = event;
    }
  }

  return upcoming;
}
const upcomingEvent = getUpcomingEvent();
const upcomingElement = document.getElementById("upcoming-event-name");

if (upcomingEvent && upcomingElement) {
  upcomingElement.textContent = upcomingEvent.name;
}

// document.body.style.background = activeEvent.theme.primary;


// const events = [
//     {
//         name: "New Year's Day",
//         date: "2026-01-01",
//         theme: "new-year"
//     },
//     {
//         name: "Valentine's Day",
//         date: "2026-02-14",
//         theme: "valentines"
//     },
//     {
//         name: "Human Rights Day",
//         date: "2026-03-21",
//         theme: "blue"
//     },
//     {
//         name: "Good Friday",
//         date: "2026-04-03",
//         theme: "neutral"
//     },
//     {
//         name: "Freedom Day",
//         date: "2026-04-27",
//         theme: "orange"
//     },
//     {
//         name: "Workers' Day",
//         date: "2026-05-01",
//         theme: "orange"
//     },
//     {
//         name: "Mother's Day",
//         date: "2026-05-10",
//         theme: "mother-day"
//     },
//     {
//         name: "Youth Day",
//         date: "2026-06-16",
//         theme: "blue"
//     },
//     {
//         name: "Father's Day",
//         date: "2026-06-21",
//         theme: "father-day"
//     },
//     {
//         name: "Mandela Day",
//         date: "2026-07-18",
//         theme: "gold"
//     },
//     {
//         name: "Women's Day",
//         date: "2026-08-09",
//         theme: "mother-day"
//     },
//     {
//         name: "Heritage Day",
//         date: "2026-09-24",
//         theme: "orange"
//     },
//     {
//         name: "Halloween",
//         date: "2026-10-31",
//         theme: "dark"
//     },
//     {
//         name: "Black Friday",
//         date: "2026-11-27",
//         theme: "dark"
//     },
//     {
//         name: "Day of Reconciliation",
//         date: "2026-12-16",
//         theme: "blue"
//     },
//     {
//         name: "Christmas",
//         date: "2026-12-25",
//         theme: "christmas"
//     },
//     {
//         name: "New Year's Eve",
//         date: "2026-12-31",
//         theme: "new-year"
//     }
// ];


// const currentEventName = []

// const upcomingEventName = []

// const allEvent = []

const cakes = [
    {
        cakeName: "Cake",
        cakeDescription: "Simple Cake",
        cakePrice: "R250",
        image: "images/cake.jpeg"
        // image: "images/cake-love.jpeg"
    },
    {
        cakeName: "Flower Cake",
        cakeDescription: "Flower, Cake, Love Box",
        cakePrice: "R250",
        image: "images/cake-love.jpeg"
    },
    {
        cakeName: "Cake Flower",
        cakeDescription: "Cake, Rose",
        cakePrice: "R250",
        image: "images/love-flower.jpeg"
    },
    {
        cakeName: "Pink Cake",
        cakeDescription: "Chocolate, bottle",
        cakePrice: "R250",
        image: "images/pink-flower-love.jpeg"
    }
];

const gifts = [
    {
        giftName: "Child Gift",
        giftDescription: "Child Care",
        giftPrice: "R250",
        image: "images/child-care.jpeg"
    },
    {
        giftName: "New Year Celebration Pack",
        giftDescription: "Champagne & party set",
        giftPrice: "R890",
        image: "images/flower-drink.jpeg",
        occasion: "New Year's Eve"
    },
    {
        giftName: "Love Mash",
        giftDescription: "Chocolate, Lips Stick",
        giftPrice: "R250",
        image: "images/lips-love.jpeg"
    },
    {
        giftName: "Romantic Love Box",
        giftDescription: "Chocolate, wine & roses",
        giftPrice: "R450",
        image: "images/love.jpeg",
        occasion: "valentine"
    },
    {
        giftName: "Chocolate Love",
        giftDescription: "Chocolate, bottle, Flower",
        giftPrice: "R250",
        image: "images/love-chocolate.jpeg"
        // occasion: "valentine"
    },
    {
        giftName: "Love Drink",
        giftDescription: "Chocolate, bottle, Drink",
        giftPrice: "R250",
        image: "images/love-drink.jpeg"
    },
    {
        giftName: "Mother Luxury Set",
        giftDescription: "Perfume, flowers & spa kit",
        giftPrice: "R750",
        image: "images/love-perfume.jpeg",
        occasion: "mothers-day"
    },
    {
        giftName: "Love Rub",
        giftDescription: "Chocolate, Rub",
        giftPrice: "R250",
        image: "images/love-rub.jpeg"
    },
    {
        giftName: "Pink Love",
        giftDescription: "Chocolate, , Drink",
        giftPrice: "R250",
        image: "images/pink-love.jpeg"
    },
    {
        giftName: "Christmas Luxury Box",
        giftDescription: "Wine, chocolate & décor",
        giftPrice: "R1200",
        image: "images/red-love.jpeg",
        occasion: "christmas"
    },
    {
        giftName: "Executive Father Hamper",
        giftDescription: "Watch, wine & chocolate",
        giftPrice: "R950",
        image: "images/wine-love.jpeg",
        occasion: "fathers-day"
    }
];

const cakeContainer = document.querySelector("#cake-card");

function displayCakes() {
    cakeContainer.innerHTML = "";

    cakes.forEach(cake => {
        const card = document.createElement("div");
        card.classList.add("cake-item");

        card.innerHTML = `
            <img src="${cake.image}" alt="${cake.cakeName}">
            <h4><span class="label">${cake.cakeName}</span></h4>
            <p><span class="label">${cake.cakeDescription}</span></p>
            <span class="label"><strong>${cake.cakePrice}</strong></span>
        `;
        cakeContainer.appendChild(card);
    });
}
displayCakes();

const products = [
    {
        name: "Child Gift",
        description: "Child Care",
        price: "R250",
        image: "images/child-care.jpeg",
        occasion: "human-rights"
    },
    {
        name: "New Year Celebration Pack",
        description: "Champagne & party set",
        price: "R890",
        image: "images/flower-drink.jpeg",
        occasion: "New Year's Eve"
    },
    {
        name: "Love Mash",
        description: "Chocolate, Lips Stick",
        price: "R250",
        image: "images/lips-love.jpeg",
        occasion: "valentine"
    },
    {
        name: "Romantic Love Box",
        description: "Chocolate, wine & roses",
        price: "R450",
        image: "images/love.jpeg",
        occasion: "valentine"
    },
    {
        name: "Chocolate Love",
        description: "Chocolate, bottle, Flower",
        price: "R250",
        image: "images/love-chocolate.jpeg",
        occasion: "valentine"
    },
    {
        name: "Love Drink",
        description: "Chocolate, bottle, Drink",
        price: "R250",
        image: "images/love-drink.jpeg",
        occasion: "valentine"
    },
    {
        name: "Mother Luxury Set",
        description: "Perfume, flowers & spa kit",
        price: "R750",
        image: "images/love-perfume.jpeg",
        occasion: "mothers-day"
    },
    {
        name: "Love Rub",
        description: "Chocolate, Rub",
        price: "R250",
        image: "images/love-rub.jpeg",
        occasion: "valentine"
    },
    {
        name: "Pink Love",
        description: "Chocolate, , Drink",
        price: "R250",
        image: "images/pink-love.jpeg"
    },
    {
        name: "Christmas Luxury Box",
        description: "Wine, chocolate & décor",
        price: "R1200",
        image: "images/red-love.jpeg",
        occasion: "christmas"
    },
    {
        name: "Executive Father Hamper",
        description: "Watch, wine & chocolate",
        price: "R950",
        image: "images/wine-love.jpeg",
        occasion: "fathers-day"
    },
    {
        name: "Cake",
        description: "Simple Cake",
        price: "R250",
        // image: "images/cake.jpeg"
        image: "images/cake-love.jpeg",
        occasion: "human-rights"
    },
    {
        name: "Flower Cake",
        description: "Flower, Cake, Love Box",
        price: "R250",
        image: "images/cake-love.jpeg"
    },
    {
        name: "Cake Flower",
        description: "Cake, Rose",
        price: "R250",
        image: "images/love-flower.jpeg"
    },
    {
        name: "Pink Cake",
        description: "Chocolate, bottle",
        price: "R250",
        image: "images/pink-flower-love.jpeg"
    }
];

const productContainer = document.querySelector("#all-event-card");

function displayProducts(list) {
    productContainer.innerHTML = "";

    list.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("cake-item");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4><span class="label">${item.name}</span></h4>
            <p><span class="label">${item.description}</span></p>
            <span class="label"><strong>${item.price}</strong></span>
        `;
        productContainer.appendChild(card);
    });
}
displayProducts(products);


// function displayCurrentEventProducts() {
//     const activeEvent = getCurrentEvent();
//     const container = document.querySelector("#current-event-card");
//     container.innerHTML = "";

//     if (!activeEvent) {
//         container.innerHTML = "<p>No active event right now.</p>";
//         return;
//     }

//     const filtered = products.filter(product =>
//         product.occasion === activeEvent.name
//     );

//     if (filtered.length === 0) {
//         container.innerHTML = "<p>Luxury collection coming soon...</p>";
//         return;
//     }

//     filtered.forEach(item => {
//         const card = createBeautifulCard(item);
//         container.appendChild(card);
//     });
// }
// displayCurrentEventProducts();

function displayUpcomingEventProducts() {
    const upcoming = getUpcomingEvent();
    const container = document.querySelector("#upcoming-event-card");
    container.innerHTML = "";

    if (!upcoming) return;

    const filtered = products.filter(product =>
        product.occasion === upcoming.id
    );

    filtered.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("cake-item");

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <strong>${item.price}</strong>
    `;

    container.appendChild(card);
});
}
displayUpcomingEventProducts();

const currentEvent = [
    {
        name: "Pink Love",
        description: "Chocolate, , Drink",
        price: "R250",
        image: "images/pink-love.jpeg"
    },
    {
        name: "Love Rub",
        description: "Chocolate, Rub",
        price: "R250",
        image: "images/love-rub.jpeg"
    }
];
function displayCurrentEventProducts() {
    const activeEvent = getCurrentEvent();
    const container = document.querySelector("#current-event-card");
    container.innerHTML = "";

    if (!activeEvent) {
        container.innerHTML = "<p>No active event right now.</p>";
        return;
    }

    // Filter products by event name
    const filtered = products.filter(product =>
        product.occasion === activeEvent.id
    );

    if (filtered.length === 0) {
        container.innerHTML = "<p>Luxury collection coming soon...</p>";
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("cake-item");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <strong>${item.price}</strong>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    displayCurrentEventProducts();
    displayUpcomingEventProducts();
});

// const nowContainer = document.querySelector("#current-event-card");

// function displayCakes() {
//     cakeContainer.innerHTML = "";

//     cakes.forEach(cake => {
//         const card = document.createElement("div");
//         card.classList.add("cake-item");

//         card.innerHTML = `
//             <img src="${cake.image}" alt="${cake.cakeName}">
//             <h4><span class="label">${cake.cakeName}</span></h4>
//             <p><span class="label">${cake.cakeDescription}</span></p>
//             <span class="label"><strong>${cake.cakePrice}</strong></span>
//         `;
//         cakeContainer.appendChild(card);
//     });
// }


// this here
// const currentContainer = document.querySelector("#current-event-card");

// function displayCurrentEventProducts(list) {
//     currentContainer.innerHTML = "";

//     list.forEach(items => {
//         const card = document.createElement("div");
//         card.classList.add("cake-item");

//         card.innerHTML = `
//             <img src="${items.image}" alt="${items.name}">
//             <h4><span class="label">${items.name}</span></h4>
//             <p><span class="label">${items.description}</span></p>
//             <span class="label"><strong>${items.price}</strong></span>
//         `;
//         currentContainer.appendChild(card);
//     });
// }
// displayCurrentEventProducts(currentEvent);


// document.addEventListener("DOMContentLoaded", function () {
//     const activeEvent = getCurrentEvent();
//     const eventElement = document.getElementById("currentEventName");

//     if (activeEvent && eventElement) {
//         eventElement.textContent = activeEvent.name;

//         // Apply theme color
//         document.body.style.background = activeEvent.theme.accent;
//     }

//     displayCurrentEventProducts();
//     displayUpcomingEventProducts();
// });





// const currentEvent = [

// ]
// const upcomingEvent = [

// ]


// const cakeSelection = document.querySelector("#cake-card");

// function displayCakes(list) {
//     cakeSelection.innerHTML = "";

//     list.forEach(cake => {
//         const card = document.createElement("section");
//         card.classList.add("cake-card");
        
//         card.innerHTML = `
//         <img src="${cake.image}" alt="${cake.cakeName}">
//         <p><span class="label">${cake.cakeName}</span></p>
//         <p><span class="label">${cake.cakeDescription}</span></p>
//         <p><span class="label">${cake.cakePrice}</span></p>
//         `;
//         cakeSelection.appendChild(card);
//     });
// }



// ======================================
// 1️⃣ MASTER EVENTS LIST (South Africa)
// ======================================

// const events = [
//     { name: "New Year's Day", date: "2026-01-01", theme: "new-year" },
//     { name: "Valentine's Day", date: "2026-02-14", theme: "valentines" },
//     { name: "Human Rights Day", date: "2026-03-21", theme: "blue" },
//     { name: "Good Friday", date: "2026-04-03", theme: "neutral" },
//     { name: "Freedom Day", date: "2026-04-27", theme: "orange" },
//     { name: "Workers' Day", date: "2026-05-01", theme: "orange" },
//     { name: "Mother's Day", date: "2026-05-10", theme: "mother-day" },
//     { name: "Youth Day", date: "2026-06-16", theme: "blue" },
//     { name: "Father's Day", date: "2026-06-21", theme: "father-day" },
//     { name: "Mandela Day", date: "2026-07-18", theme: "gold" },
//     { name: "Women's Day", date: "2026-08-09", theme: "mother-day" },
//     { name: "Heritage Day", date: "2026-09-24", theme: "orange" },
//     { name: "Halloween", date: "2026-10-31", theme: "dark" },
//     { name: "Black Friday", date: "2026-11-27", theme: "dark" },
//     { name: "Day of Reconciliation", date: "2026-12-16", theme: "blue" },
//     { name: "Christmas", date: "2026-12-25", theme: "christmas" },
//     { name: "New Year's Eve", date: "2026-12-31", theme: "new-year" }
// ];


// // ======================================
// // 2️⃣ GIFTS LIST (FULL)
// // ======================================

// const gifts = [
//     {
//         giftName: "Romantic Love Box",
//         giftDescription: "Chocolate, wine & roses",
//         giftPrice: "R450",
//         image: "images/love.jpeg",
//         occasion: "Valentine's Day"
//     },
//     {
//         giftName: "Mother Luxury Set",
//         giftDescription: "Perfume, flowers & spa kit",
//         giftPrice: "R750",
//         image: "images/love-perfume.jpeg",
//         occasion: "Mother's Day"
//     },
//     {
//         giftName: "Executive Father Hamper",
//         giftDescription: "Watch, wine & chocolate",
//         giftPrice: "R950",
//         image: "images/wine-love.jpeg",
//         occasion: "Father's Day"
//     },
//     {
//         giftName: "Christmas Luxury Box",
//         giftDescription: "Wine, chocolate & décor",
//         giftPrice: "R1200",
//         image: "images/red-love.jpeg",
//         occasion: "Christmas"
//     },
//     {
//         giftName: "New Year Celebration Pack",
//         giftDescription: "Champagne & party set",
//         giftPrice: "R890",
//         image: "images/flower-drink.jpeg",
//         occasion: "New Year's Eve"
//     }
// ];


// // ======================================
// // 3️⃣ FIND CURRENT & UPCOMING EVENT
// // ======================================

// const today = new Date();
// let currentEvent = null;
// let upcomingEvent = null;

// events.forEach(event => {
//     const eventDate = new Date(event.date);

//     if (
//         today.getMonth() === eventDate.getMonth() &&
//         today.getDate() === eventDate.getDate()
//     ) {
//         currentEvent = event;
//     }

//     if (eventDate > today && !upcomingEvent) {
//         upcomingEvent = event;
//     }
// });


// // ======================================
// // 4️⃣ DISPLAY CURRENT EVENT
// // ======================================

// if (currentEvent) {
//     document.getElementById("currentEventName").textContent = currentEvent.name;
// } else {
//     document.getElementById("currentEventName").textContent = "Special Day";
// }


// // ======================================
// // 5️⃣ DISPLAY UPCOMING EVENT
// // ======================================

// if (upcomingEvent) {
//     document.getElementById("eventName").textContent = upcomingEvent.name;
// }


// // ======================================
// // 6️⃣ DISPLAY ALL EVENTS
// // ======================================

// const allEventContainer = document.getElementById("all-event-card");

// events.forEach(event => {
//     const card = document.createElement("div");
//     card.classList.add("event-card");

//     card.innerHTML = `
//         <h4>${event.name}</h4>
//         <p>${event.date}</p>
//         <button onclick="filterGifts('${event.name}')">
//             View Gifts
//         </button>
//     `;

//     allEventContainer.appendChild(card);
// });


// // ======================================
// // 7️⃣ DISPLAY GIFTS
// // ======================================

// const cakeSelection = document.querySelector("#cake-card");

// function filterGifts(eventName) {
//     const filtered = gifts.filter(gift => gift.occasion === eventName);
//     displayGifts(filtered);
// }

// function displayGifts(list) {
//     cakeSelection.innerHTML = "";

//     if (list.length === 0) {
//         cakeSelection.innerHTML = "<p>No gifts available yet.</p>";
//         return;
//     }

//     list.forEach(gift => {
//         const card = document.createElement("div");
//         card.classList.add("cake-item");

//         card.innerHTML = `
//             <img src="${gift.image}" alt="${gift.giftName}">
//             <h4>${gift.giftName}</h4>
//             <p>${gift.giftDescription}</p>
//             <strong>${gift.giftPrice}</strong>
//         `;

//         cakeSelection.appendChild(card);
//     });
// }


// // ======================================
// // 8️⃣ DISPLAY ALL GIFTS BY DEFAULT
// // ======================================

// displayGifts(gifts);