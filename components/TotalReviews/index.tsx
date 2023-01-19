const TotalReviews = () => (
  <div className='mt-4'>
    <div className='pending-component flex justify-between'>
      <button className='custom-card w-5/12'>
        <h2>
          <b className='mr-4'>10</b>
          <span className='text-25px font-[300] font-sans'>Pending Reviews</span>
          <i className='ml-5 icon fa-solid fa-pen-to-square' />
        </h2>
      </button>
      <button className='custom-card w-5/12'>
        <h2>
          <b className='mr-4'>10</b>
          <span className='font-[300] font-sans'>Pending Approval Reviews</span>
          <i className='ml-5 fa-solid fa-ranking-star' />
        </h2>
      </button>
    </div>
  </div>
)

export default TotalReviews
