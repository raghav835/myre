import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../sections/Footer";

const MobilePWALayout = () => {
  const rideItems = [
    {
      title: 'Cosmic caravan',
      location: 'Rann Of Kutch',
      dateRange: '07 Aug - 14 Aug',
      imageSrc: "https://endeavorladakh.com/wp-content/uploads/2023/12/Epic-Bike-Ride-Manali-To-Leh.jpg",
    },
    {
      title: 'White Out',
      location: 'Spiti Valley',
      dateRange: '15 Sep - 22 Sep',
      imageSrc: "https://media1.thrillophilia.com/filestore/g7ia5xgj74exj29gi7wte99l5xd6_shutterstock_731136526.jpg?w=305&h=230&dpr=2.0",
    },
    {
      title: 'Coastal Cruise',
      location: 'Goa',
      dateRange: '01 Oct - 07 Oct',
      imageSrc: "https://wallpaperaccess.com/full/6222000.jpg",
    },
  ];

  return (
    <div className="bg-black  gap-6 flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Carousel - Make this section grow */}
      <div className="flex-grow">
        <Carousel items={rideItems} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MobilePWALayout;
