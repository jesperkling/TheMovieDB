import React from 'react'
import Button from 'react-bootstrap/Button'

const Pagination = ({ page, numPages, hasPrevPage, onPrevPage, hasNextPage, onNextPage}) => {
    return (
        <div className='d-flex justify-content-between align-items-center m-3'>
            <div>
                <Button 
                    variant="primary" 
                    onClick={onPrevPage}
                    disabled={!hasPrevPage}
                >
                    Back
                </Button>
            </div>

            <div> Page {page} / {numPages}</div>

            <div>
                <Button 
                    variant="primary" 
                    onClick={onNextPage}
                    disabled={!hasNextPage}
                >
                    Next
                </Button>
            </div>
        </div>
    )    
}

export default Pagination