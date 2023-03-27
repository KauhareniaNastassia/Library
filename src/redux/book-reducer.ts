/* const initialState: initialGenreStateType = {
    genreBar: [
        {
            genre: 'business',
            name: 'Бизнес-книги',
            content: [
                {
                    id: '63ca7627f79ebdac69926ffc',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Catherine Case',
                    title: 'Covert Street, Bonanza, Washington',
                    rating: 3,
                    year: 1972,
                    isBooked: true,
                    bookedTill: '2024-11-09T05:28:02 -03:00'
                },
                {
                    id: '63ca7627549c20ea76acb8fc',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Lenore Delaney',
                    title: 'Losee Terrace, Winfred, Louisiana',
                    rating: 5,
                    year: 1998,
                    isBooked: true,
                    bookedTill: '2024-10-02T10:46:09 -03:00'
                },
                {
                    id: '63ca762761ae79531f1acb53',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Katie Terry',
                    title: 'Fair Street, Stewart, Nevada',
                    rating: 1,
                    year: 1975,
                    isBooked: true,
                    bookedTill: '2023-10-24T02:17:44 -03:00'
                },
                {
                    id: '63ca7627eab55a2591cefaac',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Tucker Langley',
                    title: 'Riverdale Avenue, Hendersonville, Michigan',
                    rating: 1,
                    year: 1929,
                    isBooked: false,
                    bookedTill: '2024-04-10T06:34:58 -03:00'
                },
                {
                    id: '63ca7627db47f2a9cf5abfee',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Watkins Watts',
                    title: 'Lafayette Walk, Felt, Pennsylvania',
                    rating: 2,
                    year: 1983,
                    isBooked: false,
                    bookedTill: '2023-03-20T03:19:53 -03:00'
                },
                {
                    id: '63ca76278e7bae49e60cc08f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Jocelyn Benjamin',
                    title: 'Hillel Place, Lydia, California',
                    rating: 1,
                    year: 2014,
                    isBooked: false,
                    bookedTill: '2024-01-15T10:49:49 -03:00'
                },
                {
                    id: '63ca76277acbfd2757ff0e87',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Lola Andrews',
                    title: 'Exeter Street, Linwood, South Dakota',
                    rating: 4,
                    year: 1970,
                    isBooked: false,
                    bookedTill: '2024-01-26T10:33:38 -03:00'
                },
                {
                    id: '63ca76279b279b3f88322e2e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Marylou Burton',
                    title: 'Dictum Court, Witmer, Puerto Rico',
                    rating: 1,
                    year: 1973,
                    isBooked: false,
                    bookedTill: '2024-12-19T10:48:58 -03:00'
                },
                {
                    id: '63ca7627b50fe16d3ce08a55',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Janie Roman',
                    title: 'McKibben Street, Harrison, Kentucky',
                    rating: 3,
                    year: 1971,
                    isBooked: true,
                    bookedTill: '2024-11-28T04:56:05 -03:00'
                },
                {
                    id: '63ca76271344102600937710',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Shana Duke',
                    title: 'Hendrix Street, Thermal, Virgin Islands',
                    rating: 2,
                    year: 1903,
                    isBooked: true,
                    bookedTill: '2024-07-08T02:21:01 -03:00'
                },
                {
                    id: '63ca7627fc79a3d638fa2d2f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Wiggins Hobbs',
                    title: 'Alton Place, Chemung, Florida',
                    rating: 1,
                    year: 1992,
                    isBooked: false,
                    bookedTill: '2023-02-11T02:37:59 -03:00'
                },
                {
                    id: '63ca762760bbd6f2e25b942c',
                    image: 'http://www.google.com/image.jpg',
                    category: 'business',
                    author: 'Gordon Wolfe',
                    title: 'Crosby Avenue, Mansfield, Northern Mariana Islands',
                    rating: 0,
                    year: 1948,
                    isBooked: true,
                    bookedTill: '2024-11-18T11:57:21 -03:00'
                }
            ],
        },
        {
            genre: 'detective',
            name: 'Детективы',
            content: [
                {
                    id: '63ca7605925148fe9a388088',
                    image: 'http://www.google.com/image.jpg',
                    category: 'detective',
                    author: 'Annabelle Valentine',
                    title: 'Sedgwick Street, Collins, Northern Mariana Islands',
                    rating: 4,
                    year: 1925,
                    isBooked: true,
                    bookedTill: '2024-04-13T05:56:43 -03:00'
                },
                {
                    id: '63ca760506e5d5e105168609',
                    image: 'http://www.google.com/image.jpg',
                    category: 'detective',
                    author: 'Brandie Faulkner',
                    title: 'Chester Street, Groton, Tennessee',
                    rating: 2,
                    year: 1960,
                    isBooked: true,
                    bookedTill: '2023-10-09T03:34:50 -03:00'
                },
                {
                    id: '63ca76053330907a10bdf44a',
                    image: 'http://www.google.com/image.jpg',
                    category: 'detective',
                    author: 'Cooke Brock',
                    title: 'Oriental Boulevard, Chical, Guam',
                    rating: 5,
                    year: 2015,
                    isBooked: true,
                    bookedTill: '2023-05-30T11:46:28 -03:00'
                },
                {
                    id: '63ca7605c5739d18039a889c',
                    image: 'http://www.google.com/image.jpg',
                    category: 'detective',
                    author: 'Jeannette Tate',
                    title: 'Cypress Court, Haring, Vermont',
                    rating: 5,
                    year: 2003,
                    isBooked: true,
                    bookedTill: '2024-03-09T07:12:47 -03:00'
                }
            ],
        },
        {
            genre: 'children',
            name: 'Детские книги',
            content: [
                {
                    id: '63ca716d6eb160eac2bc0a53',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Jessie Nunez',
                    title: 'Stockton Street, Vivian, Missouri',
                    rating: 1,
                    year: 1970,
                    isBooked: false,
                    bookedTill: '2023-11-17T05:38:20 -03:00'
                },
                {
                    id: '63ca716d0ed65f45a6c67255',
                    category: 'children',
                    author: 'Terry Strickland',
                    title: 'Perry Place, Irwin, West Virginia',
                    rating: 4,
                    year: 2023,
                    isBooked: true,
                    bookedTill: '2024-11-23T02:59:00 -03:00'
                },
                {
                    id: '63ca716dcf7af7a3edc1688b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Camacho Stewart',
                    title: 'Seabring Street, Hendersonville, Oregon',
                    rating: 0,
                    year: 2008,
                    isBooked: false,
                    bookedTill: '2024-08-16T03:44:09 -03:00'
                },
                {
                    id: '63ca716df43982d83aeb10b9',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Willa Vaughan',
                    title: 'Rapelye Street, Nile, Tennessee',
                    rating: 4,
                    year: 1900,
                    isBooked: false,
                    bookedTill: '2024-06-13T03:43:19 -03:00'
                },
                {
                    id: '63ca716deca18b2f39d74a9f',
                    category: 'children',
                    author: 'Levy Graham',
                    title: 'Eastern Parkway, Denio, Kansas',
                    rating: 2,
                    year: 1929,
                    isBooked: true,
                    bookedTill: '2024-06-29T12:55:48 -03:00'
                },
                {
                    id: '63ca716dd21ba4a781a1effd',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Jenkins Owen',
                    title: 'Summit Street, Noblestown, Vermont',
                    rating: 1,
                    year: 2019,
                    isBooked: false,
                    bookedTill: '2023-05-25T03:20:46 -03:00'
                },
                {
                    id: '63ca716d94ee865cbcb6891f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Beck Acosta',
                    title: 'Dwight Street, Wintersburg, California',
                    rating: 2,
                    year: 1994,
                    isBooked: false,
                    bookedTill: '2024-03-08T04:24:45 -03:00'
                },
                {
                    id: '63ca716dc52b95049eda5294',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Sheppard Frost',
                    title: 'Cumberland Street, Nutrioso, Northern Mariana Islands',
                    rating: 4,
                    year: 1904,
                    isBooked: true,
                    bookedTill: '2024-01-19T04:35:09 -03:00'
                },
                {
                    id: '63ca716d8bcbab5828dbbcf7',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Miranda Skinner',
                    title: 'Huntington Street, Norwood, Colorado',
                    rating: 2,
                    year: 1924,
                    isBooked: false,
                    bookedTill: '2024-01-29T06:09:11 -03:00'
                },
                {
                    id: '63ca716de91dfc47b8aed9e4',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Garrison James',
                    title: 'Vanderveer Place, Wiscon, Virginia',
                    rating: 5,
                    year: 1995,
                    isBooked: true,
                    bookedTill: '2024-10-28T01:37:26 -03:00'
                },
                {
                    id: '63ca716da0490006ecaafde6',
                    image: 'http://www.google.com/image.jpg',
                    category: 'children',
                    author: 'Jarvis Rhodes',
                    title: 'Fenimore Street, Osmond, South Carolina',
                    rating: 1,
                    year: 1963,
                    isBooked: false,
                    bookedTill: '2024-09-08T06:25:20 -03:00'
                }
            ],
        },
        {
            genre: 'foreign',
            name: 'Зарубежная литература',
            content: [
                {
                    id: '63ca717a8cab2a2d48c7abbc',
                    image: 'http://www.google.com/image.jpg',
                    category: 'foreign',
                    author: 'Lana Ray',
                    title: 'India Street, Ellerslie, Illinois',
                    rating: 0,
                    year: 1933,
                    isBooked: true,
                    bookedTill: '2023-10-25T11:27:42 -03:00'
                },
                {
                    id: '63ca717ad72dcb4da2c1d798',
                    image: 'http://www.google.com/image.jpg',
                    category: 'foreign',
                    author: 'Hansen Vazquez',
                    title: 'Clinton Street, Venice, Vermont',
                    rating: 0,
                    year: 1956,
                    isBooked: false,
                    bookedTill: '2024-08-03T06:43:52 -03:00'
                },
                {
                    id: '63ca717a9d2c8992396a1ed3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'foreign',
                    author: 'Winifred Cherry',
                    title: 'Vandam Street, Shepardsville, Georgia',
                    rating: 3,
                    year: 1995,
                    isBooked: false,
                    bookedTill: '2024-10-26T03:08:46 -03:00'
                },
                {
                    id: '63ca717a61030d1acafdfae3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'foreign',
                    author: 'Stephanie Cline',
                    title: 'Sharon Street, Hachita, Wisconsin',
                    rating: 1,
                    year: 1965,
                    isBooked: true,
                    bookedTill: '2024-01-05T09:12:40 -03:00'
                },
                {
                    id: '63ca717ae8e0419d78a46fbd',
                    image: 'http://www.google.com/image.jpg',
                    category: 'foreign',
                    author: 'Marjorie Alvarez',
                    title: 'Autumn Avenue, Roy, Washington',
                    rating: 1,
                    year: 1922,
                    isBooked: true,
                    bookedTill: '2024-11-22T09:30:00 -03:00'
                },
                {
                    id: '63ca717a951f09bdf368704b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'foreign',
                    author: 'Booker Pugh',
                    title: 'Voorhies Avenue, Henrietta, Nebraska',
                    rating: 5,
                    year: 1955,
                    isBooked: true,
                    bookedTill: '2023-04-20T02:49:44 -03:00'
                }
            ],
        },
        {
            genre: 'history',
            name: 'История',
            content: [
                {
                    id: '63ca718e7080ac88f456ac17',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Caitlin Adams',
                    title: 'Poly Place, Como, Northern Mariana Islands',
                    rating: 5,
                    year: 1903,
                    isBooked: true,
                    bookedTill: '2023-08-18T07:28:13 -03:00'
                },
                {
                    id: '63ca718eac76d8f4171d6b20',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Daniel Wilkinson',
                    title: 'Bradford Street, Advance, Maine',
                    rating: 4,
                    year: 1986,
                    isBooked: false,
                    bookedTill: '2024-04-15T07:46:15 -03:00'
                },
                {
                    id: '63ca718e8b643ccba4bcac47',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Kristine Farmer',
                    title: 'Monitor Street, Ola, Guam',
                    rating: 1,
                    year: 1910,
                    isBooked: false,
                    bookedTill: '2023-07-24T08:59:50 -03:00'
                },
                {
                    id: '63ca718e4f83e58eca0f3e63',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Enid Calderon',
                    title: 'Oceanic Avenue, Russellville, Kansas',
                    rating: 5,
                    year: 1940,
                    isBooked: true,
                    bookedTill: '2023-04-29T07:11:15 -03:00'
                },
                {
                    id: '63ca718e050a173dfec9d8b8',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Chris Soto',
                    title: 'Glen Street, Sharon, Illinois',
                    rating: 1,
                    year: 1990,
                    isBooked: true,
                    bookedTill: '2024-02-12T05:44:00 -03:00'
                },
                {
                    id: '63ca718eeed31e23bd2dbf4d',
                    category: 'history',
                    author: 'Hewitt Mendez',
                    title: 'Madoc Avenue, Concho, Virgin Islands',
                    rating: 1,
                    year: 1927,
                    isBooked: false,
                    bookedTill: '2023-11-10T03:29:34 -03:00'
                },
                {
                    id: '63ca718e5cd3842e55bfd18b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Antonia Madden',
                    title: 'Troutman Street, Norwood, Ohio',
                    rating: 0,
                    year: 1910,
                    isBooked: false,
                    bookedTill: '2023-06-26T05:17:04 -03:00'
                },
                {
                    id: '63ca718ea2411d119a0dcb33',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Katharine Higgins',
                    title: 'Rockaway Avenue, Stockwell, Nevada',
                    rating: 3,
                    year: 1943,
                    isBooked: true,
                    bookedTill: '2024-01-23T02:05:11 -03:00'
                },
                {
                    id: '63ca718e278d4876eae8561f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Davidson Clemons',
                    title: 'Dodworth Street, Kenwood, Wyoming',
                    rating: 3,
                    year: 1922,
                    isBooked: true,
                    bookedTill: '2024-09-23T07:35:17 -03:00'
                },
                {
                    id: '63ca718e9aa3e536812889b5',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Britt Crane',
                    title: 'Apollo Street, Lafferty, North Carolina',
                    rating: 3,
                    year: 2003,
                    isBooked: true,
                    bookedTill: '2024-01-14T04:14:45 -03:00'
                },
                {
                    id: '63ca718ef1ff0266d9515f5f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'history',
                    author: 'Wong Lang',
                    title: 'Ferry Place, Snyderville, New Hampshire',
                    rating: 4,
                    year: 1920,
                    isBooked: true,
                    bookedTill: '2024-05-18T01:33:50 -03:00'
                }
            ],
        },
        {
            genre: 'classic',
            name: 'Классическая литература',
            content: [
                {
                    id: '63ca71a5ccf1256a2427ee8e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Obrien Atkinson',
                    title: 'Degraw Street, Gulf, Virginia',
                    rating: 3,
                    year: 2021,
                    isBooked: false,
                    bookedTill: '2023-08-09T07:50:26 -03:00'
                },
                {
                    id: '63ca71a5acbed58e02c3471f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Lawanda Beach',
                    title: 'Junius Street, Crown, Maryland',
                    rating: 5,
                    year: 1901,
                    isBooked: true,
                    bookedTill: '2024-08-19T01:16:15 -03:00'
                },
                {
                    id: '63ca71a5681e3d4b107218e3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Marla West',
                    title: 'Calyer Street, Barronett, Northern Mariana Islands',
                    rating: 0,
                    year: 1985,
                    isBooked: true,
                    bookedTill: '2023-07-02T01:23:52 -03:00'
                },
                {
                    id: '63ca71a50f2bdac965624f2f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Gabrielle Simon',
                    title: 'Micieli Place, Dodge, Connecticut',
                    rating: 2,
                    year: 2004,
                    isBooked: false,
                    bookedTill: '2024-05-29T08:45:00 -03:00'
                },
                {
                    id: '63ca71a5c822e28a3ec10a90',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Aida Bowen',
                    title: 'Kent Avenue, Goochland, Wyoming',
                    rating: 3,
                    year: 1943,
                    isBooked: false,
                    bookedTill: '2024-03-29T02:57:37 -03:00'
                },
                {
                    id: '63ca71a566c7c6e36f7858db',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Terri Gould',
                    title: 'Seagate Avenue, Defiance, Alaska',
                    rating: 3,
                    year: 1940,
                    isBooked: false,
                    bookedTill: '2023-09-11T10:41:55 -03:00'
                },
                {
                    id: '63ca71a51a0ef9b182c97f9e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Rochelle Wagner',
                    title: 'Bradford Street, Grill, Arkansas',
                    rating: 2,
                    year: 1989,
                    isBooked: false,
                    bookedTill: '2023-08-08T07:05:17 -03:00'
                },
                {
                    id: '63ca71a57c0f16b069e38ae9',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Shannon Erickson',
                    title: 'Seigel Court, Boomer, Texas',
                    rating: 5,
                    year: 1961,
                    isBooked: false,
                    bookedTill: '2024-11-30T08:36:02 -03:00'
                },
                {
                    id: '63ca71a5533a4b1e548c3d57',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Kirby Vincent',
                    title: 'Boardwalk , Dahlen, Puerto Rico',
                    rating: 5,
                    year: 1969,
                    isBooked: true,
                    bookedTill: '2023-04-17T08:03:52 -03:00'
                },
                {
                    id: '63ca71a5e840161752a0350f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Etta Hurst',
                    title: 'Jefferson Street, Gadsden, Colorado',
                    rating: 2,
                    year: 1909,
                    isBooked: true,
                    bookedTill: '2024-02-01T01:49:32 -03:00'
                },
                {
                    id: '63ca71a578bf03738a03ac4e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Pate Blake',
                    title: 'Lawn Court, Falconaire, Georgia',
                    rating: 4,
                    year: 1969,
                    isBooked: false,
                    bookedTill: '2024-02-05T03:21:07 -03:00'
                },
                {
                    id: '63ca71a5109576b13cb05ca1',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Katherine Wheeler',
                    title: 'Flatbush Avenue, Herald, Louisiana',
                    rating: 2,
                    year: 2011,
                    isBooked: true,
                    bookedTill: '2024-09-15T08:07:05 -03:00'
                },
                {
                    id: '63ca71a51c2fe6065b085996',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Buckner Webb',
                    title: 'Livingston Street, Dunnavant, New Mexico',
                    rating: 0,
                    year: 1927,
                    isBooked: true,
                    bookedTill: '2023-08-24T07:22:15 -03:00'
                },
                {
                    id: '63ca71a5e82ff22d682d0d6c',
                    image: 'http://www.google.com/image.jpg',
                    category: 'classic',
                    author: 'Margery Duffy',
                    title: 'Kermit Place, Waikele, New Jersey',
                    rating: 3,
                    year: 1960,
                    isBooked: true,
                    bookedTill: '2024-12-23T02:58:54 -03:00'
                }
            ],
        },
        {
            genre: 'psychology',
            name: 'Книги по психологии',
            content: [
                {
                    id: '63ca71b7fe38a00197d6423b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'psychology',
                    author: 'Abbott Merritt',
                    title: 'Beverly Road, Villarreal, Alabama',
                    rating: 0,
                    year: 1907,
                    isBooked: false,
                    bookedTill: '2024-05-28T09:20:37 -03:00'
                },
                {
                    id: '63ca71b7dbe3e511031863d0',
                    image: 'http://www.google.com/image.jpg',
                    category: 'psychology',
                    author: 'Harris Knight',
                    title: 'Rockaway Avenue, Hollymead, Montana',
                    rating: 1,
                    year: 1987,
                    isBooked: false,
                    bookedTill: '2023-04-17T10:46:48 -03:00'
                },
                {
                    id: '63ca71b7ab639b4498d6ddc8',
                    image: 'http://www.google.com/image.jpg',
                    category: 'psychology',
                    author: 'Hooper Webb',
                    title: 'Stryker Court, Wildwood, Nebraska',
                    rating: 4,
                    year: 1968,
                    isBooked: false,
                    bookedTill: '2023-03-22T06:50:25 -03:00'
                }
            ],
        },
        {
            genre: 'computers',
            name: 'Компьютерная литература',
            content: [
                {
                    id: '63ca71c94c9bb5ba1cefd584',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Clemons Guthrie',
                    title: 'Montieth Street, Bartonsville, Wyoming',
                    rating: 2,
                    year: 2022,
                    isBooked: false,
                    bookedTill: '2024-08-19T08:55:48 -03:00'
                },
                {
                    id: '63ca71c98104356fa2e159c8',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Sharron Talley',
                    title: 'Emerson Place, Selma, Maryland',
                    rating: 0,
                    year: 1985,
                    isBooked: true,
                    bookedTill: '2024-04-26T04:37:40 -03:00'
                },
                {
                    id: '63ca71c973cabccd9ab7a375',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Karina Ashley',
                    title: 'Meserole Street, Derwood, Colorado',
                    rating: 4,
                    year: 1915,
                    isBooked: false,
                    bookedTill: '2023-08-04T05:26:05 -03:00'
                },
                {
                    id: '63ca71c9af1f4760abb4fb05',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Hardy Mcpherson',
                    title: 'Tabor Court, Glenbrook, Hawaii',
                    rating: 1,
                    year: 1972,
                    isBooked: true,
                    bookedTill: '2023-12-12T12:14:15 -03:00'
                },
                {
                    id: '63ca71c914841fe9cc9166f3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Mcclure Hamilton',
                    title: 'Monroe Place, Bowden, Oregon',
                    rating: 1,
                    year: 1948,
                    isBooked: false,
                    bookedTill: '2023-12-30T11:10:00 -03:00'
                },
                {
                    id: '63ca71c9e3e8102997512b5d',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Alyce Garrison',
                    title: 'Tillary Street, Whitmer, West Virginia',
                    rating: 5,
                    year: 1963,
                    isBooked: true,
                    bookedTill: '2023-04-12T08:31:26 -03:00'
                },
                {
                    id: '63ca71c969d95b2bbc52ae5c',
                    category: 'computers',
                    author: 'Monroe Bradford',
                    title: 'Cox Place, Coaldale, Idaho',
                    rating: 3,
                    year: 1999,
                    isBooked: false,
                    bookedTill: '2023-11-09T01:14:06 -03:00'
                },
                {
                    id: '63ca71c9049066e2763fcdad',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Wilda Mendoza',
                    title: 'Nixon Court, Century, Ohio',
                    rating: 3,
                    year: 1903,
                    isBooked: true,
                    bookedTill: '2024-08-23T08:29:53 -03:00'
                },
                {
                    id: '63ca71c94cf175eedcc56dcd',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Winnie Jordan',
                    title: 'Kent Street, Coldiron, Puerto Rico',
                    rating: 3,
                    year: 1977,
                    isBooked: false,
                    bookedTill: '2023-12-09T08:01:09 -03:00'
                },
                {
                    id: '63ca71c99cad1a469bece5ce',
                    image: 'http://www.google.com/image.jpg',
                    category: 'computers',
                    author: 'Salinas Lewis',
                    title: 'Rutland Road, Sugartown, Arizona',
                    rating: 0,
                    year: 2013,
                    isBooked: true,
                    bookedTill: '2023-08-04T10:38:12 -03:00'
                }
            ],
        },
        {
            genre: 'culture',
            name: 'Культура и искусство',
            content: [
                {
                    id: '63ca71e6d970b7f0ae3b8c6b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Powers Harrell',
                    title: 'Division Avenue, Cleary, Connecticut',
                    rating: 4,
                    year: 1958,
                    isBooked: false,
                    bookedTill: '2023-10-05T07:48:25 -03:00'
                },
                {
                    id: '63ca71e6fdfc4f14550fd9cc',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Garrett Carey',
                    title: 'Lewis Avenue, Cochranville, New Jersey',
                    rating: 2,
                    year: 2014,
                    isBooked: true,
                    bookedTill: '2024-06-04T07:40:31 -03:00'
                },
                {
                    id: '63ca71e699a63c47013fccb2',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Shepherd Leach',
                    title: 'Hutchinson Court, Strong, New York',
                    rating: 5,
                    year: 1900,
                    isBooked: true,
                    bookedTill: '2024-07-04T12:48:42 -03:00'
                },
                {
                    id: '63ca71e69fa293049b6b13d8',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Natalia Marsh',
                    title: 'Linden Boulevard, Slovan, Virginia',
                    rating: 5,
                    year: 1940,
                    isBooked: true,
                    bookedTill: '2023-02-28T01:37:59 -03:00'
                },
                {
                    id: '63ca71e6750f9c3dbceb9a19',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Austin Strickland',
                    title: 'Ryerson Street, Belgreen, West Virginia',
                    rating: 4,
                    year: 1933,
                    isBooked: false,
                    bookedTill: '2023-02-11T05:06:59 -03:00'
                },
                {
                    id: '63ca71e61e134d67eaa45450',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Fisher Parker',
                    title: 'Legion Street, Frank, Texas',
                    rating: 0,
                    year: 1904,
                    isBooked: false,
                    bookedTill: '2023-08-21T05:32:23 -03:00'
                },
                {
                    id: '63ca71e6f1567eea043b96cb',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Jenifer Sherman',
                    title: 'Henderson Walk, Rossmore, Kansas',
                    rating: 3,
                    year: 1937,
                    isBooked: true,
                    bookedTill: '2023-10-26T09:54:55 -03:00'
                },
                {
                    id: '63ca71e65a0748837569fae0',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Sellers Wilson',
                    title: 'Front Street, Glendale, Maine',
                    rating: 1,
                    year: 1989,
                    isBooked: false,
                    bookedTill: '2024-12-09T04:52:39 -03:00'
                },
                {
                    id: '63ca71e6567d90e20d2d1b4e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Donovan Pacheco',
                    title: 'Stillwell Place, Caberfae, Pennsylvania',
                    rating: 3,
                    year: 2023,
                    isBooked: false,
                    bookedTill: '2023-04-10T02:47:03 -03:00'
                },
                {
                    id: '63ca71e661750a3a3ec3b0c7',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Cervantes Gardner',
                    title: 'Ryder Street, Coventry, Oklahoma',
                    rating: 2,
                    year: 1969,
                    isBooked: true,
                    bookedTill: '2024-12-13T09:48:29 -03:00'
                },
                {
                    id: '63ca71e68202b7adde39d8e3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Gross King',
                    title: 'Dover Street, Linganore, Washington',
                    rating: 4,
                    year: 1903,
                    isBooked: false,
                    bookedTill: '2024-04-14T11:24:28 -03:00'
                },
                {
                    id: '63ca71e6099e92510897a162',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Lynn Gill',
                    title: 'Quay Street, Vale, Tennessee',
                    rating: 4,
                    year: 1969,
                    isBooked: false,
                    bookedTill: '2023-07-18T08:05:53 -03:00'
                },
                {
                    id: '63ca71e636e8a2ec60f47c48',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Mendoza Peters',
                    title: 'Chase Court, Gasquet, Northern Mariana Islands',
                    rating: 2,
                    year: 1938,
                    isBooked: true,
                    bookedTill: '2024-12-05T04:20:43 -03:00'
                },
                {
                    id: '63ca71e6adf5b77b3366ff19',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Etta Gamble',
                    title: 'Garland Court, Leyner, Hawaii',
                    rating: 4,
                    year: 1976,
                    isBooked: false,
                    bookedTill: '2024-06-13T08:02:31 -03:00'
                },
                {
                    id: '63ca71e6b41e1ce48198d4f8',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Aguirre Jenkins',
                    title: 'Evergreen Avenue, Cade, South Dakota',
                    rating: 1,
                    year: 1901,
                    isBooked: false,
                    bookedTill: '2024-12-24T11:21:43 -03:00'
                },
                {
                    id: '63ca71e64c2b018450d916b5',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Simone Robinson',
                    title: 'Jamison Lane, Gwynn, American Samoa',
                    rating: 1,
                    year: 1996,
                    isBooked: true,
                    bookedTill: '2023-06-07T06:39:04 -03:00'
                },
                {
                    id: '63ca71e6a1daa64698ffaad2',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Serena Cruz',
                    title: 'Banner Avenue, Carrizo, Mississippi',
                    rating: 3,
                    year: 1982,
                    isBooked: false,
                    bookedTill: '2023-01-30T10:20:48 -03:00'
                },
                {
                    id: '63ca71e65b70ca8fec5f474e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Cecilia Ayala',
                    title: 'Hillel Place, Bawcomville, Michigan',
                    rating: 3,
                    year: 1986,
                    isBooked: false,
                    bookedTill: '2023-08-20T10:00:07 -03:00'
                },
                {
                    id: '63ca71e69e28dbcc6c91712a',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Imogene Mueller',
                    title: 'Quentin Road, Balm, Guam',
                    rating: 5,
                    year: 1959,
                    isBooked: true,
                    bookedTill: '2023-03-12T01:20:11 -03:00'
                },
                {
                    id: '63ca71e6d60bbfa852a3eec3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Robyn Leon',
                    title: 'Ridgecrest Terrace, Eggertsville, Palau',
                    rating: 2,
                    year: 1957,
                    isBooked: true,
                    bookedTill: '2023-05-31T11:35:55 -03:00'
                },
                {
                    id: '63ca71e650aeb4e314620149',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Katina Boone',
                    title: 'Canal Avenue, Whipholt, Arkansas',
                    rating: 1,
                    year: 1938,
                    isBooked: true,
                    bookedTill: '2024-11-21T06:49:25 -03:00'
                },
                {
                    id: '63ca71e6e250a97611398bf6',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Lenore Calderon',
                    title: 'Graham Avenue, Nogal, Alaska',
                    rating: 3,
                    year: 2006,
                    isBooked: true,
                    bookedTill: '2023-11-02T03:18:25 -03:00'
                },
                {
                    id: '63ca71e6e0f38a14a1314048',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Randall Hahn',
                    title: 'Gerald Court, Fivepointville, Alabama',
                    rating: 4,
                    year: 1908,
                    isBooked: true,
                    bookedTill: '2023-06-07T12:22:04 -03:00'
                },
                {
                    id: '63ca71e6fecf590b073d7712',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Atkinson Webb',
                    title: 'Catherine Street, Reno, Marshall Islands',
                    rating: 2,
                    year: 2012,
                    isBooked: false,
                    bookedTill: '2024-09-29T03:40:57 -03:00'
                },
                {
                    id: '63ca71e6db840282606cf923',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Reese Bentley',
                    title: 'Humboldt Street, Toftrees, Florida',
                    rating: 3,
                    year: 2020,
                    isBooked: true,
                    bookedTill: '2023-08-01T01:51:34 -03:00'
                },
                {
                    id: '63ca71e6b201659e7905888b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Sims Cardenas',
                    title: 'Bartlett Place, Logan, North Dakota',
                    rating: 3,
                    year: 1909,
                    isBooked: true,
                    bookedTill: '2023-11-03T12:41:17 -03:00'
                },
                {
                    id: '63ca71e614e7b2044ae21301',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Lavonne Crawford',
                    title: 'Howard Alley, Dorneyville, South Carolina',
                    rating: 5,
                    year: 1981,
                    isBooked: true,
                    bookedTill: '2024-09-12T12:40:13 -03:00'
                },
                {
                    id: '63ca71e6a6e750d98645aea5',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Ollie Rasmussen',
                    title: 'Georgia Avenue, Columbus, Federated States Of Micronesia',
                    rating: 3,
                    year: 1946,
                    isBooked: true,
                    bookedTill: '2023-07-03T05:48:47 -03:00'
                },
                {
                    id: '63ca71e6dd1da5b3063d67f1',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Ethel Saunders',
                    title: 'Oceanic Avenue, Coldiron, Iowa',
                    rating: 3,
                    year: 1929,
                    isBooked: false,
                    bookedTill: '2023-07-03T07:30:11 -03:00'
                },
                {
                    id: '63ca71e6f2133a5ece732f92',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Mitchell Contreras',
                    title: 'Bedford Place, Gerber, Illinois',
                    rating: 2,
                    year: 1946,
                    isBooked: false,
                    bookedTill: '2023-02-20T06:19:24 -03:00'
                },
                {
                    id: '63ca71e632bec868cd39f27a',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Marcy Mason',
                    title: 'Maple Street, Bodega, Idaho',
                    rating: 1,
                    year: 1929,
                    isBooked: false,
                    bookedTill: '2023-10-08T07:45:55 -03:00'
                },
                {
                    id: '63ca71e6b6b1d5ba79a3625e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'culture',
                    author: 'Delacruz Hays',
                    title: 'Nixon Court, Eagletown, Colorado',
                    rating: 5,
                    year: 2022,
                    isBooked: true,
                    bookedTill: '2023-03-10T04:34:18 -03:00'
                }
            ],
        },
        {
            genre: 'science',
            name: 'Наука и образование',
            content: [
                {
                    id: '63ca7214c12cad014deb6ca3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Hardin Rosales',
                    title: 'Malbone Street, Oberlin, Louisiana',
                    rating: 3,
                    year: 1990,
                    isBooked: false,
                    bookedTill: '2024-08-31T02:41:51 -03:00'
                },
                {
                    id: '63ca72146fcd182f82671ed7',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Thomas Bright',
                    title: 'Kimball Street, Yardville, Maine',
                    rating: 0,
                    year: 2006,
                    isBooked: true,
                    bookedTill: '2023-06-23T06:53:04 -03:00'
                },
                {
                    id: '63ca7214fbf49aec3a9113ec',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Vickie Goodwin',
                    title: 'Neptune Court, Cumminsville, New York',
                    rating: 1,
                    year: 1949,
                    isBooked: true,
                    bookedTill: '2023-11-16T02:44:56 -03:00'
                },
                {
                    id: '63ca721406cda2ae47d8ee93',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Kellie Nguyen',
                    title: 'Waldorf Court, Chesterfield, North Carolina',
                    rating: 3,
                    year: 1995,
                    isBooked: false,
                    bookedTill: '2024-07-30T04:24:59 -03:00'
                },
                {
                    id: '63ca72147cb53f1bae5d1210',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Ellen Pittman',
                    title: 'Ridgecrest Terrace, Northchase, Pennsylvania',
                    rating: 3,
                    year: 1974,
                    isBooked: false,
                    bookedTill: '2024-03-11T04:07:31 -03:00'
                },
                {
                    id: '63ca72142eee9f9ca5887193',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Stefanie Merritt',
                    title: 'Beaver Street, Greenbackville, New Jersey',
                    rating: 2,
                    year: 1984,
                    isBooked: false,
                    bookedTill: '2024-01-17T12:39:54 -03:00'
                },
                {
                    id: '63ca7214e9f41806763c6d74',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Tammy Maddox',
                    title: 'Durland Place, Sussex, Vermont',
                    rating: 3,
                    year: 1962,
                    isBooked: false,
                    bookedTill: '2023-12-22T01:00:06 -03:00'
                },
                {
                    id: '63ca7214bb7bf1050fe575c5',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Oneil Bentley',
                    title: 'Olive Street, Talpa, Rhode Island',
                    rating: 3,
                    year: 2006,
                    isBooked: true,
                    bookedTill: '2023-04-17T08:29:14 -03:00'
                },
                {
                    id: '63ca7214b6c88d536c35b42b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Jacobs Martinez',
                    title: 'Montauk Court, Jamestown, Colorado',
                    rating: 0,
                    year: 1942,
                    isBooked: true,
                    bookedTill: '2024-10-18T06:50:19 -03:00'
                },
                {
                    id: '63ca7214bab54ee95fa6be2b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'science',
                    author: 'Howard Powell',
                    title: 'Clinton Avenue, Stockdale, California',
                    rating: 3,
                    year: 1988,
                    isBooked: false,
                    bookedTill: '2024-05-04T12:14:27 -03:00'
                }
            ],
        },
        {
            genre: 'publicistic',
            name: 'Публицистическая литература',
            content: [
                {
                    id: '63ca721f13f819f5347e7e06',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Lori Sykes',
                    title: 'Ira Court, Ribera, Federated States Of Micronesia',
                    rating: 5,
                    year: 1952,
                    isBooked: true,
                    bookedTill: '2023-02-28T07:36:21 -03:00'
                },
                {
                    id: '63ca721fab15225ce20c9926',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Mayer Mckee',
                    title: 'Columbia Place, Waterloo, Alaska',
                    rating: 2,
                    year: 1994,
                    isBooked: true,
                    bookedTill: '2024-05-30T01:01:40 -03:00'
                },
                {
                    id: '63ca721f8bd7acadd9e2cfec',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Washington Mcmillan',
                    title: 'Harbor Court, Tilden, Rhode Island',
                    rating: 0,
                    year: 1989,
                    isBooked: false,
                    bookedTill: '2024-01-08T06:34:47 -03:00'
                },
                {
                    id: '63ca721f256bf38606a3055e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Turner Copeland',
                    title: 'Bogart Street, Irwin, Washington',
                    rating: 2,
                    year: 2009,
                    isBooked: true,
                    bookedTill: '2024-09-06T08:31:51 -03:00'
                },
                {
                    id: '63ca721f196bb5ba65332f78',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Silvia Vincent',
                    title: 'Bainbridge Street, Edenburg, North Carolina',
                    rating: 0,
                    year: 1958,
                    isBooked: true,
                    bookedTill: '2024-11-03T12:27:05 -03:00'
                },
                {
                    id: '63ca721fba1196f860ca1434',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Myers Burns',
                    title: 'Montieth Street, Cliffside, New York',
                    rating: 1,
                    year: 1972,
                    isBooked: false,
                    bookedTill: '2024-02-27T10:59:38 -03:00'
                },
                {
                    id: '63ca721f763c5f861ce9338d',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Lloyd Diaz',
                    title: 'Schenck Avenue, Fedora, California',
                    rating: 1,
                    year: 2016,
                    isBooked: true,
                    bookedTill: '2024-02-02T06:54:46 -03:00'
                },
                {
                    id: '63ca721f149c328e43466e39',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Cheryl Zimmerman',
                    title: 'Leonard Street, Ellerslie, Georgia',
                    rating: 5,
                    year: 1971,
                    isBooked: false,
                    bookedTill: '2024-08-09T12:15:06 -03:00'
                },
                {
                    id: '63ca721f302ee41a5ab34761',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Dillard Williams',
                    title: 'Jardine Place, Temperanceville, Vermont',
                    rating: 2,
                    year: 2004,
                    isBooked: false,
                    bookedTill: '2024-03-05T04:28:08 -03:00'
                },
                {
                    id: '63ca721f497daecb25bbeabb',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Alejandra Brooks',
                    title: 'Jodie Court, Coloma, District Of Columbia',
                    rating: 4,
                    year: 1943,
                    isBooked: true,
                    bookedTill: '2023-05-30T12:19:51 -03:00'
                },
                {
                    id: '63ca721f5c32475217474c04',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Henrietta Ray',
                    title: 'Brightwater Court, Southmont, Alabama',
                    rating: 1,
                    year: 1901,
                    isBooked: true,
                    bookedTill: '2024-09-23T09:08:59 -03:00'
                },
                {
                    id: '63ca721fc8efac53ac17c787',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Juarez Velasquez',
                    title: 'Noel Avenue, Fairview, Iowa',
                    rating: 0,
                    year: 1938,
                    isBooked: false,
                    bookedTill: '2023-06-03T02:23:14 -03:00'
                },
                {
                    id: '63ca721f74d92b88d0406c39',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Mullen Harmon',
                    title: 'Schroeders Avenue, Kilbourne, Louisiana',
                    rating: 1,
                    year: 2013,
                    isBooked: false,
                    bookedTill: '2023-02-07T03:41:13 -03:00'
                },
                {
                    id: '63ca721f10eaa544a81dcefc',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Graves Mayo',
                    title: 'Argyle Road, Murillo, Texas',
                    rating: 2,
                    year: 1994,
                    isBooked: false,
                    bookedTill: '2023-03-05T02:44:28 -03:00'
                },
                {
                    id: '63ca721f86071338f894c598',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Gomez Russo',
                    title: 'Kensington Walk, Ladera, Nevada',
                    rating: 2,
                    year: 2012,
                    isBooked: true,
                    bookedTill: '2024-11-26T01:58:15 -03:00'
                },
                {
                    id: '63ca721f9e67143278d7aeca',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Liliana Gibbs',
                    title: 'Hyman Court, Umapine, Illinois',
                    rating: 3,
                    year: 1905,
                    isBooked: false,
                    bookedTill: '2023-09-19T03:35:45 -03:00'
                },
                {
                    id: '63ca721f41da5b7d8a88fba9',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Tanya Francis',
                    title: 'Village Court, Columbus, Delaware',
                    rating: 3,
                    year: 1971,
                    isBooked: false,
                    bookedTill: '2024-07-20T11:36:05 -03:00'
                },
                {
                    id: '63ca721f9a67822a6db31fca',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Marietta Little',
                    title: 'Driggs Avenue, Succasunna, New Hampshire',
                    rating: 0,
                    year: 1929,
                    isBooked: true,
                    bookedTill: '2024-09-06T09:11:52 -03:00'
                },
                {
                    id: '63ca721f1a424fecf6181d23',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Whitney Buckner',
                    title: 'Cooper Street, Blanford, Utah',
                    rating: 2,
                    year: 2021,
                    isBooked: true,
                    bookedTill: '2024-07-29T06:04:45 -03:00'
                },
                {
                    id: '63ca721f9c8c3a6fdd62fd34',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Kristi Doyle',
                    title: 'Ashford Street, Hasty, Maine',
                    rating: 1,
                    year: 1915,
                    isBooked: true,
                    bookedTill: '2023-07-18T10:23:08 -03:00'
                },
                {
                    id: '63ca721fc0ad98d38bfb41d3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Wanda Leonard',
                    title: 'Losee Terrace, Fruitdale, Wyoming',
                    rating: 1,
                    year: 1959,
                    isBooked: false,
                    bookedTill: '2023-11-22T01:47:43 -03:00'
                },
                {
                    id: '63ca721f3e9f747bb0ee1c46',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Fleming Benton',
                    title: 'Poplar Avenue, Shelby, Indiana',
                    rating: 5,
                    year: 1984,
                    isBooked: false,
                    bookedTill: '2023-08-08T06:21:19 -03:00'
                },
                {
                    id: '63ca721f67c793e65ec7be5f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Chen Franklin',
                    title: 'Wyona Street, Vicksburg, Kentucky',
                    rating: 3,
                    year: 2008,
                    isBooked: true,
                    bookedTill: '2023-12-09T06:40:37 -03:00'
                },
                {
                    id: '63ca721fa380a23b7ee43ed5',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Dena Delgado',
                    title: 'Veronica Place, Faywood, Massachusetts',
                    rating: 3,
                    year: 1911,
                    isBooked: true,
                    bookedTill: '2023-08-29T07:46:04 -03:00'
                },
                {
                    id: '63ca721f0b3aed2dd963c9ed',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Watson Marks',
                    title: 'Benson Avenue, Kieler, Colorado',
                    rating: 3,
                    year: 1975,
                    isBooked: true,
                    bookedTill: '2024-08-13T07:46:20 -03:00'
                },
                {
                    id: '63ca721fc45b1ffee4b57cbc',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Farrell Daniel',
                    title: 'Harway Avenue, Why, Guam',
                    rating: 1,
                    year: 1955,
                    isBooked: false,
                    bookedTill: '2023-11-24T07:34:57 -03:00'
                },
                {
                    id: '63ca721fa0a30d652df935ad',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Denise Morrison',
                    title: 'Glendale Court, Zortman, Arizona',
                    rating: 3,
                    year: 1936,
                    isBooked: true,
                    bookedTill: '2024-12-26T11:24:22 -03:00'
                },
                {
                    id: '63ca721faaec76517f152ac1',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Guthrie Beard',
                    title: 'Fulton Street, Breinigsville, New Mexico',
                    rating: 5,
                    year: 2014,
                    isBooked: true,
                    bookedTill: '2024-05-26T08:21:08 -03:00'
                },
                {
                    id: '63ca721fd8e2bf79aa39928a',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Celeste Summers',
                    title: 'Independence Avenue, Carrizo, West Virginia',
                    rating: 0,
                    year: 1965,
                    isBooked: true,
                    bookedTill: '2023-09-20T11:10:56 -03:00'
                },
                {
                    id: '63ca721f244988c766631075',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Irma Bryan',
                    title: 'Channel Avenue, Nadine, Idaho',
                    rating: 0,
                    year: 1946,
                    isBooked: true,
                    bookedTill: '2023-09-13T02:15:09 -03:00'
                },
                {
                    id: '63ca721f68cde4cf3a28254c',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Gallegos Merrill',
                    title: 'Kathleen Court, Southview, Pennsylvania',
                    rating: 0,
                    year: 2012,
                    isBooked: false,
                    bookedTill: '2024-01-04T12:24:32 -03:00'
                },
                {
                    id: '63ca721f1a153685973841bc',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Nola Navarro',
                    title: 'Seigel Court, Walton, Wisconsin',
                    rating: 0,
                    year: 1957,
                    isBooked: false,
                    bookedTill: '2023-07-09T09:01:32 -03:00'
                },
                {
                    id: '63ca721fc5d6d7d40976f210',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Lamb Chan',
                    title: 'Micieli Place, Gasquet, Virgin Islands',
                    rating: 1,
                    year: 1937,
                    isBooked: false,
                    bookedTill: '2023-06-02T06:13:06 -03:00'
                },
                {
                    id: '63ca721fd87477be45d55d4b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Barrett Evans',
                    title: 'Hopkins Street, Wolcott, Tennessee',
                    rating: 3,
                    year: 1923,
                    isBooked: false,
                    bookedTill: '2023-06-10T07:57:02 -03:00'
                },
                {
                    id: '63ca721fa12f7e4994c61b0a',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Mariana Galloway',
                    title: 'Gelston Avenue, Hamilton, South Carolina',
                    rating: 1,
                    year: 1961,
                    isBooked: true,
                    bookedTill: '2023-02-01T10:40:49 -03:00'
                },
                {
                    id: '63ca721fa32d6823ed9f96cd',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Blair Mccarty',
                    title: 'Erskine Loop, Foscoe, Oregon',
                    rating: 3,
                    year: 1987,
                    isBooked: false,
                    bookedTill: '2024-12-05T11:28:04 -03:00'
                },
                {
                    id: '63ca721fbadbfaa2c433ac56',
                    image: 'http://www.google.com/image.jpg',
                    category: 'publicistic',
                    author: 'Grant Romero',
                    title: 'Humboldt Street, Kiskimere, Kansas',
                    rating: 3,
                    year: 2006,
                    isBooked: true,
                    bookedTill: '2023-04-10T09:22:02 -03:00'
                },
                {
                    id: '63ca721fbd0e95f8e0dcd2f3',
                    category: 'publicistic',
                    author: 'Paul Noel',
                    title: 'Pilling Street, Silkworth, American Samoa',
                    rating: 4,
                    year: 1956,
                    isBooked: true,
                    bookedTill: '2024-04-06T04:45:11 -03:00'
                }
            ],
        },
        {
            genre: 'references',
            name: 'Справочники',
            content: [
                {
                    id: '63ca7235890c875463bcb2ac',
                    image: 'http://www.google.com/image.jpg',
                    category: 'references',
                    author: 'Ana Fuentes',
                    title: 'Junius Street, Cazadero, New Hampshire',
                    rating: 5,
                    year: 2008,
                    isBooked: false,
                    bookedTill: '2023-02-23T09:35:44 -03:00'
                },
                {
                    id: '63ca72356f72ad8fe0b32c17',
                    image: 'http://www.google.com/image.jpg',
                    category: 'references',
                    author: 'Armstrong Hansen',
                    title: 'Bayard Street, Manitou, Kentucky',
                    rating: 0,
                    year: 1939,
                    isBooked: true,
                    bookedTill: '2023-05-12T08:40:34 -03:00'
                },
                {
                    id: '63ca7235a3cb462432bb1e8e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'references',
                    author: 'Jenna Larson',
                    title: 'Durland Place, Gibsonia, Minnesota',
                    rating: 0,
                    year: 2006,
                    isBooked: true,
                    bookedTill: '2024-04-11T03:36:07 -03:00'
                }
            ],
        },
        {
            genre: 'scifi',
            name: 'Фантастика',
            content: [
                {
                    id: '63ca7260584997167a862a87',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Reyes Bright',
                    title: 'Vermont Street, Rose, Iowa',
                    rating: 5,
                    year: 1940,
                    isBooked: false,
                    bookedTill: '2023-04-13T01:36:18 -03:00'
                },
                {
                    id: '63ca72603b8d7f0892416c20',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Hopkins Kirk',
                    title: 'Mersereau Court, Rehrersburg, Idaho',
                    rating: 0,
                    year: 1944,
                    isBooked: true,
                    bookedTill: '2023-11-09T12:38:03 -03:00'
                },
                {
                    id: '63ca72605c0341fd05cc2976',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Violet Michael',
                    title: 'Everit Street, Coinjock, California',
                    rating: 0,
                    year: 1924,
                    isBooked: false,
                    bookedTill: '2024-01-28T01:23:02 -03:00'
                },
                {
                    id: '63ca72607bea064af9c5086a',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Gonzales Dean',
                    title: 'Newton Street, Hoehne, Arizona',
                    rating: 2,
                    year: 1972,
                    isBooked: false,
                    bookedTill: '2024-03-16T08:53:33 -03:00'
                },
                {
                    id: '63ca7260545150b87a4601d7',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Mcconnell Madden',
                    title: 'Temple Court, Starks, Ohio',
                    rating: 3,
                    year: 2005,
                    isBooked: false,
                    bookedTill: '2024-10-27T03:24:39 -03:00'
                },
                {
                    id: '63ca7260065fec2bca643424',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Lewis Patel',
                    title: 'Dobbin Street, Bawcomville, North Carolina',
                    rating: 1,
                    year: 1916,
                    isBooked: true,
                    bookedTill: '2024-05-15T03:05:12 -03:00'
                },
                {
                    id: '63ca7260b08fd46624f60d13',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Lola Herrera',
                    title: 'Russell Street, Grapeview, Delaware',
                    rating: 3,
                    year: 1904,
                    isBooked: true,
                    bookedTill: '2023-06-03T04:02:57 -03:00'
                },
                {
                    id: '63ca72608b3b5760122fda3c',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Shannon Acevedo',
                    title: 'Rugby Road, Wanship, Oregon',
                    rating: 1,
                    year: 1926,
                    isBooked: false,
                    bookedTill: '2023-10-21T07:53:36 -03:00'
                },
                {
                    id: '63ca726054e13380e503a296',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Jaclyn Watson',
                    title: 'Cypress Court, Sheatown, Virginia',
                    rating: 0,
                    year: 1983,
                    isBooked: false,
                    bookedTill: '2023-02-02T02:59:58 -03:00'
                },
                {
                    id: '63ca72603711075edffa3940',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Britt Banks',
                    title: 'Stone Avenue, Dixie, Palau',
                    rating: 4,
                    year: 1971,
                    isBooked: true,
                    bookedTill: '2024-07-17T07:58:59 -03:00'
                },
                {
                    id: '63ca72606990ac8c7d3439ef',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Lynne Turner',
                    title: 'Bliss Terrace, Rivereno, West Virginia',
                    rating: 0,
                    year: 1936,
                    isBooked: true,
                    bookedTill: '2023-10-12T05:58:54 -03:00'
                },
                {
                    id: '63ca72608eee1efae3ba0806',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Rosetta Dawson',
                    title: 'Ide Court, Lumberton, Georgia',
                    rating: 2,
                    year: 1911,
                    isBooked: false,
                    bookedTill: '2023-11-02T04:26:55 -03:00'
                },
                {
                    id: '63ca726098272c74fd4b6002',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Nixon Russell',
                    title: 'Tompkins Avenue, Golconda, South Dakota',
                    rating: 1,
                    year: 1978,
                    isBooked: true,
                    bookedTill: '2023-02-22T04:30:08 -03:00'
                },
                {
                    id: '63ca7260b3805b39085dea37',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Flores Serrano',
                    title: 'Pine Street, Laurelton, South Carolina',
                    rating: 5,
                    year: 2010,
                    isBooked: false,
                    bookedTill: '2023-02-12T03:17:24 -03:00'
                },
                {
                    id: '63ca7260d7e7f645c63ee8e2',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Bernadine Foley',
                    title: 'Anchorage Place, Linwood, Maryland',
                    rating: 2,
                    year: 1961,
                    isBooked: true,
                    bookedTill: '2023-08-08T02:58:16 -03:00'
                },
                {
                    id: '63ca7260225cabe0c8cbf9b2',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Renee Valdez',
                    title: 'Bayard Street, Cascades, District Of Columbia',
                    rating: 4,
                    year: 1961,
                    isBooked: true,
                    bookedTill: '2023-12-10T06:32:41 -03:00'
                },
                {
                    id: '63ca72604358fc79aab7919c',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Estela Cabrera',
                    title: 'Logan Street, Wintersburg, Indiana',
                    rating: 3,
                    year: 1996,
                    isBooked: false,
                    bookedTill: '2023-12-08T07:10:18 -03:00'
                },
                {
                    id: '63ca7260a5b9bc4171c0bbaf',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Jacobson Mclaughlin',
                    title: 'Plaza Street, Sabillasville, New Jersey',
                    rating: 4,
                    year: 1907,
                    isBooked: false,
                    bookedTill: '2024-06-16T03:12:07 -03:00'
                },
                {
                    id: '63ca7260e078fb52f0434412',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Bright Cain',
                    title: 'Dearborn Court, Sussex, Alabama',
                    rating: 3,
                    year: 2011,
                    isBooked: true,
                    bookedTill: '2023-05-11T08:40:47 -03:00'
                },
                {
                    id: '63ca72603590b41b773df4cb',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Ladonna Gardner',
                    title: 'Seagate Terrace, Smock, Nevada',
                    rating: 0,
                    year: 2001,
                    isBooked: true,
                    bookedTill: '2023-06-27T06:24:36 -03:00'
                },
                {
                    id: '63ca7260d1e85c9b4dc95a29',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Esmeralda Coffey',
                    title: 'Himrod Street, Allendale, Utah',
                    rating: 1,
                    year: 1908,
                    isBooked: true,
                    bookedTill: '2024-12-16T01:24:32 -03:00'
                },
                {
                    id: '63ca72603744fe1a0dd7c758',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Lucile Nash',
                    title: 'Navy Walk, Somerset, Puerto Rico',
                    rating: 0,
                    year: 1923,
                    isBooked: true,
                    bookedTill: '2023-11-03T11:51:50 -03:00'
                },
                {
                    id: '63ca72601bf1214887ddd688',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Dianne Vinson',
                    title: 'Hillel Place, Goodville, Pennsylvania',
                    rating: 1,
                    year: 1912,
                    isBooked: false,
                    bookedTill: '2023-06-30T05:29:00 -03:00'
                },
                {
                    id: '63ca726006719e887315e953',
                    image: 'http://www.google.com/image.jpg',
                    category: 'scifi',
                    author: 'Gordon Barton',
                    title: 'Whitty Lane, Conway, Guam',
                    rating: 1,
                    year: 1999,
                    isBooked: true,
                    bookedTill: '2023-03-17T05:45:27 -03:00'
                }
            ],
        },
        {
            genre: 'humor',
            name: 'Юмористическая литература',
            content: [
                {
                    id: '63ca727213ff27e62c10bfef',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Garrett Foreman',
                    title: 'Sharon Street, Coyote, Georgia',
                    rating: 1,
                    year: 1910,
                    isBooked: true,
                    bookedTill: '2023-07-28T01:51:18 -03:00'
                },
                {
                    id: '63ca7272f4d74770f2970871',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Terri Lyons',
                    title: 'Devon Avenue, Kenvil, American Samoa',
                    rating: 3,
                    year: 1959,
                    isBooked: true,
                    bookedTill: '2023-11-08T10:56:07 -03:00'
                },
                {
                    id: '63ca727238a2520d3931dad6',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Rosemarie Johns',
                    title: 'Canton Court, Cressey, Louisiana',
                    rating: 3,
                    year: 1919,
                    isBooked: false,
                    bookedTill: '2023-04-11T01:20:37 -03:00'
                },
                {
                    id: '63ca7272fbf94cb0e04d6532',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Townsend Stephenson',
                    title: 'Brooklyn Avenue, Gallina, Puerto Rico',
                    rating: 1,
                    year: 1911,
                    isBooked: true,
                    bookedTill: '2023-04-11T11:02:57 -03:00'
                },
                {
                    id: '63ca7272886b20e1bc0fe3f0',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Delia Melton',
                    title: 'Miller Avenue, Maybell, South Carolina',
                    rating: 2,
                    year: 1900,
                    isBooked: true,
                    bookedTill: '2024-12-20T11:52:08 -03:00'
                },
                {
                    id: '63ca72721cd6542d8902b653',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Janis Douglas',
                    title: 'Dewitt Avenue, Taft, Arkansas',
                    rating: 3,
                    year: 1977,
                    isBooked: true,
                    bookedTill: '2023-10-31T09:53:00 -03:00'
                },
                {
                    id: '63ca727276a05cea6a238944',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Leblanc Holt',
                    title: 'Cleveland Street, Jacumba, Northern Mariana Islands',
                    rating: 5,
                    year: 1997,
                    isBooked: true,
                    bookedTill: '2024-10-24T05:25:46 -03:00'
                },
                {
                    id: '63ca7272c61b842d34ac8649',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Allen Roach',
                    title: 'Beverley Road, Biddle, California',
                    rating: 1,
                    year: 1905,
                    isBooked: true,
                    bookedTill: '2023-09-17T11:40:00 -03:00'
                },
                {
                    id: '63ca7272368132446ee759e2',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Lynda Wynn',
                    title: 'Just Court, Grazierville, Wyoming',
                    rating: 0,
                    year: 1975,
                    isBooked: false,
                    bookedTill: '2024-01-12T12:16:19 -03:00'
                },
                {
                    id: '63ca7272eebf326944c3b886',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Stevens Moran',
                    title: 'Montgomery Street, Geyserville, Maine',
                    rating: 3,
                    year: 1901,
                    isBooked: false,
                    bookedTill: '2023-04-18T03:17:06 -03:00'
                },
                {
                    id: '63ca7272f299f1dda6c67af7',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Judith Barlow',
                    title: 'Lamont Court, Kieler, Connecticut',
                    rating: 5,
                    year: 1904,
                    isBooked: true,
                    bookedTill: '2024-03-01T09:04:47 -03:00'
                },
                {
                    id: '63ca7272d326dbd7dbbf40aa',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Jacobs Colon',
                    title: 'Duffield Street, Fannett, Guam',
                    rating: 4,
                    year: 1935,
                    isBooked: true,
                    bookedTill: '2023-06-18T05:53:20 -03:00'
                },
                {
                    id: '63ca7272e9fc685f3c28c83b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Jennifer Mcdaniel',
                    title: 'Veranda Place, Ryderwood, North Dakota',
                    rating: 1,
                    year: 2023,
                    isBooked: false,
                    bookedTill: '2023-11-27T08:20:53 -03:00'
                },
                {
                    id: '63ca7272b9c5d63cf97d0868',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Andrea Randall',
                    title: 'Arion Place, Kula, Utah',
                    rating: 1,
                    year: 1956,
                    isBooked: false,
                    bookedTill: '2024-12-16T09:10:11 -03:00'
                },
                {
                    id: '63ca7272c32eaae6d954ef9e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Angela Lindsey',
                    title: 'Decatur Street, Nipinnawasee, Washington',
                    rating: 0,
                    year: 1931,
                    isBooked: true,
                    bookedTill: '2023-03-01T07:35:11 -03:00'
                },
                {
                    id: '63ca72727f066c96199c8e3a',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Vivian Gutierrez',
                    title: 'Tiffany Place, Gouglersville, Palau',
                    rating: 5,
                    year: 1933,
                    isBooked: true,
                    bookedTill: '2023-08-07T08:34:04 -03:00'
                },
                {
                    id: '63ca7272aba06d049a1facfd',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Elinor Gillespie',
                    title: 'Henry Street, Dodge, Vermont',
                    rating: 4,
                    year: 1989,
                    isBooked: true,
                    bookedTill: '2024-08-23T10:23:38 -03:00'
                },
                {
                    id: '63ca7272d9160c4036d95cc4',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Tiffany Casey',
                    title: 'Horace Court, Valmy, Texas',
                    rating: 5,
                    year: 1947,
                    isBooked: true,
                    bookedTill: '2023-06-11T11:24:07 -03:00'
                },
                {
                    id: '63ca72726a4992353d6448c4',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Pamela Mendez',
                    title: 'Willow Street, Urie, Massachusetts',
                    rating: 1,
                    year: 1976,
                    isBooked: false,
                    bookedTill: '2024-07-20T10:26:24 -03:00'
                },
                {
                    id: '63ca727299f4f982a7ca8a26',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Mills Houston',
                    title: 'Ellery Street, Sparkill, Delaware',
                    rating: 0,
                    year: 1947,
                    isBooked: false,
                    bookedTill: '2024-12-09T04:40:33 -03:00'
                },
                {
                    id: '63ca72720fa8272372f4c782',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Elaine Avery',
                    title: 'Story Street, Aberdeen, Federated States Of Micronesia',
                    rating: 4,
                    year: 1917,
                    isBooked: true,
                    bookedTill: '2024-04-25T11:09:36 -03:00'
                },
                {
                    id: '63ca72720db49c02d3de358a',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Irma Holloway',
                    title: 'Kenmore Court, Summertown, Virgin Islands',
                    rating: 0,
                    year: 1912,
                    isBooked: false,
                    bookedTill: '2024-11-23T05:45:41 -03:00'
                },
                {
                    id: '63ca7272155ed3355b7bf3c3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Mueller Riddle',
                    title: 'Brigham Street, Sylvanite, South Dakota',
                    rating: 0,
                    year: 1961,
                    isBooked: false,
                    bookedTill: '2023-12-09T12:57:26 -03:00'
                },
                {
                    id: '63ca727227346682d6983e5b',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Deann Vaughn',
                    title: 'Newkirk Placez, Marne, Montana',
                    rating: 1,
                    year: 1982,
                    isBooked: true,
                    bookedTill: '2024-12-24T10:57:07 -03:00'
                },
                {
                    id: '63ca72722fb2ea5e48ec96a4',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Pollard Holmes',
                    title: 'Lorimer Street, Brantleyville, Michigan',
                    rating: 4,
                    year: 1969,
                    isBooked: false,
                    bookedTill: '2024-06-21T06:44:51 -03:00'
                },
                {
                    id: '63ca727216ed634c72657e5e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Jensen Camacho',
                    title: 'Battery Avenue, Nicut, New Mexico',
                    rating: 4,
                    year: 1983,
                    isBooked: true,
                    bookedTill: '2024-10-03T06:47:59 -03:00'
                },
                {
                    id: '63ca7272b46ade3b7f13fcfa',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Marsh Rodgers',
                    title: 'Hillel Place, Johnsonburg, Colorado',
                    rating: 0,
                    year: 1938,
                    isBooked: true,
                    bookedTill: '2023-03-31T09:20:35 -03:00'
                },
                {
                    id: '63ca7272f7758cfc552230b3',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Lauren Griffith',
                    title: 'Cumberland Street, Clarktown, Nebraska',
                    rating: 5,
                    year: 1966,
                    isBooked: true,
                    bookedTill: '2024-05-31T07:35:14 -03:00'
                },
                {
                    id: '63ca727253960344db7f71e1',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Medina Landry',
                    title: 'Quincy Street, Homestead, Minnesota',
                    rating: 3,
                    year: 1995,
                    isBooked: false,
                    bookedTill: '2023-01-27T05:21:00 -03:00'
                },
                {
                    id: '63ca727293832010dedd17d8',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Jodie Hinton',
                    title: 'Belmont Avenue, Wilmington, Hawaii',
                    rating: 3,
                    year: 1959,
                    isBooked: true,
                    bookedTill: '2024-09-16T08:36:18 -03:00'
                },
                {
                    id: '63ca72727c0adda8dfb735a7',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Dominguez Higgins',
                    title: 'Beverly Road, Goodville, North Carolina',
                    rating: 0,
                    year: 1937,
                    isBooked: true,
                    bookedTill: '2023-01-29T09:49:43 -03:00'
                },
                {
                    id: '63ca72728818c81184b21691',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Shawna Reese',
                    title: 'Emerson Place, Hailesboro, Wisconsin',
                    rating: 0,
                    year: 1912,
                    isBooked: false,
                    bookedTill: '2023-10-29T10:16:03 -03:00'
                },
                {
                    id: '63ca7272e64b4cf655b24f31',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Shannon Mcintyre',
                    title: 'Clifford Place, Epworth, Idaho',
                    rating: 3,
                    year: 1997,
                    isBooked: true,
                    bookedTill: '2024-10-05T08:43:33 -03:00'
                },
                {
                    id: '63ca727235eb9f9fe2b7f2c1',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Hawkins Whitehead',
                    title: 'Nautilus Avenue, Brandywine, Kentucky',
                    rating: 1,
                    year: 1996,
                    isBooked: true,
                    bookedTill: '2024-12-25T07:12:27 -03:00'
                },
                {
                    id: '63ca727204e5520d9cfc6ecc',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Dona Shields',
                    title: 'Stryker Court, Mulino, Arizona',
                    rating: 2,
                    year: 1945,
                    isBooked: true,
                    bookedTill: '2024-01-20T09:28:29 -03:00'
                },
                {
                    id: '63ca727210ba1dfff9301172',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Marquez Burks',
                    title: 'Richardson Street, Tryon, New York',
                    rating: 0,
                    year: 1907,
                    isBooked: true,
                    bookedTill: '2024-12-11T01:41:10 -03:00'
                },
                {
                    id: '63ca7272fb4d63f907e5dc7e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Robin Harding',
                    title: 'Livonia Avenue, Cashtown, Indiana',
                    rating: 1,
                    year: 2000,
                    isBooked: false,
                    bookedTill: '2024-01-05T01:24:13 -03:00'
                },
                {
                    id: '63ca72723e482a1a2097eee2',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Noble Rocha',
                    title: 'Grove Place, Chemung, West Virginia',
                    rating: 0,
                    year: 2015,
                    isBooked: false,
                    bookedTill: '2023-04-14T06:40:09 -03:00'
                },
                {
                    id: '63ca727282355491f4eb3c1e',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Trevino Bean',
                    title: 'Sullivan Place, Keller, Alaska',
                    rating: 0,
                    year: 1951,
                    isBooked: true,
                    bookedTill: '2024-05-14T03:38:47 -03:00'
                },
                {
                    id: '63ca72727e6d5a234fd35f7f',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Sharon Whitaker',
                    title: 'Crescent Street, Roosevelt, Mississippi',
                    rating: 1,
                    year: 1987,
                    isBooked: true,
                    bookedTill: '2024-12-06T01:38:13 -03:00'
                },
                {
                    id: '63ca72721cd0e8c8db23b889',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Hamilton Montgomery',
                    title: 'Riverdale Avenue, Boling, New Hampshire',
                    rating: 4,
                    year: 1907,
                    isBooked: false,
                    bookedTill: '2024-02-05T06:42:54 -03:00'
                },
                {
                    id: '63ca7272ab16438cb127df88',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Kirsten Bird',
                    title: 'Butler Street, Ventress, District Of Columbia',
                    rating: 3,
                    year: 1986,
                    isBooked: false,
                    bookedTill: '2023-06-26T09:16:21 -03:00'
                },
                {
                    id: '63ca7272ee4c2058a8885036',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Brenda Ashley',
                    title: 'Crown Street, Edneyville, Tennessee',
                    rating: 1,
                    year: 1989,
                    isBooked: true,
                    bookedTill: '2024-08-31T12:53:23 -03:00'
                },
                {
                    id: '63ca7272dd27467c5812ffab',
                    image: 'http://www.google.com/image.jpg',
                    category: 'humor',
                    author: 'Charles Mcintosh',
                    title: 'Mayfair Drive, Chesapeake, Marshall Islands',
                    rating: 2,
                    year: 1979,
                    isBooked: true,
                    bookedTill: '2023-12-17T08:41:35 -03:00'
                },
                {
                    id: '63ca727215313c9efa4f1f09',
                    category: 'humor',
                    author: 'Burke Molina',
                    title: 'Matthews Court, Bergoo, Iowa',
                    rating: 2,
                    year: 1918,
                    isBooked: false,
                    bookedTill: '2023-04-11T03:29:32 -03:00'
                }
            ]
        },
    ]


} */


