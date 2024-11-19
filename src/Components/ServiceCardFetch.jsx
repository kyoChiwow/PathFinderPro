import { useEffect, useState } from "react";
import Cards from "./Cards";


const ServiceCardFetch = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("serviceData.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-36 bg-base-200 rounded-xl py-4 xl:px-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">PathFinder Pro Services</h1>

            {/* Cards div */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    services.map(service => <Cards key={service.id} service={service}></Cards>)
                }
            </div>
            {/* Cards div */}
        </div>
    );
};

export default ServiceCardFetch;