import React from 'react';

export default class AutoCompleteTextBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestedBooksArray: null,
            allBooks: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:3004/api/v1/books')
            .then(books => {
                if (books.ok) {
                    return books.json();
                }
            })
            .then(jsonBooks => {
                this.setState({
                    allBooks: jsonBooks
                });
            }).catch(e => console.log(e));
    };

    textChangeHandler = (event) => {
        const { allBooks } = this.state;
        let textValue = event.target.value;
        let newBooksArray = [];
        if (textValue.length > 0) {
            const regex = new RegExp(`${textValue}`, 'i');
            allBooks.filter(book => {
                let selectedBooks = regex.test(book.name);
                if (selectedBooks) {
                    newBooksArray.push(book)
                    return this.setState({
                        suggestedBooksArray: newBooksArray
                    })
                }
                return newBooksArray;
            });
        }
        else {
            this.setState({
                suggestedBooksArray: allBooks
            })
        }
    }

    render() {
        const { allBooks, suggestedBooksArray } = this.state;
        let books = <img alt="loading" src="https://thumbs.gfycat.com/UniformDiscreteKissingbug-max-1mb.gif" />

        if (suggestedBooksArray) {
            books = suggestedBooksArray.map(book => {
                return (
                    <li key={book.id.toString()}>
                        <header>
                            <h2>{book.name}</h2>
                        </header>
                        <article>
                            <h3>{book.author || 'NA'}</h3>
                            <h4>{book.series || 'NA'}</h4>
                        </article>
                    </li>
                )
            })
        }

        else if (allBooks) {
            books = allBooks.map(book => {
                return (
                    <li key={book.id.toString()}>
                        <header>
                            <h2>{book.name}</h2>
                        </header>
                        <article>
                            <h3>{book.author || 'NA'}</h3>
                            <h4>{book.series || 'NA'}</h4>
                        </article>
                    </li>
                )
            })
        }

        return (
            <div className="container">
                <div className="sub-banner">
                    <input onChange={this.textChangeHandler} type="text" placeholde="search for books" />
                </div>
                <ul>
                    {books}
                </ul>
            </div>
        );
    }
};
