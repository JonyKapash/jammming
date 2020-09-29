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
					name: "Titanic",
					artist: "Celin Dion",
					album: "Hymn to the Sea",
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
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
	}

	addTrack(track) {
		let tracks = this.state.playlistTracks;
		for (let i = 0; i < tracks.length; i++) {
			if (tracks[i].id === track.id) {
				return;
			}
		}
		this.setState({ tracks: tracks.push(track) });
	}

	removeTrack(track) {
		this.setState({
			playlistTracks: this.state.playlistTracks.filter((trk) => {
				return trk.id !== track.id;
			}),
		});
	}

	updatePlaylistName(name) {
		this.setState({ playlistName: name });
	}

	savePlaylist() {
		const trackURIs = this.state.playlistTracks.map((track) => track.uri);
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
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
