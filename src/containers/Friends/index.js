import React from 'react'
import SearchBar from '../../components/SearchBar'
import FriendsTable from '../../components/FriendsTable'

export default class Friends extends React.Component{
    constructor(){
        super();
        this.state = {
            filterText: ''
        };
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({filterText: e.target.value})
    }
    render(){
        let friends = [
            {name: 'Vlad', surname: 'Kiryanov', isBestFriend: true},
            {name: 'Dima', surname: 'Kudimets', isBestFriend: false},
            {name: 'Egor', surname: 'Ischenko', isBestFriend: true},
            {name: 'Nazar', surname: 'Melnyik', isBestFriend: true}
        ];
        return (
            <div>
                <SearchBar  filterText={this.state.filterText}
                             update={this.update}/>
                <FriendsTable friends={friends}  filterText={this.state.filterText}
                              />
            </div>
        );
    }
}

