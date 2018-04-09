# Courses Organizer - ReactJS
# (This is rather a React-Redux Architecture. Will Use ReactJS after finishing the React-Redux ...)

---
# BUILDING: EMPTY FOR NOW ...

---

## Aim
Building a project based on an EER (Enhanced Entity-Relationship).

## Enhanced Entity-Relationship

![alt text](assets/img/SchoolDataModel.jpg)

## CREATE - Data Insertion
|                                                                             CREATE                                                                             |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| - instructor<br> - student<br> - department<br> - course<br> - set course 'Onsite'<br> - set course 'Online'<br> - course-student<br> - course- instructor<br> |

---

## READ - Get Requests
|                | With 'Id' or 'All'                                                                                                                                |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Instructor** | - First Name + Last Name <br> - Teaching Courses <br>       * Online/Onsite<br>       * Department<br>       * Number of Student by class         |
| **Student**    | - First Name + Last Name <br> - Taking Courses <br>     * Grade <br>     * Online/Onsite<br>     * Department <br>     * Instructors' Information |
| **Course**     | - Title <br> - Online/Onsite <br> - Department <br> - Instructors' Information <br> - Number of Students                                          |
| **On Site**    | - Schedule <br> - Course <br>     * Department's infos <br>     * Instructors' infos <br>     * Number of Students                                |
| **Online**     | - URL <br> - Course<br>     * Department's infos<br>     * Instructors' infos<br>     * Number of Students                                        |
| **Department** | - Dpt's Name <br> - Administrator<br> - Course<br>     * Department's infos<br>     * Instructors' infos<br>     * Number of Students             |


## Configuration (VERY IMPORTANT)

At the project's root folder, we have a file name "##server.js##", by the end, we have:

![alt text](assets/img/server_config.jpg)

It's very important to follow the instruction, otherwise, you could have very disappointed surprises ...

---------------

## Author
* Dinh HUYNH - All Rights Reserved!
* dinh.hu19@yahoo.com