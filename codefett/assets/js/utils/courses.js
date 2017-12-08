import $ from 'jquery'

const $course = $('.course_detail')
const $preparation = $course.find('.preparation')

function sendExampleProject() {
    $('.send_example_project').on('click', (e) => {
        e.preventDefault()
        alert()
    })
}

function initCourse() {
    if (!$course.length) {
        return
    }

    if ($preparation.length) {
        sendExampleProject()
    }
}

export default initCourse;