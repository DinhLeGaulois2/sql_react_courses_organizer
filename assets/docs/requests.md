# REQUESTS

## CREATE - Data Insertion
|                                                                             CREATE                                                                             |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| instructor<br> student<br> department<br> course<br> set course 'Onsite'<br> set course 'Online'<br> course-student<br> course-instructor<br> |

---

## READ - Get Requests
|                | With 'Id' or 'All'                                                                                                                                |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Instructor** | - First Name + Last Name <br> - Teaching Courses <br>  &nbsp;&nbps;* Online/Onsite<br>  &nbsp;&nbps;* Department<br>  &nbsp;&nbps;* Number of Student by class         |
| **Student**    | - First Name + Last Name <br> - Taking Courses <br>&nbsp;&nbps;* Grade <br>&nbsp;&nbps;* Online/Onsite<br>&nbsp;&nbps;* Department <br>&nbsp;&nbps;* Instructors' Information |
| **Course**     | - Title <br> - Online/Onsite <br> - Department <br> - Instructors' Information <br> - Number of Students                                          |
| **On Site**    | - Schedule <br> - Course <br>&nbsp;&nbps;* Department's infos <br>&nbsp;&nbps;* Instructors' infos <br>&nbsp;&nbps;* Number of Students                                |
| **Online**     | - URL <br> - Course<br>&nbsp;&nbps;* Department's infos<br>&nbsp;&nbps;* Instructors' infos<br>&nbsp;&nbps;* Number of Students                                        |
| **Department** | - Dpt's Name <br> - Administrator<br> - Course<br>&nbsp;&nbps;* Department's infos<br>&nbsp;&nbps;* Instructors' infos<br>&nbsp;&nbps;* Number of Students             |