import React from "react";
import "./Item.css";
import { Redirect } from "react-router-dom";

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect_to_item_details: false,
      clock: "/icons/clock.png",
      eheart: "/icons/eheart.png",
      cheart: "/icons/cheart.png",
    };
  }
  item_details_redirect() {
    this.setState({
      redirect_to_item_details: !this.state.redirect_to_item_details,
    });
  }

  render() {
    //console.log(this.props);
    if (this.state.redirect_to_item_details) {
      return (
        <Redirect
          to={{
            pathname: `/about/item/${this.props.id}`,
            state: { id: this.props.id },
          }}
        />
      );
    }

    return (
      <div>
        {this.props.id % 2 === 0 ? (
          <div
            className="large_item "
            onClick={() => this.item_details_redirect()}
            style={{ backgroundImage: `url(${this.props.image})` }}
          >
            <span className="category">{this.props.category}</span>
            <div>
              <ul className="large_item_ul ">
                <li>
                  <b>
                    {this.props.name}
                    <br />
                    <br />
                    {this.props.label}
                  </b>
                </li>
                <li
                  style={{
                    float: "right",
                    marginTop: "-25px",
                  }}
                >
                  <img src={this.state.eheart} alt="icon" />
                </li>
                <li>
                  ₹{this.props.price}&nbsp;{" "}
                  <i
                    className="fa fa-clock-o"
                    aria-hidden="true"
                    style={{ color: "black" }}
                  ></i>
                  19 Min
                </li>
                <li>
                  <p style={{ textEmphasis: "emphasis" }}>
                    {this.props.description}
                  </p>
                </li>{" "}
              </ul>
            </div>
          </div>
        ) : (
          <div
            className="small_item "
            onClick={() => this.item_details_redirect()}
            style={{ backgroundImage: `url(${this.props.image})` }}
          >
            <span className="category">{this.props.category}</span>
            <div>
              <ul className="small_item_ul ">
                <li>
                  <b>
                    {this.props.name}&nbsp;{this.props.label}
                  </b>
                </li>
                <li
                  style={{
                    float: "right",
                    marginTop: "-25px",
                  }}
                >
                  <img src={this.state.cheart} alt="icon" />
                </li>
                <li>
                  ₹{this.props.price}&nbsp;{" "}
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  10 Min
                </li>
                <li>
                  <p style={{ textJustify: "justify" }}>
                    {this.props.description}
                  </p>
                </li>{" "}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Item;
