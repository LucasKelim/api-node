import Car from "../models/car";

class CarController
{
    getAll(req, res)
    {
        return res.json(Car.all());
    }

    create(req, res)
    {
        //
    }
}

export default new CarController();
