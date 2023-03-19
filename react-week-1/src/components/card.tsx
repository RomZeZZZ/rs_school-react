import React from "react"
import ICardProps from "../interfaces/IProps";

class Card extends React.Component<ICardProps> {
        title: string;
        price: number;
        rating: number;
        thumbnail: string;
    constructor(props: ICardProps) {
        super(props);
        this.title = props.card.title;
        this.price = props.card.price;
        this.rating = props.card.rating;
        this.thumbnail = props.card.thumbnail;
    }
    render() {
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