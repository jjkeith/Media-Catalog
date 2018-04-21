import React from 'react';
import classnames from 'classnames'
import films from './data';
import Moment from 'moment';
import { Button, ButtonGroup, Col, Image, Label, Modal, Panel, ResponsiveEmbed, Row } from 'react-bootstrap';


let filmsToDisplay = films;

class Cards extends React.Component {
  constructor( props, context ) {
    super( props, context );
    
    this.handleShowModal = this.handleShowModal.bind( this );
    this.handleCloseModal = this.handleCloseModal.bind( this );
    // this.renderCard = this.renderCard.bind( this );

    this.state = {
      showModal: false,
      currentFilm: {}
    };
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal( film ) {
    this.setState({ 
      showModal: true,
      currentFilm: film
    });
  }


  handleFilter( filterVal ) {
    if ( filterVal == null ) {
      return this.setState( filmsToDisplay = films );
    }
    return this.setState( filmsToDisplay = films.filter( film => film.universe === filterVal ));
  }

  // TODO Could be made more versatile/dry with lodash
  handleSort( sortProp ) {
    return this.setState( filmsToDisplay.sort(( a, b ) => {
      if ( sortProp === 'title' ) {
        return a.title < b.title ? -1 : 1;
      }
      if ( sortProp === 'released') {
        return Moment( a.released ) < Moment( b.released ) ? -1 : 1;
      }
      return filmsToDisplay;
    }))
  }

  renderCard( film, index ) {
    const
      universeClass = classnames({
        'mod-marvel': film.universe === 'marvel',
        'mod-starwars': film.universe === 'starwars'
      }),
      labelText = ( film.universe === 'starwars' && 'Star Wars' ) || ( film.universe === 'marvel' && 'Marvel ') || null;

    return (
      <Col  xs={ 12 } sm={ 6 } lg={ 3 } key={ index }>
        <Panel>
          <Panel.Heading>
            <h4 className="panel-title"><i>{ film.title }</i></h4>
          </Panel.Heading>
          <div className="panel-img-wrapper">
            <Image className="panel-image" src={ film.poster } alt={`${ film.title } poster`} />
          </div>
          <Panel.Body>
            <div className="text-muted">{ film.released }&emsp;
              <Label className={ universeClass }>{ labelText }</Label>
            </div>
            <Button className="panel-btn" onClick={ () => this.handleShowModal( film )}>View Trailer</Button>
          </Panel.Body>
        </Panel>
      </Col>
    );
  }

  renderModal( currentFilm ) {
    return (
      <Modal show={ this.state.showModal } onHide={ this.handleCloseModal } bsSize="lg">
        <Modal.Header closeButton>
          <Modal.Title>{ currentFilm.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveEmbed a16by9>
            <iframe
            src={`https://www.youtube.com/embed/${ currentFilm.trailerID }`}
            title={ currentFilm.title }
            />
          </ResponsiveEmbed>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ this.state.handleCloseModal }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  render() {
    return (
      <Row>
        <Col componentClass='aside' className="sticky-top" sm={ 2 } md={ 4 } lg={ 2 }>
          <p className="filter-options">Filter by:</p>
          <ButtonGroup vertical block>
            <Button className="mod-filter" onClick={ () => this.handleFilter( 'starwars' ) }>
              Star Wars
            </Button>
            <Button className="mod-filter" onClick={ () => this.handleFilter( 'marvel' ) }>
              Marvel
            </Button>
            <Button className="mod-filter" onClick={ () => this.handleFilter( null ) }>
              Show All
            </Button>
          </ButtonGroup>
          <p className="sort-options">Sort by:</p>
          <ButtonGroup vertical block>
            <Button className="mod-sort" onClick={ () => this.handleSort( 'released' ) }>
              Release Date
            </Button>
            <Button className="mod-sort" onClick={ () => this.handleSort( 'title' ) }>
              A &ndash; Z
            </Button>
          </ButtonGroup>
        </Col>

        <Col componentClass='section' sm={ 10 } md={ 8 } lg={ 10 }>
          <Row>
            { filmsToDisplay.map(( film, index ) => ( this.renderCard( film, index ) ))}
          </Row>
        </Col>
        { this.renderModal( this.state.currentFilm ) }
      </Row>
    );
  }
}

Cards.propTypes = {

};


export default Cards;
