import React, { Component } from "react";
import './Forum.css';

// component
import Article from './Article';

const comment = {
	message: 'BASEBALL IS MY FAVORITE SPORT!',
	author: '@theodore'
}

const commentList = [
	{
		message: 'i love bball',
		author: '@stephcurry'
	},
	{
		message: 'what are those????',
		author: '@mike'
	},
	{
		message: 'sup?',
		author: '@allison'
	},
	{
		message: 'argh it be like that',
		author: '@piratedude'
	},
	{
		message: 'football!',
		author: '@tombrady'
	},
]

const displayCommentList = commentList.map((c, idx) => {
	return (
	  <Article key={idx} index={idx} message={c.message} person={c.author} />
	);
  });

class Forum extends Component {
  render() {
    return (
		<div>
		
		  <section className="container">
			<div className="columns">
			  <div className="column is-3">
				<a
				  className="button is-primary is-block is-alt is-large"
				  href="#"
				>
				  New Post
				</a>
				<aside className="menu">
				  <p className="menu-label">Tags</p>
				  <ul className="menu-list">
					<li>
					  <span className="tag is-primary is-medium ">Dashboard</span>
					</li>
					<li>
					  <span className="tag is-link is-medium ">Customers</span>
					</li>
					<li>
					  <span className="tag is-light is-danger is-medium ">
						Authentication
					  </span>
					</li>
					<li>
					  <span className="tag is-dark is-medium ">Payments</span>
					</li>
					<li>
					  <span className="tag is-success is-medium ">Transfers</span>
					</li>
					<li>
					  <span className="tag is-warning is-medium ">Balance</span>
					</li>
					<li>
					  <span className="tag is-medium " title="question">Question</span>
					</li>
				  </ul>
				</aside>
			  </div>
			  <div className="column is-9">
				<div className="box content">
					<Article index={99} message={comment.message} person={comment.author} />
				  <article className="post">
					<h4>{this.props.number}</h4>
					<div className="media">
					  <div className="media-left">
						<p className="image is-32x32">
						  <img
							src="http://bulma.io/images/placeholders/128x128.png"
							alt=""
						  />
						</p>
					  </div>
					  <div className="media-content">
						<div className="content">
						  <p>
							<a href="#">{comment.author}</a> replied 34 minutes
							ago &nbsp;
							<span className="tag">Question</span>
						  </p>
						</div>
					  </div>
					  <div className="media-right">
						<span className="has-text-grey-light">
						  <i className="fa fa-comments"></i> 1
						</span>
					  </div>
					</div>
				  </article>
				  <article className="post">
					<h4>How can I make a bulma button go full width?</h4>
					<div className="media">
					  <div className="media-left">
						<p className="image is-32x32">
						  <img
							src="http://bulma.io/images/placeholders/128x128.png"
							alt=""
						  />
						</p>
					  </div>
					  <div className="media-content">
						<div className="content">
						  <p>
							<a href="#">@red</a> replied 40 minutes ago &nbsp;
							<span className="tag">Question</span>
						  </p>
						</div>
					  </div>
					  <div className="media-right">
						<span className="has-text-grey-light">
						  <i className="fa fa-comments"></i> 0
						</span>
					  </div>
					</div>
				  </article>
				  <article className="post">
					<h4>
					  TypeError: Data must be a string or a buffer when trying
					  touse vue-bulma-tabs
					</h4>
					<div className="media">
					  <div className="media-left">
						<p className="image is-32x32">
						  <img
							src="http://bulma.io/images/placeholders/128x128.png"
							alt=""
						  />
						</p>
					  </div>
					  <div className="media-content">
						<div className="content">
						  <p>
							<a href="#">@jsmith</a> replied 53 minutes ago &nbsp;
							<span className="tag">Question</span>
						  </p>
						</div>
					  </div>
					  <div className="media-right">
						<span className="has-text-grey-light">
						  <i className="fa fa-comments"></i> 13
						</span>
					  </div>
					</div>
				  </article>
				  <article className="post">
					<h4>How to vertically center elements in Bulma?</h4>
					<div className="media">
					  <div className="media-left">
						<p className="image is-32x32">
						  <img
							src="http://bulma.io/images/placeholders/128x128.png"
							alt=""
						  />
						</p>
					  </div>
					  <div className="media-content">
						<div className="content">
						  <p>
							<a href="#">@brown</a> replied 3 hours ago &nbsp;
							<span className="tag">Question</span>
						  </p>
						</div>
					  </div>
					  <div className="media-right">
						<span className="has-text-grey-light">
						  <i className="fa fa-comments"></i> 2
						</span>
					  </div>
					</div>
				  </article>
				  <article className="post">
					<h4>
					  I'm trying to use hamburger menu on bulma css, but it
					  doesn't work. What is wrong?
					</h4>
					<div className="media">
					  <div className="media-left">
						<p className="image is-32x32">
						  <img
							src="http://bulma.io/images/placeholders/128x128.png"
							alt=""
						  />
						</p>
					  </div>
					  <div className="media-content">
						<div className="content">
						  <p>
							<a href="#">@hamburgler</a> replied 5 hours ago &nbsp;
							<span className="tag">Question</span>
						  </p>
						</div>
					  </div>
					  <div className="media-right">
						<span className="has-text-grey-light">
						  <i className="fa fa-comments"></i> 2
						</span>
					  </div>
					</div>
				  </article>
				  <article className="post">
					<h4>How to make tiles wrap with Bulma CSS?</h4>
					<div className="media">
					  <div className="media-left">
						<p className="image is-32x32">
						  <img
							src="http://bulma.io/images/placeholders/128x128.png"
							alt=""
						  />
						</p>
					  </div>
					  <div className="media-content">
						<div className="content">
						  <p>
							<a href="#">@rapper</a> replied 3 hours ago &nbsp;
							<span className="tag">Question</span>
						  </p>
						</div>
					  </div>
					  <div className="media-right">
						<span className="has-text-grey-light">
						  <i className="fa fa-comments"></i> 2
						</span>
					  </div>
					</div>
				  </article>
				  {displayCommentList}
				</div>
			  </div>
			</div>
		  </section>
		  <footer className="footer">
			<div className="container">
			  <div className="content has-text-centered">
				<div className="columns is-mobile is-centered">
				  <div className="field is-grouped is-grouped-multiline">
					<div className="control">
					  <div className="tags has-addons">
						<a
						  className="tag is-link"
						  href="https://github.com/BulmaTemplates/bulma-templates"
						>
						  Bulma Templates
						</a>
						<span className="tag is-light">Daniel Supernault</span>
					  </div>
					</div>
					<div className="control">
					  <div className="tags has-addons">
						<a className="tag is-link">The source code is licensed</a>
						<span className="tag is-light">
						  MIT &nbsp;<i className="fa fa-github"></i>
						</span>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </footer>
		</div>
	  );
	}
  }

export default Forum;
