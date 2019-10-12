import React, { Component } from 'react'
import {Pagination} from 'react-bootstrap'

export default class PaginationComponent extends Component {
    constructor(props){
        super(props)
        this.pageChanged = this.pageChanged.bind(this);
    }

    pageChanged(e){
        console.log(1)
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
            if(currentPage >= 3) _pages.push(<Pagination.Ellipsis disabled />)
            if(currentPage >= 2) _pages.push(<Pagination.Item>{currentPage - 2}</Pagination.Item>)
            if(currentPage > 1) _pages.push(<Pagination.Item>{currentPage - 1}</Pagination.Item>)
            _pages.push(<Pagination.Item active>{currentPage}</Pagination.Item>)
            if(currentPage < numPages - 2) _pages.push(<Pagination.Item>{currentPage + 1}</Pagination.Item>)
            if(currentPage < numPages - 1) _pages.push(<Pagination.Item>{currentPage + 2}</Pagination.Item>)
            if(currentPage < numPages - 3) _pages.push(<Pagination.Ellipsis disabled />)

            pagination = (
            <Pagination style={{marignBottom: 0}}>
                <Pagination.First disabled={currentPage === 1}/>
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