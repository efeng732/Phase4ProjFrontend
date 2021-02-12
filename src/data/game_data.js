const games = [
   {
      "id": 1,
      "name": "Super Smash Bros Ultimate",
      "price": 15,
      "system": "Nintendo Switch",
      "genre": "Fighting",
      "rating": 96,
      "created_at": "2021-02-12T14:40:17.688Z",
      "updated_at": "2021-02-12T14:40:17.688Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg"
    },
    {
      "id": 2,
      "name": "Cyberpunk 2077",
      "price": 1,
      "system": "XBOX, Playstation, PC",
      "genre": "RPG",
      "rating": 35,
      "created_at": "2021-02-12T14:40:17.708Z",
      "updated_at": "2021-02-12T14:40:17.708Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
    },
    {
      "id": 3,
      "name": "Pokemon Sword",
      "price": 10,
      "system": "Nintendo Switch",
      "genre": "Adventure",
      "rating": 88,
      "created_at": "2021-02-12T14:40:17.726Z",
      "updated_at": "2021-02-12T14:40:17.726Z",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81-QH2Lyy4L._SL1500_.jpg"
    },
    {
      "id": 4,
      "name": "Red Dead Redemption 2",
      "price": 12,
      "system": "XBOX, Playstation, PC",
      "genre": "Adventure",
      "rating": 95,
      "created_at": "2021-02-12T14:40:17.764Z",
      "updated_at": "2021-02-12T14:40:17.764Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
    },
    {
      "id": 5,
      "name": "Sekiro: Shadows Die Twice",
      "price": 13,
      "system": "XBOX, Playstation, PC",
      "genre": "Action",
      "rating": 90,
      "created_at": "2021-02-12T14:40:17.797Z",
      "updated_at": "2021-02-12T14:40:17.797Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg"
    },
    {
      "id": 6,
      "name": "Overwatch",
      "price": 6,
      "system": "XBOX, Playstation, PC",
      "genre": "Shooter",
      "rating": 82,
      "created_at": "2021-02-12T14:40:17.810Z",
      "updated_at": "2021-02-12T14:40:17.810Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg"
    },
    {
      "id": 7,
      "name": "The Witcher 3: Wild Hunt",
      "price": 5,
      "system": "XBOX, Playstation, PC",
      "genre": "RPG",
      "rating": 95,
      "created_at": "2021-02-12T14:40:17.835Z",
      "updated_at": "2021-02-12T14:40:17.835Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
    },
    {
      "id": 8,
      "name": "Mario Kart 8 Deluxe",
      "price": 7,
      "system": "Nintendo Switch",
      "genre": "Racing",
      "rating": 94,
      "created_at": "2021-02-12T14:40:17.855Z",
      "updated_at": "2021-02-12T14:40:17.855Z",
      "image": "https://art.gametdb.com/switch/coverHQ/US/AABPA.jpg"
    },
    {
      "id": 9,
      "name": "Tekken 7",
      "price": 4,
      "system": "XBOX, Playstation, PC",
      "genre": "Fighting",
      "rating": 91,
      "created_at": "2021-02-12T14:40:17.863Z",
      "updated_at": "2021-02-12T14:40:17.863Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg"
    },
    {
      "id": 10,
      "name": "God of War",
      "price": 11,
      "system": "Playstation, PC",
      "genre": "Adventure",
      "rating": 98,
      "created_at": "2021-02-12T14:40:17.877Z",
      "updated_at": "2021-02-12T14:40:17.877Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/God_of_War_4_cover.jpg/220px-God_of_War_4_cover.jpg"
    },
    {
      "id": 11,
      "name": "Borderlands 2",
      "price": 3,
      "system": "XBOX, Playstation, PC",
      "genre": "Shooting",
      "rating": 90,
      "created_at": "2021-02-12T14:40:17.899Z",
      "updated_at": "2021-02-12T14:40:17.899Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/5/51/Borderlands_2_cover_art.png"
    },
    {
      "id": 12,
      "name": "Outlast II",
      "price": 6,
      "system": "XBOX, Playstation, PC, Nintendo Switch",
      "genre": "Horror",
      "rating": 85,
      "created_at": "2021-02-12T14:40:17.917Z",
      "updated_at": "2021-02-12T14:40:17.917Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/1/1b/Outlast2.png"
    },
    {
      "id": 13,
      "name": "Resident Evil 7",
      "price": 7,
      "system": "XBOX, Playstation, PC, Nintendo Switch",
      "genre": "Horror",
      "rating": 87,
      "created_at": "2021-02-12T14:40:17.959Z",
      "updated_at": "2021-02-12T14:40:17.959Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_7_cover_art.jpg"
    },
    {
      "id": 14,
      "name": "The Last Of Us II",
      "price": 11,
      "system": "Playstation",
      "genre": "Horror",
      "rating": 93,
      "created_at": "2021-02-12T14:40:17.975Z",
      "updated_at": "2021-02-12T14:40:17.975Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/TLOU_P2_Box_Art_2.png/220px-TLOU_P2_Box_Art_2.png"
    },
    {
      "id": 15,
      "name": "Hades",
      "price": 3,
      "system": "PC, Nintendo Switch",
      "genre": "Action",
      "rating": 91,
      "created_at": "2021-02-12T14:40:17.992Z",
      "updated_at": "2021-02-12T14:40:17.992Z",
      "image": "https://lh3.googleusercontent.com/sLgvchryv-3IQ3IEX_4n3WlMnqxb5Rz7EhYmFhkig-x7H6m2RNmtlYB5MSqQp8CQ3hm1qttUATW-GbdBFnQxbYPExQ"
    },
    {
      "id": 16,
      "name": "Ghost of Tsushima",
      "price": 12,
      "system": "Playstation",
      "genre": "Adventure",
      "rating": 88,
      "created_at": "2021-02-12T14:40:18.010Z",
      "updated_at": "2021-02-12T14:40:18.010Z",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Ghost_of_Tsushima.jpg/220px-Ghost_of_Tsushima.jpg"
    },
    {
      "id": 17,
      "name": "MLB The Show 21",
      "price": 17,
      "system": "Playstation",
      "genre": "Sports",
      "rating": 0,
      "created_at": "2021-02-12T14:40:18.026Z",
      "updated_at": "2021-02-12T14:40:18.026Z",
      "image": "https://media.gamestop.com/i/gamestop/11116345/MLB-The-Show-21?$pdp$&bg=rgb(0,0,0)"
    },
    {
      "id": 18,
      "name": "Grand Theft Auto V",
      "price": 17,
      "system": "Playstation, XBOX",
      "genre": "Action",
      "rating": 90,
      "created_at": "2021-02-12T14:40:18.050Z",
      "updated_at": "2021-02-12T14:40:18.050Z",
      "image": "https://media.gamestop.com/i/gamestop/10115462/Grand-Theft-Auto-V?$pdp$&bg=rgb(0,0,0)"
    },
    {
      "id": 19,
      "name": "Animal Crossing: New Horizons",
      "price": 10,
      "system": "Nintendo Switch",
      "genre": "Simulation",
      "rating": 87,
      "created_at": "2021-02-12T14:40:18.102Z",
      "updated_at": "2021-02-12T14:40:18.102Z",
      "image": "https://www.eaglevoice.com/wp-content/uploads/2020/04/Animal-Crossing_-New-Horizons.png"
    },
    {
      "id": 20,
      "name": "NBA 2K21",
      "price": 16,
      "system": "XBOX, Playstation",
      "genre": "Sports",
      "rating": 81,
      "created_at": "2021-02-12T14:40:18.110Z",
      "updated_at": "2021-02-12T14:40:18.110Z",
      "image": "https://cms.gameflycdn.com/proxy/gf/boxart/190w/5026030.jpg"
    },
    {
      "id": 21,
      "name": "Crash Bandicoot 4",
      "price": 6,
      "system": "Playstation, XBOX",
      "genre": "Action",
      "rating": 70,
      "created_at": "2021-02-12T14:40:18.123Z",
      "updated_at": "2021-02-12T14:40:18.123Z",
      "image": "https://cms.gameflycdn.com/proxy/gf/boxart/480w/5024657.jpg"
    },
    {
      "id": 22,
      "name": "DIRT RALLY 2.0",
      "price": 8,
      "system": "XBOX, Playstation",
      "genre": "Racing",
      "rating": 60,
      "created_at": "2021-02-12T14:40:18.134Z",
      "updated_at": "2021-02-12T14:40:18.134Z",
      "image": "https://cms.gameflycdn.com/proxy/gf/boxart/480w/5019441.jpg"
    },
    {
      "id": 23,
      "name": "Forza Horizon 4",
      "price": 13,
      "system": "XBOX",
      "genre": "Racing",
      "rating": 75,
      "created_at": "2021-02-12T14:40:18.146Z",
      "updated_at": "2021-02-12T14:40:18.146Z",
      "image": "https://cms.gameflycdn.com/proxy/gf/boxart/480w/5018022.jpg"
    },
    {
      "id": 24,
      "name": "The Legend of Zelda: Breath of the Wild",
      "price": 5,
      "system": "Nintendo Switch",
      "genre": "Adventure",
      "rating": 87,
      "created_at": "2021-02-12T14:40:18.169Z",
      "updated_at": "2021-02-12T14:40:18.169Z",
      "image": "https://cms.gameflycdn.com/proxy/gf/boxart/480w/5012923.jpg"
    },
    {
      "id": 25,
      "name": "Fifa 21",
      "price": 15,
      "system": "XBOX, Playstation, Nintendo Switch",
      "genre": "Sports",
      "rating": 72,
      "created_at": "2021-02-12T14:40:18.278Z",
      "updated_at": "2021-02-12T14:40:18.278Z",
      "image": "https://cms.gameflycdn.com/proxy/gf/boxart/480w/5024652.jpg"
    }
]

export default games 