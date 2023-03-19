import React from "react";
import Search from "../components/search_bar";
import Card from "../components/card";
import cardsDb from "../components/db";
class Root extends React.Component {
    render() {
        return (<main className="main">
                    <div className="container">
                        <Search />
                        <div className="card_field">
                            {cardsDb.map((item) => <Card key={item.id} card={item} />)}
                        </div>
                    </div>
                </main>);   
    }
}
export default Root;