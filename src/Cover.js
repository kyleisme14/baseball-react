import React, { Component } from "react";
import './Cover.css';

const team = {
	name: 'Dodgers',
	city: 'Los Angeles'
}

const teamList = [
	{
    name: 'Dodgers',
    city: 'Los Angeles',
    image: 'https://picsum.photos/300/300/?random[1]'
  },
  {
    name: 'Yankees',
    city: 'NYC',
    image: 'https://picsum.photos/300/300/?random[2]'
  },
  {
    name: 'Mets',
    city: 'NYC',
    image: 'https://picsum.photos/300/300/?random[3]'
  },
  {
    name: 'Rockies ',
    city: 'Denver',
    image: 'https://picsum.photos/300/300/?random[4]'
  },
  {
    name: 'Red Sox',
    city: 'Boston',
    image: 'https://picsum.photos/300/300/?random[5]'
  },
  {
    name: 'Astros',
    city: 'Houston',
    image: 'https://picsum.photos/300/300/?random[6]'
  },
]

const displayTeamList = teamList.map((c, idx) => {
	return(
      <div title="image55" >
          <div>
            <div id="child">
              <div>
                <figure>
                  <img 
                    src={c.image}
                    alt="Description"
                  />
                </figure>
              </div>
              <div>
                <h1>
                  <h1 key={idx}>{c.name} {c.city}</h1>
                  </h1>
                <h2>

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
        <div id="container">
        {displayTeamList}
        </div> 
      </section>
    );
  }
}

export default Cover;
