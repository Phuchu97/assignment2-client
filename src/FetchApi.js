const urlApi = 'http://127.0.0.1:4000'

export function loginPage(callback, data) {
    fetch(`${urlApi}/login`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function registerAccount(callback, data) {
    fetch(`${urlApi}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}


export function searchHotel(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}


export function getHotels(callback) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/hotels`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(callback);
}

export function getHotelDetail(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/hotels/hotel-detail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}


export function getRoomWithHotelId(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/rooms/check-hotel`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function checkDateRoom(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/rooms/filter-date-room`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}


export function createTransaction(callback, data) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/transactions/transaction-add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(callback);
}

export function getTransaction(callback) {
    const token = localStorage.getItem('token');
    fetch(`${urlApi}/transactions-list`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then(res => res.json())
      .then(callback);
}




 
