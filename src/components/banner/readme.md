# folder is a package
* image files must be stored in a variables.js object.
** vars {
    indexBanner: "file.jpg",
}
* Pass that object var that contains the path to banner.js. banner={variables.indesBanner}

* banner.js passes that to bannerQuery
    banner={this.state.banner}