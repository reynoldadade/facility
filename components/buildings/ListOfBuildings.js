const buildingsTemplates = [
  {
    nameOfBuilding: '14 Mango Tree Avenue',
    numberOfRooms: 10,
    numberOfTenants: 5,
  },
  {
    nameOfBuilding: '14 Mango Tree Avenue',
    numberOfRooms: 10,
    numberOfTenants: 5,
  },
  {
    nameOfBuilding: '14 Mango Tree Avenue',
    numberOfRooms: 10,
    numberOfTenants: 5,
  },
];

const ListOfBuildings = (props) => (
  <div className="p-2">
    {buildingsTemplates.map((building) => (
      <div className=" mt-1 p-1 flex flex-col bg-white shadow-sm text-sm text-gray-900">
        <div>
          <span className="uppercase text-gray-500 text-label">address</span>

          <span className=""> {building.nameOfBuilding}</span>
        </div>
        <div>
          <span className="uppercase text-gray-500 text-label">
            number of rooms
          </span>

          <span className=""> {building.numberOfRooms}</span>
        </div>
        <div>
          <span className="uppercase text-gray-500 text-label">
            number of tenants
          </span>

          <span className=""> {building.numberOfTenants}</span>
        </div>
      </div>
    ))}
  </div>
);

export default ListOfBuildings;
