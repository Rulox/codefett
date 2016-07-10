import * as $ from "../../bower_components/jquery/dist/jquery";

export const DEBUG = true

/**
 * Function to make all the api calls.
 * @param url
 * @param options
 * @param success_cb
 * @param failure_cb
 */
export function ajaxRequest(url, options={}, success_cb=null, failure_cb=null) {
  let defaultOptions = {
    method: 'GET',
    data: null,
    dataType: 'json'
  }

  $.extend(defaultOptions, options)

  $.ajax({
    url: url,
    method: options.method,
    data: options.data
  })
  .done((data) => {
    if (success_cb) {
      success_cb(data)
    }
  })
  .fail((data) => {
    if (failure_cb) {
      failure_cb(data)
    }

    if (DEBUG) {
      console.warn('There was an error on the request. More info:')
      console.warn(data.responseText)
      console.log("Complete object for more information:")
      console.log(data)
    }
  })
}


export function cfModal(inner, options={}) {
  let default_options = {}
  }
