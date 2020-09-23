import React from "react";
import "./app.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchResults: [
				{
					name: "Skinny Love",
					artist: "Bon Iver",
					album: "For Emma, Forever Ago",
					id: 1,
				},
				{
					name: "Hero",
					artist: "Family of the Year",
					album: "The Hero",
					id: 2,
				},
				{
					name: "Skinny Love",
					artist: "Bon Iver",
					album: "For Emma, Forever Ago",
					id: 3,
				},
			],

			playlistName: "Best of 2020!",

			playlistTracks: [
				{
					name: "playlistName1",
					artist: "playlistArtist1 ",
					album: "playlistAlbum1",
					id: 4,
				},
				{
					name: "playlistName2",
					artist: "playlistArtist2 ",
					album: "playlistAlbum2",
					id: 5,
				},
				{
					name: "playlistName3",
					artist: "playlistArtist3 ",
					album: "playlistAlbum3",
					id: 6,
				},
			],
		};
		this.addTrack = this.addTrack.bind(this);
	}

	addTrack(track) {
		for (let i = 0; i < this.state.playlistTracks.length; i++) {
			if (this.state.playlistTracks.id === track.id) {
				return;
			}
		}
		this.setState({ playlistTracks: [this.state.playlistTracks, track] });
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar />
					<div className="App-playlist">
						<SearchResults
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}
						/>
						<Playlist
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
