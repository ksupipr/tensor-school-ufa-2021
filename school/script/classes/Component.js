export default class Component {
    /**
     * _subscribeFunctions хранит функции, которые были подписанны
     */
    _subscribeFunctions = {};

    /**
     * рендер элемента
     * @returns верстку
     */
    render(tagName, className, place, layout) {
        const element = this.createClassElement(tagName, className);
        element.insertAdjacentHTML(place, layout);
        return element;
    }

    /**
     * подписываемся на кнопки в элементе
     */
    afterMount(arrayBtns) {
        for (const btnItem of arrayBtns) {
            let btn = document.querySelector(btnItem.targetBtn);
            this.setSubscribeFunction(btnItem.subscribeFunctionName, btnItem.subscribeFunctionBind);
            this.subscibe(btn, btnItem.eventName, this.getSubscribeFunction(btnItem.subscribeFunctionName));
        }
    }

    /**
     * запонинает функцию, которой подписались на событие
     * @param {String} functionName ключ сохранения функции
     * @param {Function} functionBody сама функция
     */
    setSubscribeFunction(functionName, functionBody) {
        this._subscribeFunctions[functionName] = functionBody;
    }

    /**
     * возвращает функцию, которой подписались на событие
     * @param {String} functionName ключ функции
     * @returns функцию
     */
    getSubscribeFunction(functionName) {
        return this._subscribeFunctions[functionName];
    }

    /**
     * создает элемент определенного класса
     * @param {String} tagName название тега
     * @param {String} className имя класса
     * @returns элемент с классомм
     */
    createClassElement(tagName, className) {
        let element = document.createElement(tagName);
        element.classList.add(className);
        return element;
    }

    /**
     * подписывает элемент на событие
     * @param {Object} elementName элемент на который вешается событие
     * @param {String} eventName ожидаемое событие
     * @param {Function} subscribeFunction функция которая выполнитя
     */
    subscibe(elementName, eventName, subscribeFunction) {
        elementName.addEventListener(eventName, subscribeFunction);
    }

    /**
     * отписывает элемент от событие
     * @param {Object} elementName элемент на котором весит событие
     * @param {String} eventName собитие от которого отписываемся
     * @param {Function} subscribeFunction функция которую отписываем
     */
    unsubscibe(elementName, eventName, subscribeFunction) {
        elementName.removeEventListener(eventName, subscribeFunction);
    }
}