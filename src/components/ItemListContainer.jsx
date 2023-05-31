import Card from './Card.jsx';
import Snap1 from './images/Snap1.png';
import Snap2 from './images/Snap2.png';
import Snap3 from './images/Snap3.png';
import Snap4 from './images/Snap4.png';

function ItemListContainer({ bienvenida }) {
    return (

        <div className="ItemListContainer container">
            
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>{bienvenida}</h1>
                </div>
            </div>


            <div className="h-100 bg-danger">
                <div className="row">
                    <div className="col-md-6"><Card imagen={Snap1} /></div>
                    <div className="col-md-6"><Card imagen={Snap2} /></div>

                </div>

                <div className="row">
                    <div className="col-md-6"><Card imagen={Snap3} /></div>
                    <div className="col-md-6"><Card imagen={Snap4} /></div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;