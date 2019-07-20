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
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <h2>Government Authorized Agent</h2>
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
