import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "LED",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-iCR2C-HqT9_C-5oCAIKP5SCp96DnEBy4phzHasihm2CcT7o9g",
          id: 1,
          linkUrl: "led"
        },
        {
          title: "SPEAKERS",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0332/7761/products/Speaker_Angles_Pair_1024x1024.jpg?v=1527069293",
          id: 2,
          linkUrl: ""
        },
        {
          title: "RADIO",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71b%2BcUSxnRL._SX679_.jpg",
          id: 3,
          linkUrl: ""
        },
        {
          title: "MOBILE-PHONE ACESSORIES",
          imageUrl:
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.jNbjW78f3I/v0/1200x800.jpg",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "HEADPHONES",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85E8fi8Laa0kTHKHBo598Wavw8soBPFTXXfUvow3uD7fkOKPm",
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSection }) => (
          <MenuItem key={id} {...otherSection}/>
        ))}
      </div>
    );
  }
}

export default Directory;
