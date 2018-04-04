const Sequelize = require('sequelize');
const db = require("../models");

// First to be inserted
const dpt = [
    {
        name: "History",
        Budget: 2000000,
        startDate: "1951-04-20",
        administrator: "John Lingard"
    },
    {
        name: "Mathematics",
        Budget: 8000000,
        startDate: "1903-06-15",
        administrator: "Henry Poincare"
    },
    {
        name: "Physics",
        Budget: 9000000,
        startDate: "1925-01-10",
        administrator: "Albert Einstein"
    },
]

// Second to be inserted
const course = [
    {
        title: "History of art",
        credits: "3",
        deparmentId: 1
    },
    {
        title: "History of culture",
        credits: "3",
        deparmentId: 1
    },
    {
        title: "History of mathematics",
        credits: "3",
        deparmentId: 1
    },
    {
        title: "History of philosophy",
        credits: "3",
        deparmentId: 1
    },
    {
        title: "History of religions",
        credits: "3",
        deparmentId: 1
    },
    {
        title: "History of science",
        credits: "3",
        deparmentId: 1
    },
    {
        title: "History of social sciences",
        credits: "3",
        deparmentId: 1
    },
    {
        title: "History of technology",
        credits: "3",
        deparmentId: 1
    },
    {
        title: "History of interdisciplinary fields",
        credits: "3",
        deparmentId: 1
    },
    // Mathematics   
    {
        title: "Basic mathematics",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Advanced mathematics",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Pure mathematics",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Algebra",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Calculus and analysis",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Geometry and topology",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Combinatorics",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Logic",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Number theory",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Applied mathematics",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Dynamical systems and differential equations",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Mathematical physics",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Computing",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Information theory and signal processing",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Probability and statistics",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Game theory",
        credits: "3",
        deparmentId: 2
    },
    {
        title: "Operations research",
        credits: "3",
        deparmentId: 2
    },
    // Physics
    {
        title: "Classical mechanics",
        credits: "3",
        deparmentId: 3
    },
    {
        title: "Thermodynamics and statistical mechanics",
        credits: "3",
        deparmentId: 3
    },
    {
        title: "Electromagnetism and electronics",
        credits: "3",
        deparmentId: 3
    },
    {
        title: "Relativity",
        credits: "3",
        deparmentId: 3
    },
    {
        title: "Quantum mechanics",
        credits: "3",
        deparmentId: 3
    },
    {
        title: "Optics, and atomic, molecular, and optical physics",
        credits: "3",
        deparmentId: 3
    },
    {
        title: "Condensed matter physics",
        credits: "3",
        deparmentId: 3
    },
    {
        title: "High energy/particle physics and nuclear physics",
        credits: "3",
        deparmentId: 3
    },
    {
        title: "Cosmology",
        credits: "3",
        deparmentId: 3
    }
]

