import { db } from '../db.js';

class Model
{
    static table = '';

    static all()
    {
        try {
            db.query('SELECT * from ' + this.table).then(([rows]) => {
                return rows;
            });
        } catch (err) {
            throw err;
        }
    }
}

export default Model;
