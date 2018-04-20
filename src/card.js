import React from 'react';

export default function Card({ data }) {
  return (
    <div className="row">
      { data.map( film => (
          <div className="col-lg-3 col-md-6 col-sm-1">
            <div className="card">
              <h4 className="card-header">{film.title}</h4>
              <img className="card-img-top img-responsive" src={film.poster} alt={`${ film.title } poster`}/>
              <div className="card-body">
                <p className="card-footer text-muted">{film.released}</p>
                <a className="btn btn-danger" href={`/${ film.id }`}>View Trailer</a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
