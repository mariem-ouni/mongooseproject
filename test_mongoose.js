/***********************connexion  */
let mongoose = require('mongoose');
let validator = require('validator');

const server = 'localhost:27017';
const database = 'mydatabase';

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose.connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.error('Database connection error', err);
      });
  }
}
const databaseCon = new Database()
databaseCon.connect()
/********************************schema */
const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true // Champ requis
    },
    age: {
      type: Number,
      min: 0 // Age ne peut pas être négatif
    },
    favoriteFoods: {
      type: [String], // Tableau de chaînes
      default: [] // Valeur par défaut est un tableau vide
    }
  });
  const person=mongoose.model('person',personSchema)
  /****************create one person ******************* */
  /*let person1=new person({
    name : 'sallah',
    age:20,
    favoriteFoods:["salad", "pasta"]
  })
  person1.save() 
  .then(doc => {
  
    console.log(doc)
  
  })
  .catch(err => {
  
    console.error(err)
  
  })*/
 /*******************create arrayofpeople********** */
 /*const arrayOfPeople = [
    { 
      name: "Jean", 
      age: 25, 
      favoriteFoods: ["pizza", "pâtes"] 
    },
    { 
      name: "Marie", 
      age: 30, 
      favoriteFoods: ["salade", "fruits"] 
    },
    { 
      name: "Pierre", 
      age: 35, 
      favoriteFoods: ["burger", "frites"] 
    }
  ];
  async function createManyPeople() {
    try {
      const data = await person.create(arrayOfPeople);
      console.log('Personnes créées:', data);
    } catch (err) {
      console.error('Erreur:', err);
    }
  }
  createManyPeople()*/
  /*******************find by name************** */
  /*person.find({ name: 'sallah' })
  .then(people => {
    console.log('person found:', people);
  })
  .catch(err => {
    console.error('Error retrieving documents:', err);
  });*/
/**************************** find by  favorite foods**/
/*person.findOne({ favoriteFoods: [ 'salad', 'pasta' ] })
  .then(people => {
    console.log('person found:', people);
  })
  .catch(err => {
    console.error('Error retrieving documents:', err);
  });*/
/************************* find by Id******* */
personId = '6728b03e40b0ba3ad1081bce';
/*person.findById(personId)
  .then(person => {
    if (!person) {
      console.log('No person found with that ID');
    } else {
      console.log('Person found:', person);
    }
  })
  .catch(err => {
    console.error('Error retrieving person:', err);
  });*/
  /******************** find by id + push *********** */
  /*person.findById(personId)
  .then(person => {
    if (!person) {
      console.log('No person found with that ID');
    } else {
      person.favoriteFoods.push('hamburger');
      person.save()
      console.log('Person updata:', person);
    }
  })
  .catch(err => {
    console.error('Error retrieving person:', err);
  });*/
  /*********************************** */
  /*person.findOneAndUpdate(

    {
  
      name: 'Jean'
  
    },
  
    {
  
      age: 30
    },
  
    {
  
      new: true,                       // return updated doc
  
      runValidators: true              // validate before update
  
    })
  
    .then(doc => {
  
      console.log(doc)
  
    })
  
    .catch(err => {
  
      console.error(err)
  
    })*/
    /************ find by id and remove********* */

   /* const id = '6728b03e40b0ba3ad1081bce';

person
  .findOneAndDelete({ _id: id }) // Pass the ID as part of an object
  
  .then(response => {
    console.log('Removed person:', response);
  })
  .catch(err => {
    console.error('Error removing person:', err);
  });*/
  /***************** creat mary ************************ */
  let newPerson = new person({
    name: 'Mary ',
    age: 30,
    favoriteFoods: ['Pizza', 'Pasta']
  });  
  newPerson.save()
  .then(doc => {
    console.log('Document saved:', doc);
  })
  .catch(err => {
    console.error('Error saving document:', err);
  });
  /**************************************** */
  const deleteManyByName = async (name) => {
    try {
      const result = await person.remove({ name });
      console.log('Delete result:', result);
    } catch (err) {
      console.error('Error deleting documents:', err);
    }
  };
  
  deleteManyByName('Mary');