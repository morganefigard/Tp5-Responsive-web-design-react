import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Album extends Component {
  render() {
    return (
      <Col lg="2" md="3" sm="6" xs="6">
        <article>
          <figure>
            <img src={this.props.image} alt="album" />
            <figcaption>{this.props.nom}</figcaption>
          </figure>
          <div class="artist">{this.props.artist}</div>
          <div class="count">{this.props.song} songs</div>
        </article>
      </Col>
    );
  }
}
