import React from 'react';
import Input from '../inputs/input';
import debounce from '../../utils/debounce';
import SearchSelection from './search_selection';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = debounce(e => {
      const selectionIds = this.props.selections.map(selection => {
        return selection.id
      })
      this.props.search(e.target.value, selectionIds);
    }, 400);
  }

  createSelectionComponents() {
    const selections = this.props.selections;
    return selections.map(selection => {
      return (
        <SearchSelection 
          key={selection.id}
          name={selection.name}
          remove={() => this.props.removeSelection(selection.id)}
        />
      )
    })
  }

  render() {
    const selectionComponents = this.createSelectionComponents();

    return (
      <Input
        id='search-bar'
        type='text'
        label={
          <>
            <span key='search-label'>To</span>
            { selectionComponents }
          </>
        }
        className='search-bar'
        onChange={this.search}
        placeholder={'Name or username'}
        onFocus={e => {
          const inputContainer = e.target.parentElement;
          inputContainer.classList.add('search-bar-focus');
        }}
        onBlur={e => {
          const inputContainer = e.target.parentElement;
          inputContainer.classList.remove('search-bar-focus');
        }}
      />
    );
  }
}