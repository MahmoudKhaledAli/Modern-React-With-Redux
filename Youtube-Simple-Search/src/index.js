import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';

const API_KEY = 'xxxxx'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        this.searchAndUpdate('surfboards');
    }

    searchAndUpdate(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState(
                {
                    videos: videos,
                    selectedVideo: videos[0]
                }
            );
        });
    }

    render() {
        const videoSearch = _.debounce(term => this.searchAndUpdate(term), 300);

        return (
            <div>
                <SearchBar 
                    onTermChange={(term) => videoSearch(term)}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    videos={this.state.videos}
                    onSelectVideo={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));