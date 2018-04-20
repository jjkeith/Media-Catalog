import React from 'react';
import films from './data';

let filmsToDisplay = films.sort(( film ) => film.release );

class Cards extends React.Component {

  handleFilter( filterProp ) {
    return filmsToDisplay = films || films.filter( film => film.universe === filterProp )
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-2 col-med-12">
          <p>Filter by:</p>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-info active" onClick={ this.handleFilter( 'starwars' ) }>
              <input type="radio" name="filters" id="filter1" autocomplete="off" checked/>Star Wars
            </label>
            <label className="btn btn-info active" onClick={ this.handleFilter( 'marvel' ) }>
              <input type="radio" name="filters" id="filter2" autocomplete="off"/>Marvel
            </label>
          </div>

          <p>Sort by:</p>
          <button className="btn btn-info">Release Date</button>
          <button className="btn btn-info">A-Z</button>
        </div>
        <div className="col-lg-10 col-md-12">
          <div className="row">
            {filmsToDisplay.map( film => (
                <div className="col-lg-3 col-md-6 col-sm-1">
                  <div className="card">
                    <h4 className="card-header"><i>{ film.title }</i></h4>
                    <img className="card-img-top img-responsive" src={film.poster} alt={`${ film.title } poster`}/>
                    <div className="card-body">
                      <div className="card-footer text-muted">{ film.released }</div>
                      <a className="card-btn btn btn-info" href={`/${ film.id }`}>View Trailer</a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      );
  }
}

export default Cards;
