import "./productCard.css"

export default function ProductCard(props){

    return(
        <div>
           <img src={props.image} alt="product_img"></img>
           <span>{props.name}</span>
           <span>{props.price}</span>
           <p>{props.description}</p>
        </div>
    )
}