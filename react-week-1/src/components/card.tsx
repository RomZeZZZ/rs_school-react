import React from "react"
import ICard from "../interfaces/ICard";
class Card extends React.Component {
    constructor(props: ICard) {
        super(props);
        this.title = props.card.title;
        this.price = props.card.price;
        this.rating = props.card.rating;
        this.thumbnail = props.card.thumbnail;
    }
    render() {
        console.log(this.thumbnail)
        return (
            <div className="card_container">
                <img className="card_container_img" loading="lazy" src={this.thumbnail} alt="card" />
                <div className="card_container_info">
                    <div>{this.title}</div>
                    <div>Price: {this.price}$   </div>
                    <div>Rating: {this.rating}</div>
                </div>
            </div>
        )
    }
}
export default Card;