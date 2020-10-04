import React from "react";
import "./app.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchResults: [],

			playlistName: "New playlist",

			playlistTracks: [],
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
		this.search = this.search.bind(this);
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
		const trackUris = this.state.playlistTracks.map((track) => track.uri);
		Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
			this.setState({
				playlistName: "New playlist",
				playlistTracks: [],
			});
		});
	}

	search(term) {
		Spotify.search(term).then((searchResults) => {
			this.setState({ searchResults: searchResults });
		});
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar onSearch={this.search} />
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
