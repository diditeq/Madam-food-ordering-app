const categories = [
    {id: 1, name: 'Rice'},
    {id: 2, name: 'Sea Food'},
    {id: 3, name: 'Fish'},
    {id: 4, name: 'Pepper Soup'},
    {id: 5, name: 'Vegetable Soup'},
    {id: 6, name: 'Smoothie'},
];


const offers = [
    {
      id: 1,
      image: 'https://nkechiajaeroh.com/wp-content/uploads/2020/12/Nigerian-fried-rice-recipe-photo-3.jpg',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
      place: 'Genesis',
      type: 'Fried Rice',
      price: '$12.00',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/originals/b2/d5/0c/b2d50c4b7213a42ef4ca43f49dc78480.jpg',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      place: 'Jumia',
      type: 'Jollof Rice',
      price: '$15.00',
    },
    {
      id: 3,
      image: 'https://farmhouzng.com/wp-content/uploads/2021/12/boiled-yam-with-egg-sauce.png',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      place: 'Genesis',
      type: 'Boiled Yam',
      price: '$12.00',
    },
    {
      id: 4,
      image: 'https://i.ytimg.com/vi/y-xNqPnMaYg/maxresdefault.jpg',
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      place: 'Crunches',
      type: 'Vegetable Soup',
      price: '$16.00',
    },
  ];


const favouriteKitchen = [
    {
        id: 1,
        image: 'https://toppng.com/uploads/preview/mcdonalds-logo-transparent-background-11658872813e1gdvuq4jx.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'MC Donalds',
        distance: '10 mins away',
        more: 'See More',
      },
    {
        id: 2,
        image: 'https://betajob.com.ng/storage/files/ng/2648/thumb-240x180-05739cb017805eca8ecfc4baadff4c63.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'Kilimanjaro',
        distance: '45 mins away',
        more: 'See More',
      },
    {
        id: 3,
        image: 'https://pbs.twimg.com/profile_images/2583157912/MrBiggs_logo_400x400.jpg',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Mr Biggs',
        distance: '30 mins away',
        more: 'See More',
      },
    {
        id: 4,
        image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Crunchies',
        distance: '45 mins away',
        more: 'See More',
      },
    {
        id: 5,
        image: 'https://group-live.jumia.is/images/press/articles/jumia-launches-its-food-festival-to-promote-adoption-of-meal-ordering-support-local-restaurants-during-covid-19.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Jumia Food',
        distance: '15 mins away',
        more: 'See More',
      },
]

const addedKitchen = [
    {
        id: 6,
        image: 'https://www.futurefoodfinance.com//images/companies/glovo.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Glovo',
        distance: '45 mins away',
        more: 'See More',
      },
    {
        id: 7,
        image: 'https://1.bp.blogspot.com/-8NT6brue_G0/YNpH9VIrWlI/AAAAAAAAIUg/fK-qG_7AgAAW7kgvHvxNPGjM2exvV_enACLcBGAsYHQ/s512/48E56A15-AB58-4EAA-AF59-00BA96FD89F3.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Ntachi Osa',
        distance: '45 mins away',
        more: 'See More',
      },
      {
        id: 8,
        image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Crunchies',
        distance: '45 mins away',
        more: 'See More',
      },
      {
        id: 9,
        image: 'https://toppng.com/uploads/preview/mcdonalds-logo-transparent-background-11658872813e1gdvuq4jx.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'MC Donalds',
        distance: '10 mins away',
        more: 'See More',
      },
      {
        id: 10,
        image: 'https://betajob.com.ng/storage/files/ng/2648/thumb-240x180-05739cb017805eca8ecfc4baadff4c63.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'Kilimanjaro',
        distance: '45 mins away',
        more: 'See More',
      },
]