import {bookApi, BookResponseType, CommentRequestData, CreateBookingRequestDataType} from "../api/book-api";
import {AppThunkType} from "./store";
import {setAppErrorAC, setAppStatusAC, setAppSuccessMessageAC} from "./app-reducer";
import {AxiosError} from "axios";
import {getUserDataTC} from "./user-reducer";


const initialState: InitialBookStateType = {

    book: {
        id: 0,
        title: '',
        rating: 0,
        issueYear: '',
        description: '',
        publish: '',
        pages: '',
        cover: '',
        weight: '',
        format: '',
        ISBN: '',
        producer: '',
        authors: [],
        images: [
            {
                url: ''
            }
        ],
        categories: [],
        comments: null,
        booking: null,
        delivery: null,
        histories: null,
    },
    createCommentError: null,
    createCommentSuccess: null,
    order: null,
    createOrderError: null,
    createOrderStatus: null,

}


export const bookReducer = (state: InitialBookStateType = initialState, action: BookActionsType): InitialBookStateType => {
    switch (action.type) {
        case "book/SET-BOOK":
            return {...state, book: action.book}
        case "book/SET-CREATE-COMMENT-ERROR":
            return {...state, createCommentError: action.createCommentError}
        case "book/SET-CREATE-COMMENT-SUCCESS":
            return {...state, createCommentSuccess: action.createCommentSuccess}
        case "book/SET-CREATE-ORDER-SUCCESS":
            return {...state, order: action.order}
        case "book/SET-CREATE-ORDER-ERROR":
            return {...state, createOrderError: action.createOrderError}
        case "book/SET-CREATE-ORDER-STATUS-ERROR":
            return {...state, createOrderStatus: action.createOrderStatus}

        default:
            return state
    }
}


