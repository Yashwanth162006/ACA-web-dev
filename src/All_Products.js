import DSLR_1 from "./Images/DSLR/DSLR-1.png";
import DSLR_2 from "./Images/DSLR/DSLR-2.png";
import DSLR_3 from "./Images/DSLR/DSLR-3.png";
import Sketchers_1 from "./Images/Sketchers/Sketchers-1.png";
import Sketchers_2 from "./Images/Sketchers/Sketchers-2.png";
import Sketchers_3 from "./Images/Sketchers/Sketchers-3.png";
import Ipad_1 from "./Images/Ipad/Ipad-1.png";
import Ipad_2 from "./Images/Ipad/Ipad-2.png";
import Ipad_3 from "./Images/Ipad/Ipad-3.png";
import MacbookPro_1 from "./Images/Macbook Pro/Macbook Pro-1.png";
import MacbookPro_2 from "./Images/Macbook Pro/Macbook Pro-2.png";
import MacbookPro_3 from "./Images/Macbook Pro/Macbook Pro-3.png";
import Asus_Laptop from "./Images/Asus Laptop.png";
import Campus_shoe from "./Images/Campus shoe.png";
import Dell_Inspiron from "./Images/Dell Inspiron Touch.png";
import Drone from "./Images/Drone.png";
import Hp_Pavilion from "./Images/Hp Pavilion.png";
import Omen from "./Images/Omen.png";
import Onep_Earpods from "./Images/One+ Earpods.png";
import Onep_Mobile from "./Images/One+ Mobile.png";

let product_list = [
    
    {
        id: 1,
        src1: DSLR_1,
        src2: DSLR_2,
        src3: DSLR_3,
        name: "DSLR",
        brand: "Canon",
        description: "Best of Canon..",
        price: 159,
        stock: 5,
        quantity: 3,
        rating: 5,
        category: "Camera",
        isInCart: false,
        isFavourite: false,
    },
    {
        id: 2,
        src1: Sketchers_1,
        src2: Sketchers_2,
        src3: Sketchers_3,
        name: "Sketchers",
        brand: "Sketchers",
        description: "From Sketchers..",
        price: 99,
        stock: 6,
        quantity: 4,
        rating: 4,
        category: "Shoes",
        isInCart: false,
        isFavourite: false,
    },
    
    {   
        id: 3,
        src1: Ipad_1,
        src2: Ipad_2,
        src3: Ipad_3,
        name: "Ipad",
        brand: "Apple",
        description: "Best Tablets Ever Made..",
        price: 543,
        stock: 6,
        quantity: 4,
        rating: 5,
        category: "Tablets",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 4,
        src1: MacbookPro_1,
        src2: MacbookPro_2,
        src3: MacbookPro_3,
        name: "Macbook Pro",
        brand: "Apple",
        description: "High Performance..",
        price: 890,
        stock: 9,
        quantity: 7,
        rating: 5,
        category: "Laptops",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 5,
        src1: Asus_Laptop,
        name: "Asus Vivobook",
        brand: "Asus",
        description: "OLED Display..",
        price: 670,
        stock: 8,
        quantity: 3,
        rating: 4,
        category: "Laptops",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 6,
        src1: Campus_shoe,
        name: "Campus Shoe",
        brand: "Campus",
        description: "Indian Product..",
        price: 56,
        stock: 3,
        quantity: 7,
        rating: 5,
        category: "Shoes",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 7,
        src1: Dell_Inspiron,
        name: "Dell Inspiron touch",
        brand: "Dell",
        description: "2 in 1 Laptop..",
        price: 630,
        stock: 9,
        quantity: 7,
        rating: 3,
        category: "Laptops",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 8,
        src1: Drone,
        name: "Drone",
        brand: "Apple",
        description: "Quality Camera..",
        price: 237,
        stock: 8,
        quantity: 12,
        rating: 4,
        category: "Drones",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 9,
        src1: Hp_Pavilion,
        name: "Hp Pavilion",
        brand: "Hp",
        description: "Best of Hp..",
        price: 630,
        stock: 9,
        quantity: 7,
        rating: 5,
        category: "Laptops",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 10,
        src1: Omen,
        name: "Omen 16",
        brand: "Hp",
        description: "Best Gaming Laptop..",
        price: 730,
        stock: 9,
        quantity: 7,
        rating: 5,
        category: "Laptops",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 11,
        src1: Onep_Earpods,
        name: "One Plus Earpods",
        brand: "One plus",
        description: "Good Earpods..",
        price: 86,
        stock: 9,
        quantity: 7,
        rating: 5,
        category: "Earpods",
        isInCart: false,
        isFavourite: false,
    },
    {   
        id: 12,
        src1: Onep_Mobile,
        name: "One plus Mobile",
        brand: "One plus",
        description: "Nice Color..",
        price: 230,
        stock: 9,
        quantity: 7,
        rating: 4,
        category: "Mobiles",
        isInCart: false,
        isFavourite: false,
    },
]

function correctIds(product_list){
    const length = product_list.length;
    let count = 1;
    for(let i=0;i<length;i++){
        product_list[i].id = count;
        count++;
    }
    return product_list;
}
product_list = correctIds(product_list);
export default product_list;