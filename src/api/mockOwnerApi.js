import delay from './delay';

const owners = [
    {
        firstName: "Jayson",
        lastName: "Brown",
        email: "jaybrown@gmail.com",
        phone: "555-789-1234",
        work: "Google",
        company: "Coffee My Heart",
        l1: "Seattle",
        l2: "San Francisco",
        l3: "San Jose",
        r1: "5000", 
        r2: "6000",
        p1: "1 mil",
        u1: "10 miles",
        n1: "N/A"
    },
    {
        firstName: "Kevin",
        lastName: "Lee",
        email: "mel-lee@gmail.com",
        phone: "555-312-4232",
        work: "PWC",
        company: "CoffeeLife",
        l1: "San Diego",
        l2: "Los Angeles",
        l3: "N/A",
        r1: "5000", 
        r2: "6000",
        p1: "1 mil",
        u1: "10 miles",
        n1: "N/A"
    },
    {
        firstName: "Jake",
        lastName: "Fields",
        email: "helloitsjake@gmail.com",
        phone: "555-312-3123",
        work: "Oliver Wyman",
        company: "Brews",
        l1: "Berkeley",
        l2: "San Jose",
        l3: "Saratoga",
        r1: "5000", 
        r2: "6000",
        p1: "1 mil",
        u1: "10 miles",
        n1: "N/A"
    }
];

class OwnerApi{
    static getAllOwners(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], owners));
            }, delay);

        });
    }

    static deleteOwner(owners) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const nameOfOwnerToDelete = owners.findIndex(owners => {
              return owners.firstName == owners;
            });
            resolve();
          }, delay);
        });
      }
}

export default OwnerApi;