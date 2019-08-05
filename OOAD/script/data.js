const hotels = [
    // Ho Chi Minh City
    {
        ID: "roseland_sweet_sg",
        Name: "Roseland Sweet Hotel & Spa Sai Gon",
        Location: "Ho Chi Minh City",
        Address: "4 Cao Ba Quat, Dist. 1, Ho Chi Minh City",
        Rating: 5,
        RoomList: [
            {
                Name: "Superior Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 2000000
            },
            {
                Name: "Deluxe Triple Room",
                RoomSize: 3,
                Acreage: 30,
                Price: 5000000
            },
            {
                Name: "Luxury Room",
                RoomSize: 2,
                Acreage: 50,
                Price: 80000000
            },
            {
                Name: "Family Room",
                RoomSize: 4,
                Acreage: 40,
                Price: 15000000
            }
        ]
    },
    {
        ID: "caravelle_sg",
        Name: "Caravelle Saigon",
        Location: "Ho Chi Minh City",
        Address: "19 Lam Son Square, Dist. 1, Ho Chi Minh City",
        Rating: 5,
        RoomList: [
            {
                Name: "Deluxe Double Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 2000000
            },
            {
                Name: "Deluxe Triple Room",
                RoomSize: 3,
                Acreage: 30,
                Price: 3000000
            },
            {
                Name: "Suite Room",
                RoomSize: 2,
                Acreage: 35,
                Price: 25000000
            },
            {
                Name: "Suite Twin Room",
                RoomSize: 4,
                Acreage: 45,
                Price: 40000000
            }
        ]
    },
    {
        ID: "reverie_sg",
        Name: "The Reverie Sai Gon",
        Location: "Ho Chi Minh City",
        Address: "22-36 Nguyen Hue, Dist. 1, Ho Chi Minh City",
        Rating: 5,
        RoomList: [
            {
                Name: "Deluxe Double Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 5000000
            },
            {
                Name: "Deluxe Triple Room",
                RoomSize: 3,
                Acreage: 28,
                Price: 7000000
            },
            {
                Name: "Grand Double Twin Room",
                RoomSize: 4,
                Acreage: 40,
                Price: 15000000
            },
            {
                Name: "Designer Room",
                RoomSize: 2,
                Acreage: 60,
                Price: 90000000
            }
        ]
    },

    // Ha Noi 
    {
        ID: "roseland_sweet_hn",
        Name: "Roseland Sweet Hotel & Spa Ha Noi",
        Location: "Ha Noi",
        Address: "92-94 Hang Trong, Hoan Kiem Dist., Ha Noi",
        Rating: 5,
        RoomList: [
            {
                Name: "Superior Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 2000000
            },
            {
                Name: "Deluxe Triple Room",
                RoomSize: 3,
                Acreage: 30,
                Price: 5000000
            },
            {
                Name: "Luxury Room",
                RoomSize: 2,
                Acreage: 50,
                Price: 80000000
            },
            {
                Name: "Family Room",
                RoomSize: 4,
                Acreage: 40,
                Price: 15000000
            }
        ]
    },
    {
        ID: "sofitel_hn",
        Name: "Sofitel Legend Metropole Hanoi",
        Location: "Ha Noi",
        Address: "15 Ngo Quyen, Hoan Kiem Dist., Ha Noi",
        Rating: 5,
        RoomList: [
            {
                Name: "Deluxe Double Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 2000000
            },
            {
                Name: "Suite Room",
                RoomSize: 2,
                Acreage: 35,
                Price: 25000000
            },
            {
                Name: "Suite Twin Room",
                RoomSize: 4,
                Acreage: 45,
                Price: 40000000
            }
        ]
    },
    {
        ID: "hilton_opera_hn",
        Name: "Hilton Ha Noi Opera",
        Location: "Ha Noi",
        Address: "1 Le Thanh Tong, Hoan Kiem Dist., Ha Noi",
        Rating: 5,
        RoomList: [
            {
                Name: "Deluxe Double Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 5000000
            },
            {
                Name: "Deluxe Triple Room",
                RoomSize: 3,
                Acreage: 28,
                Price: 7000000
            },
            {
                Name: "Designer Room",
                RoomSize: 2,
                Acreage: 60,
                Price: 90000000
            }
        ]
    },

    // Da Nang
    {
        ID: "green_plaza_dn",
        Name: "Green Plaza Da Nang",
        Location: "Da Nang",
        Address: "238 Bach Dang, Hai Chau Dist., Da Nang",
        Rating: 5,
        RoomList: [
            {
                Name: "Superior Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 2000000
            },
            {
                Name: "Deluxe Triple Room",
                RoomSize: 3,
                Acreage: 30,
                Price: 5000000
            },
            {
                Name: "Luxury Room",
                RoomSize: 2,
                Acreage: 50,
                Price: 80000000
            },
            {
                Name: "Family Room",
                RoomSize: 4,
                Acreage: 40,
                Price: 15000000
            }
        ]
    },
    {
        ID: "grand_tourane_dn",
        Name: "Grand Tourane Hotel Da Nang",
        Location: "Da Nang",
        Address: "252 Vo Nguyen Giap, Son Tra Dist., Da Nang",
        Rating: 5,
        RoomList: [
            {
                Name: "Deluxe Double Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 2000000
            },
            {
                Name: "Deluxe Triple Room",
                RoomSize: 3,
                Acreage: 30,
                Price: 3000000
            },
            {
                Name: "Suite Room",
                RoomSize: 2,
                Acreage: 35,
                Price: 25000000
            }
        ]
    },
    {
        ID: "pullman_danang",
        Name: "Pullman Da Nang Beach Resort",
        Location: "Da Nang",
        Address: "101 Vo Nguyen Giap, Ngu Hanh Son Dist., Da Nang",
        Rating: 5,
        RoomList: [
            {
                Name: "Deluxe Double Room",
                RoomSize: 2,
                Acreage: 25,
                Price: 5000000
            },
            {
                Name: "Deluxe Triple Room",
                RoomSize: 3,
                Acreage: 28,
                Price: 7000000
            },
            {
                Name: "Grand Double Twin Room",
                RoomSize: 4,
                Acreage: 40,
                Price: 15000000
            },
            {
                Name: "Designer Room",
                RoomSize: 2,
                Acreage: 60,
                Price: 90000000
            }
        ]
    }
]

