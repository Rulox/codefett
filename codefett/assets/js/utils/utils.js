import * as $ from "../../bower_components/jquery/dist/jquery";

export const API_ENDPOINT = 'http://localhost:8000';
export const DEBUG = true

/**
 * Function to make all the api calls.
 * @param url
 * @param options
 * @param success_cb
 * @param failure_cb
 */
export function ajaxRequest(url, options, success_cb=null, failure_cb=null) {
  var defaultOptions = {
    method: 'GET'
  }

  $.extend(defaultOptions, options)

  $.ajax({
    url: API_ENDPOINT + url,
    method: options.method
  })
  .done((data) => {
    if (success_cb)
      success_cb(data)
  })
  .fail((data) => {
    if (failure_cb)
      failure_cb(data)

    if (DEBUG) {
      console.warn('There was an error on the request. More info:')
      console.log(data)
    }
  })
}


export function cfModal(inner, options={}) {
  let default_options = {}
  }
