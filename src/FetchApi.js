const token = '8qlOkxz4wq';
const urlApi = 'http://localhost:4000'
const getMethod = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
    }
}

export function loginPage(callback, data) {
    fetch(`${urlApi}/login`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function registerAccount(callback, data) {
    fetch(`${urlApi}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function getHotels(callback) {
    fetch(`${urlApi}/hotels`, getMethod)
      .then(res => res.json())
      .then(callback);
}

export function getHotelDetail(callback, data) {
    fetch(`${urlApi}/hotels/hotel-detail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}


export function getRoomWithHotelId(callback, data) {
    fetch(`${urlApi}/rooms/check-hotel`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function checkDateRoom(callback, data) {
    fetch(`${urlApi}/rooms/filter-date-room`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}


export function createTransaction(callback, data) {
    fetch(`${urlApi}/transactions/transaction-add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function getTransaction(callback) {
    fetch(`${urlApi}/transactions-list`, getMethod)
      .then(res => res.json())
      .then(callback);
}




 