const locations = [
    "Ho Chi Minh City",
    "Ha Noi",
    "Da Nang",
]

const roomsizes = [
    {
        Value: 2,
        Desc: "Double Room (2 people)"
    },
    {
        Value: 3,
        Desc: "Triple Room (3 people)"
    },
    {
        Value: 4,
        Desc: "Double Twin Room (4 people)"
    },
]

const sample_img_room = {
    double: [

    ],
    triple: [

    ],
    doubletwin: [

    ]
}

const sample_img_hotel = [
    "https://www.travelplusstyle.com/wp-content/uploads/2019/01/RafflesMYuzu-Nikkei-Cuisine-cropped.jpg",
    "https://amp.businessinsider.com/images/5bef33f00591f24e6f420dc5-750-563.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1sM9277KX77ifA61qMb_RvXAOXSC-9cm-FctOH0DY8pe7mphqA",
    "https://pix10.agoda.net/hotelImages/339/339860/339860_15122210160038672097.jpg",
    "https://pix10.agoda.net/hotelImages/339/339860/339860_18042019100065001474.jpg",
    "https://pix10.agoda.net/hotelImages/10971/-1/b909465b8417ea59c45383fe65f4ec30.jpg?s=1024x768",
    "https://pix10.agoda.net/hotelImages/2163054/-1/4f3b334212d6cf837f60ee731edf916d.jpg?s=1024x768",
    "https://pix10.agoda.net/hotelImages/109/10964/10964_17122202240060558678.jpg?s=1024x768",
    "https://i.ytimg.com/vi/gm_W2-MEZps/maxresdefault.jpg"
]