export function(event, context, callback) {
    const {identity, user} = context.clientContext;
    console.log("Hello", identity, user);
    callback();
  }