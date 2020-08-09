import React from "react";
import Axios from "axios";
import "./Aboutitem.css";
import { NavLink } from "react-router-dom";
class Aboutitem extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      image: "",
      category: "",
      label: "",
      price: "",
      description: "",
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    Axios.get("http://starlord.hackerearth.com/recipe")
      .then((result) => {
        // console.log(result);
        let data = result.data;
        data.map((item) => {
          if (`${item.id}` === `${this.props.match.params.id}`) {
            this.setState({
              id: item.id,
              name: item.name,
              image: item.image,
              category: item.category,
              label: item.label,
              price: item.price,
              description: item.description,
            });
          }
          return 0;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    // console.log(this.state);
    return (
      <div className="aboutitem">
        <ul>
          <li>
            <div>
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  userSelect: "none",
                }}
              >
                <span style={{ fontSize: "1.3em" }}>
                  <i className="fa fa-arrow-left" aria-hidden="true"></i> Go
                  Back
                </span>
              </NavLink>
            </div>
            <br />
            <br />
            <div>
              <div
                className="about_item_img"
                style={{
                  backgroundImage: `url(${this.state.image})`,
                }}
              >
                <span>
                  <img src="/icons/player.png" alt="player_icon" />
                </span>
                <b> Play video</b>
              </div>
              <br />
              <span style={{ fontSize: "1.5em" }}>
                <b>Ingrediants:</b>
              </span>
              <br />
              <br />
              <br />
              <p style={{ fontSize: "1.2em" }}>
                i am a huge fan of indo chinese recipes and i make it often for
                my evening snacks. particularly the combination of manchurian
                with a stir fry noodles or rice is my personal favourite.
                however my husband is a huge fan of simple noodles without much
                fancy sauce and spices in it.
                <br />
                <br />
                hence i have to make it frequently for his daily lunch box. he
                likes it to be soupy with more water in it, similar to noodle
                soup. i like it to be spicy with a topping of schezwan sauce on
                it. so once the noodles are made, i make 2 portions and proceed
                further with my required toppings and sauce as per my
                preference. i would also recommend you guys to try with any
                choice of manchurian dish with noodles or fried rice.
              </p>
              <br />
              <br />
              <span style={{ fontSize: "1.5em" }}>
                <b>How to Prepare:</b>
              </span>
              <br />
              <br />
              <p style={{ fontSize: "1.2em" }}>
                anyway, i would like to conclude the post with some tips,
                suggestions, variations for a perfect veg noodles recipe.
                firstly, i have used long shelf dry noodles in this recipe. you
                can also use any store-bought noodles, and also pan ready
                noodles.
                <br />
                <br />
                but you may need to was the pan ready noodles thoroughly before
                it is used. secondly, when it comes to adding vegetables, it is
                completely open-ended. you can add any choice of veggies on it
                and stir fry with it. lastly, once the boiled or pan ready
                noodles are added to pan, do not overcook them. otherwise it may
                get mushy and start breaking.
              </p>
              <br />
            </div>
          </li>

          <li>
            <div style={{ textAlign: "right" }}>
              <span>Recipe</span>
              <br /> <br />
              <span>
                <h2>{this.state.name}</h2>
              </span>
              <br />
              <span>
                <span
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "3px",
                  }}
                >
                  <b>4.1</b>
                </span>
                &nbsp;&nbsp;
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <br />
              <br />
              <span>Overview</span>
            </div>
            <br />
            <br />
            <p style={{ fontSize: "1.2em" }}>
              you may need to was the pan ready noodles thoroughly before it is
              used. secondly, when it comes to adding vegetables, it is
              completely open-ended. you can add any choice of veggies on it and
              stir fry with it. lastly, once the boiled or pan ready noodles are
              added to pan, do not overcook them. otherwise it may get mushy and
              start breaking.
            </p>
            <br />
            <br />
            <div className="maincircle">
              <div className="circle">
                8 <br /> points
              </div>
              <div className="circle">
                220
                <br /> points
              </div>
              <div className="circle">
                25
                <br /> points
              </div>
            </div>
            <br />
            <br />
            <span style={{ fontSize: "1.2em" }}>
              <b>FAVOURITE THIS RECIPE</b> &nbsp;{" "}
              <img src="/icons/cheart.png" alt="icon" />
            </span>
            <br />
            <br />
            <hr />
            <br />
            <div>ADD COMMENT</div>
            <br />
            <br />
            <div>
              <textarea
                style={{
                  width: "90%",
                  height: "250px",
                  border: "none",
                  borderRadius: "20px",
                  outline: "none",
                  textAlign: "start",
                  padding: "10px",
                }}
                placeholder="Enter your comment ......"
              ></textarea>
              <br />
              <br />
              <div
                style={{
                  padding: "10px",
                  textAlign: "center",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <b> ADD COMMENT</b>
              </div>
            </div>
          </li>
        </ul>
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center", color: "gray" }}>
          <h2>YOUR FOOD TASTES YUMMY</h2>
        </div>
      </div>
    );
  }
}
export default Aboutitem;
