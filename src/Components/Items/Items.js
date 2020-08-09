import React from "react";
import Item from "../Item/Item";
import "./Items.css";
import Axios from "axios";

class Items extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      all_data: [],
      data_store: [],
      search: "",
      search_data: [],
    };
    this.searchhandler = this.searchhandler.bind(this);
  }
  searchhandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidMount() {
    this._isMounted = true;
    Axios.get("http://starlord.hackerearth.com/recipe").then((result) => {
      // console.log(result);
      let data = result.data;

      if (data.length > 0 && this._isMounted) {
        this.setState({
          data_store: data,
          all_data: data.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                category={item.category}
                label={item.label}
                price={item.price}
                description={item.description}
              />
            );
          }),
        });
      }
    });
  }

  render() {
    var data = this.state.data_store;
    var res_search_data;

    const search_items = data.filter((item) => {
      if (this.state.search === "") return null;
      else if (
        item.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        item.category.toLowerCase().includes(this.state.search.toLowerCase()) ||
        item.label.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
      return null;
    });

    res_search_data = search_items.map((item) => {
      return (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          category={item.category}
          label={item.label}
          price={item.price}
          description={item.description}
        />
      );
    });

    return (
      <div>
        <div className="search">
          <ul>
            <li>
              <input
                type="text"
                name="search"
                placeholder="Search by name,label,category"
                className="searchinput"
                onChange={this.searchhandler}
                value={this.state.name}
              />
            </li>

            <li onClick={this.searchhandler}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
        {res_search_data.length > 0 ? (
          <div style={{ background: "lightgray" }}>
            <br />
            <br />
            <div style={{ textAlign: "center", fontSize: "1.5em" }}>
              <b>Search Results:</b>
            </div>
            <div className="all_items2 ">{res_search_data}</div>
          </div>
        ) : null}

        <div className="all_items">
          <div
            style={{
              textAlign: "right",
              paddingTop: "5%",
              paddingRight: "10%",
            }}
          >
            <span>
              <b>Category</b>
            </span>
            <br />
            <br />
            <span style={{ fontSize: "2em" }}>
              <b>Pizza & Noddles</b>
            </span>
          </div>
          <div className="all_items2"> {this.state.all_data}</div>
        </div>
      </div>
    );
  }
}
export default Items;
