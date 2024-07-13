import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'

export default function ListingItem({listing}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg
    transition-shadow rounded-lg overflow-hidden w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
      <img src={listing.imageUrls[0] || "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg"} alt="dp" 
      className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 
      transition-scale duration-200'/>
      <div className='p-3'>
        <p className='text-lg font-semibold text-slate-700 truncate'>{listing.name}</p>
        <div className='flex items-center'>
           <MdLocationOn className='h-4 w-4 text-green-700'/>
           <p className='text-sm text-gray-600 truncate line-clamp-2 w-full'>{listing.address}</p>
        </div>
        <p className='text-sm text-slate-900 line-clamp-2'>{listing.description}</p>
        <p className='text-slate-600 mt-2 font-semibold'>$
          {listing.offer? listing.discountPrice:listing.regularPrice}
          {listing.type==='rent'&&'/month'}
          <div className='text-slate-700 flex gap-4'>
            <div className='text-bold'>
              {listing.bedrooms>1? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}
            </div>
            <div className='text-bold'>
              {listing.bathrooms>1? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}
            </div>
          </div>
        </p>
      </div>
      </Link> 
    </div>
  )
}