//  actions
export const setBookAC = (book: BookResponseType) => ({
    type: 'book/SET-BOOK',
    book
} as const)
export const setCreateCommentErrorAC = (createCommentError: string | null) => ({
    type: 'book/SET-CREATE-COMMENT-ERROR',
    createCommentError
} as const)
export const setCreateCommentSuccessAC = (createCommentSuccess: string | null) => ({
    type: 'book/SET-CREATE-COMMENT-SUCCESS',
    createCommentSuccess
} as const)
export const setCreateOrderAC = (order: boolean | null) => ({
    type: 'book/SET-CREATE-ORDER-SUCCESS',
    order
} as const)
export const setCreateOrderErrorAC = (createOrderError: string | null) => ({
    type: 'book/SET-CREATE-ORDER-ERROR',
    createOrderError
} as const)
export const setCreateOrderStatusAC = (createOrderStatus: number | null) => ({
    type: 'book/SET-CREATE-ORDER-STATUS-ERROR',
    createOrderStatus
} as const)


//  thunk

export const getBookTC = (id: number): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.getBook(id)
            dispatch(setBookAC(res.data))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setAppErrorAC(error.message))
        }
    }

export const createCommentTC = (data: CommentRequestData): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.createComment(data)
            dispatch(setCreateCommentSuccessAC(res.statusText))
            dispatch(getBookTC(Number(data.data.book)))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateCommentErrorAC(error.message))
        }
    }

