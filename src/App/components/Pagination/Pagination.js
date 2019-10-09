import React, { Component } from 'react'
import {Pagination} from 'react-bootstrap'

export default class PaginationComponent extends Component {
    

    controllers = () => {
        if(this.props.pages === 1){
            return <Pagination>{this.pages()}</Pagination>
        }else{
            return (
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {this.pages()}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            )
        }
    }

    render() {
        let numPages = this.props.pages
        let currentPage = this.props.currentPage
        let _pages = []
        let pagination = []

        if(numPages <= 6){
            for(let i = 1; i <= numPages; i++){
                _pages.push(<Pagination.Item active={currentPage === i}>{i}</Pagination.Item>)
            }
            pagination = <Pagination>{_pages}</Pagination>
        }else{
            if(currentPage >= 3) _pages.push(<Pagination.Ellipsis />)
            if(currentPage >= 2) _pages.push(<Pagination.Item>{currentPage - 2}</Pagination.Item>)
            if(currentPage > 1) _pages.push(<Pagination.Item>{currentPage - 1}</Pagination.Item>)
            _pages.push(<Pagination.Item active>{currentPage}</Pagination.Item>)
            if(currentPage < numPages - 2) _pages.push(<Pagination.Item>{currentPage + 1}</Pagination.Item>)
            if(currentPage < numPages - 1) _pages.push(<Pagination.Item>{currentPage + 2}</Pagination.Item>)
            if(currentPage < numPages - 3) _pages.push(<Pagination.Ellipsis />)

            pagination = (
            <Pagination>
                <Pagination.First disabled={currentPage === 1} />
                <Pagination.Prev disabled={currentPage === 1}/>
                {_pages}
                <Pagination.Next disabled={currentPage === numPages} />
                <Pagination.Last disabled={currentPage === numPages} />
            </Pagination>
            )
        }

        return pagination
    }
}