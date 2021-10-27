import React, { useState, useEffect, useCallback } from 'react'
import List from './List'
import Alert from './Alert'


const initialState = {
    productName: '',
    list: [],
    edit: false,
    itemToUpdate: null,
    alert: { show: false, type: '', msg: '' },
    gowno: 'kupa'

}


const useListLogic = () => {
    const [state, setter] = useState(initialState)

    const { productName, list, edit, itemToUpdate, alert, gowno } = state


    const handleSubmit = (e) => {
        e.preventDefault();
        showAlert(true, 'success', 'name has been added')
        setter({ ...state, gowno: '1234' })
        console.log(state);
        const newProduct = { id: new Date().getTime().toString(), title: productName };
        setter({ ...state, list: [...list, newProduct] })
        setter({ ...state, productName: '' })
        if (edit) {
            const productIndex = list.findIndex((product => product.id == itemToUpdate.id))
            list[productIndex].title = productName
            setter({ ...state, list: [...list] })
            setter({ ...state, productName: '' })
            setter({ ...state, edit: false })
        }
    }

    const clearItems = () => {
        setter({ ...state, list: [] })
    }

    const clearItem = useCallback(
        (id) => {
            showAlert(true, 'danger', 'item removed');
            const filteredList = list.filter((item) =>
                item.id !== id
            )
            setter({ ...state, list: filteredList })
        }, [])

    const updateItem = useCallback((id) => {
        const exactItem = list.find((item) => item.id === id);
        setter({ ...state, productName: exactItem.title })
        setter({ ...state, edit: true })
        setter({ ...state, itemToUpdate: exactItem })
        console.log(productName)
    }, [])

    const showAlert = (show = false, type = '', msg = '') => {
        setter({ ...state, alert: { show: show, type: type, msg: msg } })
    };

    return { handleSubmit, alert, showAlert, productName, updateItem, list, clearItem, clearItems, setter, state }
}

function App() {
    const { handleSubmit, alert, showAlert, productName, updateItem, list, clearItem, clearItems, setter, state } = useListLogic()

    return (
        <section>
            <form onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
                <h2>Grocery bud</h2>
                <input
                    type="text"
                    placeholder="ex.cola"
                    value={productName}
                    onChange={(e) => setter({ ...state, productName: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
            <List list={list} clearItem={clearItem} updateItem={updateItem} />
            {list.length > 0 ? <button onClick={clearItems}>Clear items</button> : null}
        </section>
    )

}

export default App;