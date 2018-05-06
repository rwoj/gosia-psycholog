import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Napis = ({ text }) => <div className="place">{text}</div>;

class Mapa extends Component {
  static defaultProps = {
    center: {
      lat: 52.248934,
      lng: 20.855364
    },
    zoom: 13
  };
  render ()  {
    return (
      <div className="mapa" style={{height: '50vh', width: '50%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbb5UUEvJrq2n6So6PnR4_MKPyQwgZjjA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Napis
            lat={52.248934}
            lng={20.855364}
            text={'Gabinet'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Mapa