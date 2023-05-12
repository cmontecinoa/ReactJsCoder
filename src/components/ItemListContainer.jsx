import Card from './Card.jsx';
function ItemListContainer({bienvenida}) {
    return (
        
        <div className = "ItemListContainer">
            <h1>{bienvenida}</h1>

            <div className="container h-100 bg-danger card-container">
                <div className="row">
                    <div className="col-md-6"><Card imagen="https://res.cloudinary.com/dfzzrobaf/image/upload/v1674375402/SnapbackReactCoder/snapb4_s2h7ot.png"/></div>
                    <div className="col-md-6"><Card imagen="https://res.cloudinary.com/dfzzrobaf/image/upload/v1674375402/SnapbackReactCoder/snapb1_pmgzm8.png"/></div>
                

                                            
                    <div className="col-md-6"><Card imagen="https://res.cloudinary.com/dfzzrobaf/image/upload/v1674375402/SnapbackReactCoder/snapb3_bsplqt.png "/></div>
                    <div className="col-md-6"><Card imagen="https://res.cloudinary.com/dfzzrobaf/image/upload/v1674375402/SnapbackReactCoder/snapb2_trklch.png"/></div>
            
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;