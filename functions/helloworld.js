exports.handler = function(event, context, callback) {
  console.log("Event", event);

  const { identity, user } = context.clientContext;
  console.log("Hello", identity, user);

  callback();
};
