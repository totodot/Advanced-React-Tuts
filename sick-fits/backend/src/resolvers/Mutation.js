const mutations = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    const newDog = { name: args.name };
    // create a dog!;
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = mutations;
