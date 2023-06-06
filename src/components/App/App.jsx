import { Component } from "react";
import style from './App.module.css';
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";




export class App extends Component {
  state={
    searchName: '',
  }
  getName = name => {
    this.setState({ searchName: name });
  };

  render() {
    const { searchName } = this.state;

    return (
      <div className={style.App}>
        <Searchbar getName={this.getName}/>
        <ImageGallery name={searchName}/>
      </div>
    )
  }
}