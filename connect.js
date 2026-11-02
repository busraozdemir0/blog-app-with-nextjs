// SQLite Database ve tablo oluşturma kodları


const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./blog.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.log(err.message);
        }

        console.log("connected to database");
    });


db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS blogs (
                id INTEGER PRIMARY KEY,
                name TEXT,
                description TEXT,
                img TEXT )`, (err) => {
        if (err) {
            return console.log(err.message);
        }

        console.log("database created.");

        db.run(`DELETE FROM blogs`, (err) => {
            if (err) {
                return console.log(err.message);
            }

            console.log("database clear...");

            const row1 = [
                "Blog Title 1",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "1.jpg"
            ];

            const row2 = [
                "Blog Title 2",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "2.jpg"
            ];

            const row3 = [
                "Blog Title 3",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "3.jpg"
            ];

            const row4 = [
                "Blog Title 4",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "4.jpg"
            ];

            const sql = `INSERT INTO blogs(name, description, img) VALUES (?,?,?)`;

            db.run(sql, row1, function (err) {
                if (err) {
                    return console.log(err.message);
                }

                const id = this.lastID;
                console.log("last inserted id " + id);
            })

            db.run(sql, row2, function (err) {
                if (err) {
                    return console.log(err.message);
                }

                const id = this.lastID;
                console.log("last inserted id " + id);
            })

            db.run(sql, row3, function (err) {
                if (err) {
                    return console.log(err.message);
                }

                const id = this.lastID;
                console.log("last inserted id " + id);
            })

            db.run(sql, row4, function (err) {
                if (err) {
                    return console.log(err.message);
                }

                const id = this.lastID;
                console.log("last inserted id " + id);
            });
        });
    });
});