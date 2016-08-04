modules.define('carousel', [ 'react', 'reactSlick', 'classnames' ], (provide, React, ReactSlick, classnames) => {

  class Carousel extends React.Component {

    render () {

      let className = classnames(`${this.props.className}`);

      let settings = {
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        dotsClass: `${this.props.className}__dots`,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

      return (
        <ReactSlick {...settings} className={className}>
          <div className={classnames(`${this.props.className}__slide`, `${this.props.className}__slide_n_0`)}></div>
          <div className={classnames(`${this.props.className}__slide`, `${this.props.className}__slide_n_1`)}></div>
          <div className={classnames(`${this.props.className}__slide`, `${this.props.className}__slide_n_2`)}></div>
        </ReactSlick>
      );

    }

  }

  Carousel.defaultProps = {
    className: 'carousel'
  };

  provide(Carousel);

});