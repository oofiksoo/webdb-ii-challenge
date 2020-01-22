exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("cars")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("cars").insert([{
                    id: 1,
                    vin: "M123B345C567L98232X234",
                    make: "Tesla",
                    model: "CyberTruck",
                    mileage: "3",
                    transmission: "None - EV",
                    title_status: "clean"
                },
                {
                    id: 2,
                    vin: "G345F123T931Y12865F057",
                    make: "Cadilac",
                    model: "Escalade",
                    mileage: "800",
                    transmission: "automatic",
                    title_status: "clean"
                },
                {
                    id: 3,
                    vin: "R678Q914M274P06581H943",
                    make: "Lincon",
                    model: "Navigator",
                    mileage: "10000",
                    transmission: "automatic",
                    title_status: "clean"
                }
            ]);
        });
};