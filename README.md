![alt tag](https://raw.githubusercontent.com/Rulox/codefett/develop/codefett/assets/images/logo_small.png)

[![Build Status](https://travis-ci.org/Rulox/codefett.svg)](https://travis-ci.org/Rulox/codefett) [![Coverage Status](https://coveralls.io/repos/Rulox/codefett/badge.svg?branch=develop&service=github)](https://coveralls.io/github/Rulox/codefett?branch=develop)
[![Code Health](https://landscape.io/github/Rulox/codefett/develop/landscape.svg?style=flat)](https://landscape.io/github/Rulox/codefett/develop)

-------
Web application for automatic testing codes from students

# Description
## English
Tool that allows users to upload tests and/or programming activities. The application will correct and return some feedback and a realtime calification for the students. Users can create/manage courses and prepare them for the students to upload code.

# How does it work
1. As a teacher, everyone can create a new course in CodeFett.
2. After someone creates a course, students can apply for them before the inscription end date.
3. The teacher would be able to choose between different `Plugins`. Each plugin is designed to work
with a different language and/or framework.
4. Teacher will be able to download the example project provided with each plugin, and he will
be responsible to code some tests for it. 
5. Students now, can download only the Example Project and code inside, following the
teacher's directions. 
6. Students will upload the project to CodeFett and they will receive some kind of
marks, based on their performance!

# [WIP] Plugins
CodeFett uses plugins to perform code tests. Do you miss a language, or a more complex 
course? Feel free to contribute with a plugin!

What do you need to create a new plugin?
- An example project (literally, the folder has to be called `example`)
- A Test file in the same language than the plugin to test the example project
- A Dockerfile to run the tests inside a container
- A Python class using our custom mixin to Parse the result of the tests in the container


![alt tag](http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/AGPLv3_Logo.svg/200px-AGPLv3_Logo.svg.png)

