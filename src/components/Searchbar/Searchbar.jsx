import { Component } from 'react';
import { FcSearch } from "react-icons/fc";
import style from './Searchbar.module.css';


export class Searchbar extends Component {
  state={
    searchName: '',
  }
  handleName=(event)=>{
    const { value } = event.target;
    this.setState({ searchName: value });
  }

  handleSubmitEvent=(event)=> {
    const { searchName } = this.state;
    event.preventDefault();
    this.props.getName(searchName);
    console.log(event.target[1].value)
  }

	render() {
    const { searchName } = this.state;
		return (
      <header className={style.searchbar}>
        <form className={style.searchForm} onSubmit={this.handleSubmitEvent}>
          <button type="submit" className={style['searchForm-button']} disabled={searchName.length === 0}>
						<FcSearch className={style["button-icon"]}/>
          </button>

          <input
            className={style['searchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            value={searchName}
            onChange={this.handleName}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
	}
}

