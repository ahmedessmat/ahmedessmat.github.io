/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image1 from "assets/img/dominica.jpg";
import image2 from "assets/img/kitts.jpg";
import image3 from "assets/img/grenada.jpg";
import image4 from "assets/img/antigua.png";
import image5 from "assets/img/turkey.png";

class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h2>Typography</h2>
            </div>
            <GridContainer>
              <div className={classes.typo}>
                <div className={classes.note}>Header 1</div>
                <h1>The Life of Material Kit</h1>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 2</div>
                <h2>The Life of Material Kit</h2>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 3</div>
                <h3>The Life of Material Kit</h3>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 4</div>
                <h4>The Life of Material Kit</h4>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 5</div>
                <h5>The Life of Material Kit</h5>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 6</div>
                <h6>The Life of Material Kit</h6>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 1</div>
                <h1 className={classes.title}>The Life of Material Kit</h1>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 2</div>
                <h2 className={classes.title}>The Life of Material Kit</h2>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 3</div>
                <h3 className={classes.title}>The Life of Material Kit</h3>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 4</div>
                <h4 className={classes.title}>The Life of Material Kit</h4>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Paragraph</div>
                <p>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers. I understand
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
                  the level that things could be at.
                </p>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Quote</div>
                <Quote
                  text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                  author=" Kanye West, Musician"
                />
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Muted Text</div>
                <Muted>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Muted>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Primary Text</div>
                <Primary>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Primary>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Info Text</div>
                <Info>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Info>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Success Text</div>
                <Success>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Success>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Warning Text</div>
                <Warning>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Warning>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Danger Text</div>
                <Danger>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </Danger>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Small Tag</div>
                <h2>
                  Header with small subtitle
                  <br />
                  <Small>Use {'"Small"'} tag for the headers</Small>
                </h2>
              </div>
            </GridContainer>
          </div>
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h2>Images</h2>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <h4>Dominica</h4>
                <img
                  src={image1}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>St.Kitts and Nevis</h4>
                <img
                  src={image2}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Grenada</h4>
                <img
                  src={image3}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Antigua and Barbuda</h4>
                <img
                  src={image4}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
                <h4>Turkey</h4>
                <img
                  src={image5}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
              </GridItem>
            </GridContainer>
            <GridContainer />
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

SectionTypography.propTypes = {
  classes: PropTypes.object
};

export default withStyles(typographyStyle)(SectionTypography);
