/**
 * Core class of CodeFett frontend.
 *
 * This class will serve as a bridge between the Angular application
 * and the different utilities and re-usable functions of the project.
 */
export default class CFCore {

    /**
     * Make a Request to the server
     *
     * @param method
     * @param url
     * @param data
     */
    request(method, url, data=null) {}

    /**
     * Raise an Alert modal with information for the user. There are
     * different types of modals.
     *
     * @param type
     * @param options
     */
    alert(type, options=null) {}
}