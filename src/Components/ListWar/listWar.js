import React from 'react';

const PersonIcon = (props) => {
 if (props.type == 1) {
  return (
   <i className="fas fa-user-circle fa-2x"></i>
  )
 }
 if (props.type == 2) {
  return (
   <i className="fab fa-android fa-2x"></i>
  )
 }
 return (
  <i className="fas fa-question fa-2x"></i>
 )
}


const ListWars = (props) => {
  const { people, sortOrder } = props;
  let type = null;
  let evenOdd = null;
  // Fixes for Google Chrome Sorting ability
  let sortedList = people.sort((a, b) => {return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0)});
  if (sortOrder === 'Z-A') {
   sortedList = people.sort((a, b) => {return a.name > b.name ? -1 : (a.name < b.name ? 1 : 0)});
  } else {
   sortedList = people.sort((a, b) => {return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0)});
  }
  const peopleList = sortedList
  .map((person, i) => {
   if (i % 2) {
    evenOdd = 'odd';
   } else {
    evenOdd = 'even';
   }
   person.species.map(specie => {
    type = specie.replace(/\D/g,'');
    return type;
   })

   return (
    <div className={`person column is-12 ${evenOdd}`} key={person.name}>
     <nav className="level">
       <div className="level-left">
         <div className="level-item">
           <p className="subtitle is-5">
             <PersonIcon type={type} />
           </p>
         </div>
         <div className="level-item">
           <div>
            <p className="heading">{person.name}</p>
            <p className="info"> HEIGHT: {person.height} &#9830; MASS: {person.mass} &#9830; GENDER: <span>{person.gender}</span> </p>
           </div>
         </div>
       </div>
      </nav>
    </div>
   )
  });
  return (
   <section className="columns is-default is-multiline is-mobile is-tablet">
     {peopleList}
   </section>
  )
}

export default ListWars;
