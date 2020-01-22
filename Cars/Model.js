const db = require("../data/db-config.js");
module.exports = {
    list,
    listbyid,
    postcar
};

function list() {
    return db.select("*").from("cars");
}

function listbyid(id) {
    return db
        .select("*")
        .from("cars")
        .where("id", "=", id);
}

function postcar(new_car) {
    return db("cars")
        .insert(new_car)
        .then(id => {
            return listbyid(id[0]);
        });
}