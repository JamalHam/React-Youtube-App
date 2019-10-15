import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], SelectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('Jello');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            SelectedVideo: response.data.items[0] 
        })
    };

    onVideoSelect = (video) => {
        this.setState({ SelectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    
                        <div className="ten wide column">
                            <VideoDetail video={this.state.SelectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            
                    </div>
                </div>
            </div>
        )
    }
}

export default App;