"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          title: "Cozy studio in East Village",
          description:
            "Cute studio in East Village (6th St. and Avenue A) on second floor (no elevator). Dishwasher in unit. Washer & dryer in building. Street-facing w/ fire escape. Building has backyard you can use. Within minutes walking distance of restaurants, bars, coffee shops, and shopping. Street parking in the area. 10 minute walk to L, M, F, J trains. 15 minute walk to Union Sq. Bus system is also easily accessible in this area Perfect for solo adventurers, couples, or business travelers. No pets. No cigs.",
          location: "East 6th Street & Avenue A, Manhattan, New York, NY",
          price: "66.99",
          availability: true,
          hostedDate: new Date("2021-01-26"),
          imageUrl:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwaW50ZXJpb3JzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ocean Front Resort Private decks Pool & Beach",
          description:
            "The sun, the sand, and the surf meet at the Wavecrest Resort to offer a magical holiday to our guests. Wake up to the sound of rolling surf and witness the spectacular sunrise. Head out for a morning walk on the beach, go beach combing or surf casting & Beach BonFires to end the day... the choice is all yours.",
          location: "Wavecrest Resort, Old Montauk Highway, Montauk, NY",
          price: "200.99",
          availability: true,
          hostedDate: new Date("2021-01-14"),
          imageUrl:
            "https://images.unsplash.com/photo-1538430224529-7eceed6ab252?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50JTIwaW50ZXJpb3JzJTIwYmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Private studio in midtown Manhattan",
          description:
            "Furnished studio with private bath and fully equipped kitchen in midtown. 3 blocks from Grand Central Station. 24 Hour Reception and Concierge Desk. Doorman. Laundry Room. All utilities, cable, wifi, local calls, complimentary weekly linen service, toiletries, in-room coffee and tea supplies and the use of our gym and business center included in price. Housekeeping service is available for extra fee. Supermarket across street. Approx 9.5% NYC taxes to be paid directly to host.",
          location: "Madison Av/E 70 St, New York, NY 10021",
          price: "60.99",
          availability: true,
          hostedDate: new Date("2021-01-17"),
          imageUrl:
            "https://images.unsplash.com/photo-1494336934272-f0efcedfc8d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Staycation Next to Central Park and Times Square",
          description:
            "Get the best with our Premier Partial Park View rooms, located between floors 30 and 46. These rooms offer views of the Manhattan skyline and partial views of Central Park, and come with 1 Queen Bed.",
          location: "33 W 75th St, New York, NY 10023",
          price: "160.99",
          availability: true,
          hostedDate: new Date("2020-02-17"),
          imageUrl:
            "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FANTASTIC NYC ESCAPE, COMFY 1BR SUITE FOR 6",
          description:
            "Found it!! Get ready for the ultimate NYC stay! Enjoy easy access to all Midtown NYC attractions: abundance of restaurants and shops within a walking distance. This 1BR Suite with a 2 Queen beds and sofa bed accommodates up to 6 guests.",
          location: "2 E 62nd St, New York, NY 10065",
          price: "278",
          availability: true,
          hostedDate: new Date("2019-07-15"),
          imageUrl:
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Modern One Bedroom near Rockefeller Center",
          description:
            "This modern one bedroom apartment is found in a luxury apartment building, located near Rockefeller Center. This area is a tourist’s paradise, as it home to areas such as the Theater District, Radio City Music Hall and Times Square. Step outside and get around the city with ease, as the B, D, F and M trains are all easily available from both the 47th and 50th Street subway stations on 6th Avenue.",
          location: "19 E 61st St, New York, NY 10065",
          price: "235.99",
          availability: true,
          hostedDate: new Date("2020-04-12"),
          imageUrl:
            "https://images.unsplash.com/photo-1500307353842-81f527a10685?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Cozy New Cabin With Patio! NYC!",
          description:
            "Combining the comfort of home living with the charm of a well-diverse neighborhood, we offer 30+ day stay rental units ranging from studio 1 bedroom apt to 3-5 bedroom apt that is outfitted with quality furnishings and amenities such as complimentary Wi-Fi, flat-screen TVs, kitchen or kitchenette, and outdoor garden or deck.",
          location: "17419-1741 Jewel Ave, Fresh Meadows, NY 11365",
          price: "75",
          availability: true,
          hostedDate: new Date("2018-12-12"),
          imageUrl:
            "https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "A+ Location Classic Queen Bed Studio",
          description:
            "Our apartment is located in the center of Manhattan Midtown near Herald Square at the corner of 31st street & Broadway. Walking distance to everything, major subway lines & Penn Stations just steps away. Fully furnished apartment with your own Kitchen/Bathroom with 24-hour security/elevator/laundry room. We are located inside the beautiful historic national landmark building designed by Architect Henry Engelbert in the Second Empire style!",
          location: "Investors Bank, 3101 Broadway, Queens, NY 11106",
          price: "68.99",
          availability: true,
          hostedDate: new Date("2020-06-20"),
          imageUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Comfortable 280 sq ft guest room on floors 19-22",
          description:
            'Features a 37" Flat Screen TV with Premium Cable Channels, King Size Pillow-top Mattress with large Pillows and high thread count linens, spacious Work Desk with an Ergonomic Chair and a 2-Line Phone for your convenience.',
          location: "220 W 45th St, New York, NY 10036",
          price: "97",
          availability: true,
          hostedDate: new Date("2017-03-19"),
          imageUrl:
            "https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Club Quarters Hotel Grand Central, Standard Room",
          description:
            "Everybody from solo travellers to groups visitng NYC will be welcomed to the Club Quarters Hotel World Trade Center. The stylish interior design of the rooms create a modern upscale environment.",
          location: "Grand Central Terminal, East 42nd Street, New York, NY",
          price: "105.99",
          availability: true,
          hostedDate: new Date("2020-05-21"),
          imageUrl:
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beautiful Private Williamsburg Suite with Terrace",
          description:
            "Our place is completely private, clean and sanitized according to Airbnb's Advanced Cleaning Initiative. You can enter and leave the suite without social contact. Work-friendly environment suitable for extended stays.",
          location: "216 Grand St, Brooklyn, NY 11211",
          price: "165",
          availability: true,
          hostedDate: new Date("2022-11-11"),
          imageUrl:
            "https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "118 Magnolia Ave 3B",
          description:
            "The space Great rooming house/hotel offering clean private room. This room you will share the bathroom in the hallway across from your room with one other room on the floor. You will have your own key to room and access to front door to building to come and go as you please.",
          location: "299 Madison Ave, New York, NY 10017",
          price: "70",
          availability: false,
          hostedDate: new Date("2021-02-25"),
          imageUrl:
            "https://images.unsplash.com/photo-1520106392146-ef585c111254?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudCUyMGludGVyaW9yc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
