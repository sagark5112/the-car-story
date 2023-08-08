import serviceData from "../utils/serviceHistory";

const ServiceHistory = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div class="table-responsive">
                            <table class="table bg-white table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Car Model</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Reg. No.</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Services Required</th>
                                        <th scope="col">Date of Service</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Daily Wash</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        serviceData.map((item, index) => {
                                            return <tr>
                                                <td>{index +1}</td>
                                                <td>{item.customerName}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.carModel}</td>
                                                <td>{item.year}</td>
                                                <td>{item.registrationNumber}</td>
                                                <td>{item.address}</td>
                                                <td>{item.carColor}</td>
                                                <td>{item.serviceRequired.join(", ")}</td>
                                                <td>{item.dateOfService}</td>
                                                <td>{item.totalAmount}</td>
                                                <td>{item.dailyWash}</td>
                                                <td><button className="btn btn-primary">Edit</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHistory;