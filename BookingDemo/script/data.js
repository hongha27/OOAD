const hotels = [
    // Ho Chi Minh
    {
        ID: "roseland_sweet_sg",
        Name: "Roseland Sweet Hotel & Spa Sai Gon",
        Location: "Ho Chi Minh",
        Address: "4 Cao Ba Quat, Dist. 1, Ho Chi Minh",
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
        Location: "Ho Chi Minh",
        Address: "19 Lam Son Square, Dist. 1, Ho Chi Minh",
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
        Location: "Ho Chi Minh",
        Address: "22-36 Nguyen Hue, Dist. 1, Ho Chi Minh",
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
    "Ho Chi Minh",
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
        "https://www.tivolihotel.com/uploads/tx_templavoila/720x469-02-2019-Tivoli-Hotel-Standard_double_wood_harbour_02.jpg",
        "http://www.marmarayhotel.com/img/room/twin.jpg",
        "https://www.butler.ie/cmsGallery/imagerow/17849/resized/1900x900/standard_double_room_1.jpeg",
        "http://wyngate26.com/wp-content/uploads/2014/07/standard-double-2-1060x485.jpg",
        "http://diana-apt.com/wp-content/uploads/thumbs/Standard-Double-Room-nlhazi47gygffcq72kilg9x67q25qunpz7ajogmfe8.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/05/6f/52/8c/doubletree-by-hilton.jpg"
    ],
    triple: [
        "http://www.hoteldelacouronne.be/media/cache/frontend_fullscreen/media/image/image_2017-08-14-12-14-09_599177f18aae2_standard-triple-room---david-plas.jpg",
        "https://www.samuraisnow.com/sites/default/files/Shiba%20Park%20Hotel%20Std%20Triple%202.jpg",
        "https://www.steffani.ch/en/wp-content/uploads/2019/04/Standard-Triple-Room-Family-Room-New-Design-Fall-2018.jpg",
        "https://www.amitymotel.com.au/media/zoo/images/StandardTripleRoom1_c4346b329c92980e9464a3f9eaa89eec.jpg",
        "http://muinevolgahotel.com/upload/images/phong-3-nguoi-tieu-chuan.jpg",
        "http://tropicalsandsguesthouse.com/wp-content/uploads/2016/12/room-type-C-1200x750.jpg"
    ],
    doubletwin: [
        "https://www.hotelhottingen.ch/en/wp-content/uploads/WonderPlugin%20Slider/Standard%20Quadruple%20Room/room7_2.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/0c/12/a2/e5/standard-quadruple-room.jpg",
        "https://images.mirai.com/INFOROOMS/100028652/HTdehips7kiKyqUrtLfX/HTdehips7kiKyqUrtLfX_large.jpg",
        "https://cdn.webhotelier.net/photos/w=1920/philippos-quad/L357089.jpg",
        "https://thumbnails.trvl-media.com/yeGkFnehC8Yud2_Zp3ScCzSkfVI=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/37000000/36400000/36394000/36393910/a79964e9_z.jpg",
        "http://www.thestage-kohchang.com/images/StandardQuadrupleRoom-7.jpg"
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