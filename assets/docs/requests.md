# REQUESTS

## CREATE - Data Insertion
| CREATE                                                                                                                                              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| * instructor<br> * student<br>* department<br>* course<br>* set course 'Onsite'<br>* set course 'Online'<br>* course-student<br>* course-instructor |

---

## READ - Get Requests
|                | With 'Id' or 'All'                                                                                                                                |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Instructor** | - First Name + Last Name <br> - Teaching Courses <br>  &nbsp;&nbsp;* Online/Onsite<br>  &nbsp;&nbsp;* Department<br>  &nbsp;&nbsp;* Number of Student by class         |
| **Student**    | - First Name + Last Name <br> - Taking Courses <br>&nbsp;&nbsp;* Grade <br>&nbsp;&nbsp;* Online/Onsite<br>&nbsp;&nbsp;* Department <br>&nbsp;&nbsp;* Instructors' Information |
| **Course**     | - Title <br> - Online/Onsite <br> - Department <br> - Instructors' Information <br> - Number of Students                                          |
| **On Site**    | - Schedule <br> - Course <br>&nbsp;&nbsp;* Department's infos <br>&nbsp;&nbsp;* Instructors' infos <br>&nbsp;&nbsp;* Number of Students                                |
| **Online**     | - URL <br> - Course<br>&nbsp;&nbsp;* Department's infos<br>&nbsp;&nbsp;* Instructors' infos<br>&nbsp;&nbsp;* Number of Students                                        |
| **Department** | - Dpt's Name <br> - Administrator<br> - Course<br>&nbsp;&nbsp;* Department's infos<br>&nbsp;&nbsp;* Instructors' infos<br>&nbsp;&nbsp;* Number of Students             |