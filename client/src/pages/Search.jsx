import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-4 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col items-center gap-8">
          <div className="flex gap-4 items-center">
            <label className="font-semibold whitespace-nowrap">Search Term: </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
            ></input>
          </div>
          <div className="flex gap-2">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="all" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="rent" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="sale" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="offer" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="parking" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="furnished" />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <label className="font-semibold">Sort:</label>
             <select className="border rounded-lg p-3" id="sort_order">
                 <option value="">Price high to low</option>
                 <option value="">Price low to high</option>
                 <option value="">Latest</option>
                 <option value="">Oldest</option>
             </select>
          </div>
          <button className="bg-slate-900 text-white p-4 border rounded-lg w-full
           uppercase hover:opacity-75 font-semibold">Search</button>
        </form>
      </div>
      <h1 className="text-3xl font-semibold text-slate-700 p-3 border-b mt-5">Listing Results:</h1>
    </div>
  );
}
