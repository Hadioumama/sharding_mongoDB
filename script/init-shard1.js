rs.initiate({
  _id: "shard1RS",
  members: [
    { _id: 0, host: "shard1:27018", priority: 2 },
    { _id: 1, host: "shard1b:27018", priority: 1 },
    { _id: 2, host: "shard1c:27018", priority: 1 }
  ]
});