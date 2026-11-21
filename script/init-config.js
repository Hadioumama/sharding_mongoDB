rs.initiate({
  _id: "cfgRS",
  configsvr: true,
  members: [
    { _id: 0, host: "cfgsvr:27019", priority: 2 },
    { _id: 1, host: "cfgsvr2:27019", priority: 1 },
    { _id: 2, host: "cfgsvr3:27019", priority: 1 }
  ]
})