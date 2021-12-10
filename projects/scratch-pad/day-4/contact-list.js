// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // create a variable initialized to an object literal
    var obj = {};

    // create object keys using dot notation and initialize them to function parameters
    obj.id = id;
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;

    // return obj
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },

        addContact: function(contact) {
            // use the .push() method to add a contact to the array
           return contacts.push(contact);
        },

        findContact: function(fullName) {
            // create a loop to iterate over the contacts array
            for (var i = 0; i < contacts.length; i++) {
                // create a conditional statement that compares if the first and last names equal full name
                if (contacts[i].nameFirst + contacts[i].nameLast === fullName) {
                    // return the current contact object
                    return contacts[i];
                } 
            // return undefined if it iterates over the whole array and doesn't find a match        
            return undefined;
            }
            
        },

        removeContact: function(contact) {
            // use the .pop() method to remove the passed in contact from array
            return contacts.pop(contact);
        },

        printAllContactNames: function() {

        }
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
