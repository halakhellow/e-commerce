import React, { Component } from "react";
import ShopData from "./ShopData"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections : ShopData
        }
    }
    render() {
        return (
            <div>
                {this.state.collections.map((collection => 
                  <CollectionPreview key={collection.id} collection = {collection}/>
                ))}
            </div>
        )
    }
}

export default ShopPage;