// Independant. Could be insert anytime
const peopleNames = [
    {
        firstName: 'Dee',
        lastName: 'SALAZAR',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Theodore',
        lastName: 'MARTINEZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Rosanne',
        lastName: 'TODD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Gabriela',
        lastName: 'EATON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Melinda',
        lastName: 'ARNOLD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Theresa',
        lastName: 'MCINTYRE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Jerry',
        lastName: 'CASTRO',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Deann',
        lastName: 'HESS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Sandy',
        lastName: 'GOMEZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Mavis',
        lastName: 'HAMPTON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Loretta',
        lastName: 'GUERRERO',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Lena',
        lastName: 'MENDEZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Delia',
        lastName: 'LOWE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Raul',
        lastName: 'CRUZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Eunice',
        lastName: 'STRONG',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Laurie',
        lastName: 'ANDERSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Arnold',
        lastName: 'HUFF',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Sergio',
        lastName: 'LESTER',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Kenneth',
        lastName: 'CARRILLO',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Larry',
        lastName: 'GARRETT',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Cecil',
        lastName: 'OBRIEN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Ann',
        lastName: 'NOLAN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Justin',
        lastName: 'FLOYD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Fernando',
        lastName: 'FINLEY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Jesus',
        lastName: 'DORSEY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Leanne',
        lastName: 'MCCONNELL',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Jeffery',
        lastName: 'HINTON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Ladonna',
        lastName: 'BRUCE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Leslie',
        lastName: 'GIBSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Kristy',
        lastName: 'STUART',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Dee',
        lastName: 'COPELAND',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Marisa',
        lastName: 'FOLEY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Tamera',
        lastName: 'WORKMAN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Rosanna',
        lastName: 'MOODY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Raul',
        lastName: 'BARRON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Abby',
        lastName: 'FORD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Robyn',
        lastName: 'VARGAS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Joel',
        lastName: 'JACOBS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Shannon',
        lastName: 'GRANT',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Luann',
        lastName: 'JOSEPH',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Johnny',
        lastName: 'AYERS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Leslie',
        lastName: 'HANSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Frank',
        lastName: 'HENSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Guy',
        lastName: 'HIGGINS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Alyson',
        lastName: 'JUSTICE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Eddie',
        lastName: 'BARKER',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Kirk',
        lastName: 'COOK',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Ola',
        lastName: 'KERR',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Perry',
        lastName: 'KELLEY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Antoinette',
        lastName: 'VALENTINE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Steven',
        lastName: 'WATTS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Adam',
        lastName: 'BIRD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Duane',
        lastName: 'PRUITT',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Bethany',
        lastName: 'STEWART',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Julio',
        lastName: 'STEELE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Rachael',
        lastName: 'WOODARD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Douglas',
        lastName: 'ORR',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Renee',
        lastName: 'TOWNSEND',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Lorna',
        lastName: 'FARLEY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Sheila',
        lastName: 'HODGE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Sherri',
        lastName: 'JOYCE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'George',
        lastName: 'CHAMBERS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Marc',
        lastName: 'FOWLER',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Juan',
        lastName: 'WOODWARD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Rene',
        lastName: 'ROBERSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Deirdre',
        lastName: 'MENDEZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Stacie',
        lastName: 'PEREZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Marisa',
        lastName: 'COTTON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Daryl',
        lastName: 'OBRIEN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Lily',
        lastName: 'PETERSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Roslyn',
        lastName: 'MANNING',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Bob',
        lastName: 'JIMENEZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Javier',
        lastName: 'FOLEY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Silvia',
        lastName: 'SHARPE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Daryl',
        lastName: 'JOHNSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Toni',
        lastName: 'BURRIS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Gracie',
        lastName: 'ONEIL',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Chasity',
        lastName: 'MCFARLAND',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Bryan',
        lastName: 'CARROLL',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Kristy',
        lastName: 'WRIGHT',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Amber',
        lastName: 'JEFFERSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Mitchell',
        lastName: 'SILVA',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Alfredo',
        lastName: 'HUFFMAN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Roger',
        lastName: 'JAMES',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Luis',
        lastName: 'FARRELL',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Melba',
        lastName: 'BEARD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Imogene',
        lastName: 'REID',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Dwight',
        lastName: 'GIBSON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Karina',
        lastName: 'HALE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Roger',
        lastName: 'MELENDEZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Vincent',
        lastName: 'BROWN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Anthony',
        lastName: 'ESPINOZA',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Willie',
        lastName: 'COLLINS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Juliette',
        lastName: 'COOKE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Lacy',
        lastName: 'INGRAM',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Patty',
        lastName: 'GRIFFIN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Francis',
        lastName: 'SIMS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Kenneth',
        lastName: 'ROBLES',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Travis',
        lastName: 'WARE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Pearl',
        lastName: 'ROMAN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Perry',
        lastName: 'ROMERO',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Rita',
        lastName: 'BAIRD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Kent',
        lastName: 'MCGOWAN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Jodi',
        lastName: 'LOPEZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Alana',
        lastName: 'HARMON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Leo',
        lastName: 'CORTEZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Bernard',
        lastName: 'RICHARDS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Edna',
        lastName: 'LIVINGSTON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Edward',
        lastName: 'CAMPBELL',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Stephanie',
        lastName: 'NORRIS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Celeste',
        lastName: 'COLON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Darryl',
        lastName: 'MURPHY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Elvira',
        lastName: 'CRUZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Mai',
        lastName: 'MCCARTHY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Alvin',
        lastName: 'RODGERS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Tommy',
        lastName: 'CUNNINGHAM',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Joseph',
        lastName: 'MCKEE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Corey',
        lastName: 'CURTIS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Doris',
        lastName: 'MCCRAY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Marianne',
        lastName: 'CHURCH',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Roy',
        lastName: 'BULLOCK',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Verna',
        lastName: 'MCNEIL',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Madeleine',
        lastName: 'WILCOX',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Lenore',
        lastName: 'MCGOWAN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Marva',
        lastName: 'LANDRY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Kirk',
        lastName: 'HURST',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Arthur',
        lastName: 'DILLARD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Winifred',
        lastName: 'ALLISON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Alicia',
        lastName: 'LUCAS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Virgil',
        lastName: 'MCINTOSH',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Berta',
        lastName: 'FRY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Cody',
        lastName: 'CARPENTER',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'April',
        lastName: 'WHITLEY',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Mara',
        lastName: 'GEORGE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Mallory',
        lastName: 'ALLISON',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Allen',
        lastName: 'BRUCE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Jack',
        lastName: 'HOLDER',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Roy',
        lastName: 'MORAN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Erik',
        lastName: 'DOUGLAS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Holly',
        lastName: 'BONNER',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Eduardo',
        lastName: 'MUNOZ',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Ericka',
        lastName: 'ORTEGA',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Pedro',
        lastName: 'BOWEN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Brenda',
        lastName: 'BARRETT',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Henry',
        lastName: 'TAYLOR',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Rhoda',
        lastName: 'ODONNELL',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Susana',
        lastName: 'BANKS',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Janna',
        lastName: 'KRAMER',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Jaime',
        lastName: 'KIDD',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
    {
        firstName: 'Ralph',
        lastName: 'BOONE',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'instructor'
    },
    {
        firstName: 'Barry',
        lastName: 'GREEN',
        hireDate: '2015-05-21',
        enrollmentDate: '2015-05-21',
        type: 'student'
    },
]

const letInitiate = () => {
    db.department.findAll()
        .then(data => {
            if (data == null) { // the database is empty!!!!
                db.department.bulkCreate(dpt)
                    .then(data => {
                        db.course.bulkCreate(course)
                            .then(data => {
                                db.person.bulkCreate(peopleNames)
                                    .then(data => { console.log("Initiation: Success!") })
                                    .catch(err => { console.log("Could not do initiation for 'people'") })
                            })
                            .catch(err => console.log("Could not initiate the 'courses', err: " + err))
                    })
                    .catch(err => console.log("Could not initiate the 'department', err: " + err))
            }
        })
}