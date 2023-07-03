
function DishCardView ({elements}) {

    const listOfDishs = elements.map((dish, index) => {
        return ( 
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={dish.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {dish.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{dish.description}</p>
              <p>${dish.price}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        );
      });



    return(
        <>
       
        <div className="grid grid-cols-3 gap-5 m-5 ">{listOfDishs}</div>;
      </>
    )
}

export default DishCardView;