import React from 'react';

function FaunaDb(props) {
    console.log(props)

    return (
        <>
            {props.items.map((item) => {
                return (
                    <>
                        {item.data.firstName} {item.data.lastName}
                        <br/>
                    </>
                )
            })}
        </>
    )
}

FaunaDb.getInitialProps = async function () {
    var faunadb = require('faunadb'), q = faunadb.query;
    var client = new faunadb.Client({ secret: 'fnADY--lfCACCxSGdYfaJx1y1oYkHN-qnByaufOy'})

    var helper = client.paginate(
        q.Match(
            q.Index('all_customers')
        )
    )

    let items = [];
    await helper.map(function(ref) { return q.Get(ref); }).each(function(page) {
        page.map((item) => {
            items.push(item);
        })
    });

    return {
        items: items
    }
}

export default FaunaDb;