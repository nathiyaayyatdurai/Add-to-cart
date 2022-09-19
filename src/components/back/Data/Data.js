const data={
    productItems:[
        {
          "id": 1,
          "name": "Beats Headphone",
          "price": 999,
          "image": "https://cdn.mos.cms.futurecdn.net/7xuuL9GAGDDjhietMy3RGJ.jpg",
        },
        {
          "id": 2,
          "name": "Samsung",
          "price": 10000,
          "image": "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/samsung-galaxy-a52.jpg",
        },
        {
          "id": 3,
          "name": "One Plus",
          "price": 12000,
          "image": "data:image/jpeg;base64,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",
        },
        {
          "id": 4,
          "name": "Iphone",
          "price": 40000,
          "image": "https://drop.ndtv.com/TECH/product_database/images/982016124826AM_635_iphone_7.jpeg?downsize=*:360",
        },
        {
          "id": 5,
          "name": "Dell Lap",
          "price": 70000,
          "image": "https://image.shutterstock.com/image-photo/jakarta-indonesiawednesday-23-october-2019-260nw-1580423866.jpg",
        },
        {
          "id": 6,
          "name": "Macbook",
          "price": 899,
          "image": "https://365psd.com/images/previews/c6e/fully-layered-macbook-air-psd-54796.png",
        },
        {
          "id": 7,
          "name": "Boat Headphone",
          "price": 799,
          "image": "https://i.gadgets360cdn.com/products/headphones-and-headsets/large/boat-rockerz-450-wireless-headset-832X558-1598517507.jpg?downsize=*:360",
        },
        {
          "id": 8,
          "name": "Iphone X",
          "price": 50000,
          "image": "https://s.yimg.com/uu/api/res/1.2/wKtNq2jo_Qww2GqS5OfbnA--~B/aD0xMjU5O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/be8deaf69ebb2e866257646588bb5999/206681111/IPHONE.jpg",
        },
      ]
  }
  export default data;