const localKitchen = [
    {
        id: 11,
        image: 'https://toppng.com/uploads/preview/mcdonalds-logo-transparent-background-11658872813e1gdvuq4jx.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'MC Donalds',
        distance: '10 mins away',
        more: 'See More',
      },
    {
        id: 12,
        image: 'https://betajob.com.ng/storage/files/ng/2648/thumb-240x180-05739cb017805eca8ecfc4baadff4c63.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        place: 'Kilimanjaro',
        distance: '45 mins away',
        more: 'See More',
      },
      {
        id: 13,
        image: 'https://1.bp.blogspot.com/-8NT6brue_G0/YNpH9VIrWlI/AAAAAAAAIUg/fK-qG_7AgAAW7kgvHvxNPGjM2exvV_enACLcBGAsYHQ/s512/48E56A15-AB58-4EAA-AF59-00BA96FD89F3.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Ntachi Osa',
        distance: '45 mins away',
        more: 'See More',
      },
    {
        id: 14,
        image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',
        rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
        noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
        place: 'Crunchies',
        distance: '45 mins away',
        more: 'See More',
      },
]

const categoryList = [
  {
      id: 1,
      image: 'https://toppng.com/uploads/preview/mcdonalds-logo-transparent-background-11658872813e1gdvuq4jx.png',
      place: 'MC Donalds',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },
  {
      id: 2,
      image: 'https://betajob.com.ng/storage/files/ng/2648/thumb-240x180-05739cb017805eca8ecfc4baadff4c63.png',
      place: 'Kilimanjaro',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },
  {
      id: 3,
      image: 'https://pbs.twimg.com/profile_images/2583157912/MrBiggs_logo_400x400.jpg', 
      place: 'Mr Biggs',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },
  {
      id: 4,
      image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',
      place: 'Crunchies',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },
  {
      id: 5,
      image: 'https://group-live.jumia.is/images/press/articles/jumia-launches-its-food-festival-to-promote-adoption-of-meal-ordering-support-local-restaurants-during-covid-19.png',
      place: 'Jumia Food',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },

    {
      id: 6,
      image: 'https://www.futurefoodfinance.com//images/companies/glovo.png',
      place: 'Glovo',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },
  {
      id: 7,
      image: 'https://1.bp.blogspot.com/-8NT6brue_G0/YNpH9VIrWlI/AAAAAAAAIUg/fK-qG_7AgAAW7kgvHvxNPGjM2exvV_enACLcBGAsYHQ/s512/48E56A15-AB58-4EAA-AF59-00BA96FD89F3.png',
      place: 'Ntachi Osa',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
     },
    {
      id: 8,
      image: 'https://branches.com.ng/cms/lib/company/1598857958crunchies_logo_main.png',
      place: 'Crunchies',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },
    {
      id: 9,
      image: 'https://toppng.com/uploads/preview/mcdonalds-logo-transparent-background-11658872813e1gdvuq4jx.png',
      place: 'MC Donalds',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },
    {
      id: 10,
      image: 'https://betajob.com.ng/storage/files/ng/2648/thumb-240x180-05739cb017805eca8ecfc4baadff4c63.png',
      place: 'Kilimanjaro',
      favourite: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
      location: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      address: "No. 2 Mbanefo Str, Enugu",
      rating: 'https://icons8.com/icon/84925/star.png',
      distance: '4.0  (132 reviews)    30 mins | 0.4km ',
    },
]


const cartItems = [
  { name: 'Plate of', description: "Jellof rice", quantity: 1, price: 550 , Tax : 0.10, Fee:0},
  { name: 'Plate of', description: "Fufu", quantity: 1, price: 450 ,Tax : 0.10, Fee:0},
  { name: 'Plate of Fried', description: "rice", quantity: 1, price: 450 ,Tax : 0.10, Fee: 0},
];      

const cartTotalItems =[
  { name: ' SubTotal', quantity: 1, amount:1450 },
  { name: 'tax', quantity: 1, amount: 145 },
  { name: 'Fees', quantity:1, amount: 0},
]

const billsDetails = [
  { name: 'Plate of', description: "Jellof rice", quantity: 1, price: 550 , selectedItem :1, deliveryFee:200},
  { name: 'Plate of', description: "Fufu", quantity: 1, price: 450 ,selectedItem :1, deliveryFee:0},
  { name: 'Plate of Fried', description: "rice", quantity: 1, price: 450 ,selectedItem :1, deliveryFee: 0},
];      

const billsTotal = [
  { name: ' subTotal', quantity: 1, amount:1450 },
  { name: 'selectedItem', quantity: 1, amount: 0 },
  { name: 'deliveryFee', quantity:1, amount: 200},
]



  
  export { categories,categoryList, offers, addedKitchen, localKitchen, favouriteKitchen, cartItems, cartTotalItems, billsDetails, billsTotal};