export const updateCommentTC = (commentId: number, data: CommentRequestData): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.updateComment(commentId, data)
            dispatch(setCreateCommentSuccessAC(res.statusText))
            dispatch(getBookTC(Number(data.data.book)))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateCommentErrorAC(error.message))
        }
    }

export const createOrderTC = (data: CreateBookingRequestDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.createBooking(data)
            dispatch(setCreateOrderAC(res.data.attributes.order))
            dispatch(setCreateOrderStatusAC(res.status))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
            console.log(res.data.attributes.order)
            console.log(res)
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateOrderErrorAC(error.message))
            console.log(error.message)
        }
    }


export const updateOrderTC = (bookingId: number, data: CreateBookingRequestDataType): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.updateBooking(bookingId, data)
            dispatch(setCreateOrderAC(res.data.attributes.order))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
            console.log(res.data.attributes.order)
            console.log(res)
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateOrderErrorAC(error.message))
            console.log(error)
        }
    }

export const deleteOrderTC = (bookingId: number): AppThunkType =>
    async (dispatch) => {
        dispatch(setAppStatusAC('loading'))
        try {
            const res = await bookApi.deleteBooking(bookingId)

            dispatch(setCreateOrderAC(res.data.attributes.order))
            dispatch(setAppStatusAC('succeeded'))
            dispatch(setAppSuccessMessageAC('success'))
        } catch (err) {
            const error = err as AxiosError
            dispatch(setAppStatusAC('failed'))
            dispatch(setCreateOrderErrorAC(error.message))
            console.log(error)
        }
    }


//  types

export type BookActionsType =
    | ReturnType<typeof setBookAC>
    | ReturnType<typeof setCreateCommentErrorAC>
    | ReturnType<typeof setCreateCommentSuccessAC>
    | ReturnType<typeof setCreateOrderAC>
    | ReturnType<typeof setCreateOrderErrorAC>
    | ReturnType<typeof setCreateOrderStatusAC>


type InitialBookStateType = {
    book: BookResponseType
    createCommentError: null | string
    createCommentSuccess: null | string
    order: null | boolean
    createOrderError: string | null
    createOrderStatus: null | number
}

export type BookImage = {
    imageId: string;
    image: string;
}




