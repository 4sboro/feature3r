const outfits = {
    wedding: [
      { name: "Elegant Gown", image: "wedding1.jpg" },
      { name: "Floral Maxi", image: "wedding2.jpg" }
    ],
    party: [
      { name: "Sequin Dress", image: "party1.jpg" },
      { name: "Jumpsuit", image: "party2.jpg" }
    ],
    interview: [
      { name: "Blazer & Pants", image: "interview1.jpg" },
      { name: "Formal Dress", image: "interview2.jpg" }
    ],
    casual: [
      { name: "Denim Jacket", image: "casual1.jpg" },
      { name: "Comfy Sweats", image: "casual2.jpg" }
    ],
    kidschool: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ],
      kidparty: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ],
      Bosslady: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ],
      sexy: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ],  
      Mencasual: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ], 
      datenight: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ],   
      nogender: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ],
      justout: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ], 
      causually: [
        { name: "Denim Jacket", image: "casual1.jpg" },
        { name: "Comfy Sweats", image: "casual2.jpg" }
      ]         
  };
  
  const eventType = document.getElementById("eventType");
  const outfitsDiv = document.getElementById("outfits");
  
  eventType.addEventListener("change", () => {
    const selected = eventType.value;
    showOutfits(selected);
  });
  
  function showOutfits(type) {
    outfitsDiv.innerHTML = "";
    outfits[type].forEach(outfit => {
      const div = document.createElement("div");
      div.className = "outfit";
      div.innerHTML = `<img src="${outfit.image}" alt="${outfit.name}" />
                       <p>${outfit.name}</p>`;
      outfitsDiv.appendChild(div);
    });
  }
  
  window.onload = () => {
    showOutfits(eventType.value);
  };
  