exports.handler = function(event, context, callback) {
  console.log("Event", event);

  const { user } = context.clientContext;
  console.log("Hello", user);

  callback(null, {
    statusCode: user ? 200 : 401,
    body: "Hello, World"
  });
};
