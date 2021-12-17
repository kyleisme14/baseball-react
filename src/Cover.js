import React, { Component } from "react";
import './Login.css';

const team = {
	name: 'Dodgers',
	city: 'Los Angeles'
}

const teamList = [
	{
    name: 'Yankees',
    city: 'NYC'
  },
  {
    name: 'Mets',
    city: 'NYC'
  },
  {
    name: 'Rockies ',
    city: 'Denver'
  },
  {
    name: 'Red Sox',
    city: 'Boston'
  },
  {
    name: 'Astros',
    city: 'Houston'
  },
	
]

const displayTeamList = teamList.map((c, idx) => {
	return(
      <div id="child"  title="image55" className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img 
                    src="https://picsum.photos/300/300/?random"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">
                  <h1 id="Container" key={idx}>{c.name} {c.city}</h1>
                  </h1>
                <h2 className="subtitle is-4">

                   </h2>
                <br />
                <p className="has-text-centered">
                  <a className="button is-medium is-info is-outlined">

                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
			)
		})


class Cover extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <div>
        {displayTeamList}
        </div>
        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li>
                  <a>And this is the bottom</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;
