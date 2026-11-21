rs.initiate({
  _id: "shard2RS",
  members: [
    { _id: 0, host: "shard2:27018", priority: 2 },
    { _id: 1, host: "shard2b:27018", priority: 1 },
    { _id: 2, host: "shard2c:27018", priority: 1 }
  ]
});