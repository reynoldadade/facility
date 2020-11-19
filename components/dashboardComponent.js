import ListOfBuildings from './buildings/ListOfBuildings';
const dashboard = (props) => (
  <div className="grid grid-rows-3 grid-flow-col gap-4 p-4">
    <div className="row-span-3 bg-gray-200">
      <ListOfBuildings />
    </div>
    <div className="row-span-1 col-span-4 bg-gray-200">breadcrumbs</div>
    <div className="row-span-2 col-span-4 bg-gray-200"></div>
  </div>
);

export default dashboard;
