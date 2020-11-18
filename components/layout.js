const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 p-2 bg-gray-200 font-semibold flex justify-between">
        <div>Managed</div>
        <div className="flex px-2">
          <div className="px-2">Buildings</div>
          <div className="px-2">Assets</div>
          <div className="px-2">Account</div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
