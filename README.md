# Cluster MongoDB shardé avec Docker

Cluster : 3 config servers (cfgRS), 3 shards de 3 membres chacun
(shard1RS, shard2RS, shard3RS) et un routeur mongos.

## Prérequis
Docker Desktop, PowerShell.

## Lancement
docker compose up -d 

## Connexion
mongodb://localhost:27017 (Compass ou mongosh)

## Vérification
db.commandes.getShardDistribution()
sh.status()
show Collections

## Arrêt
docker compose down      # conserve les données
docker compose down -v   # supprime aussi les volumes