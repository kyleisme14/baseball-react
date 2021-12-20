


<h1> Installation Instructions </h1>
<ol>
    <li> Fork and clone the repository</li>
    <li> CD into premiere-league </li>
    <li> Run NPM Install </li>
    <li> Run NPM start </li>
</ol>

<h1>Components </h1>

 - Cover 

 thumbnails of each
![image](./public/covercomponent.png)

```
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
```


 - FavoriteTeam 

![image](./public/favoriteteamcomponent.png)

code snippet 
```
const displayPlayerList = playerList.map((c, idx) => {
	return(
			<h3 key={idx}>{c.name}{c.number}{c.position}</h3>
			)
		})
```

 - Login
 - Forum
 - Contact