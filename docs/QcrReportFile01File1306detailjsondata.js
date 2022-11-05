console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/Controller.java 0 rule violation " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AclMutator"
 , "c2" : "org.apache.kafka.controller.Controller"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.Controller" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#43"
 , "c1" : "CompletableFuture<AlterPartitionResponseData>"
 , "c2" : "alterPartition(ControllerRequestContext;AlterPartitionRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#49"
 , "c1" : "CompletableFuture<CreateTopicsResponseData>"
 , "c2" : "createTopics(ControllerRequestContext;CreateTopicsRequestData;Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#56"
 , "c1" : "CompletableFuture<Void>"
 , "c2" : "unregisterBroker(ControllerRequestContext;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#62"
 , "c1" : "CompletableFuture<Map<String,ResultOrError<Uuid>>>"
 , "c2" : "findTopicIds(ControllerRequestContext;Collection<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#68"
 , "c1" : "CompletableFuture<Map<String,Uuid>>"
 , "c2" : "findAllTopicIds(ControllerRequestContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#73"
 , "c1" : "CompletableFuture<Map<Uuid,ResultOrError<String>>>"
 , "c2" : "findTopicNames(ControllerRequestContext;Collection<Uuid>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#79"
 , "c1" : "CompletableFuture<Map<Uuid,ApiError>>"
 , "c2" : "deleteTopics(ControllerRequestContext;Collection<Uuid>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#85"
 , "c1" : "CompletableFuture<Map<ConfigResource,ResultOrError<Map<String,String>>>>"
 , "c2" : "describeConfigs(ControllerRequestContext;Map<ConfigResource,Collection<String>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#91"
 , "c1" : "CompletableFuture<ElectLeadersResponseData>"
 , "c2" : "electLeaders(ControllerRequestContext;ElectLeadersRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#97"
 , "c1" : "CompletableFuture<FinalizedControllerFeatures>"
 , "c2" : "finalizedFeatures(ControllerRequestContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#102"
 , "c1" : "CompletableFuture<Map<ConfigResource,ApiError>>"
 , "c2" : "incrementalAlterConfigs(ControllerRequestContext;Map<ConfigResource,Map<String,Map.Entry<AlterConfigOp.OpType,String>>>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#109"
 , "c1" : "CompletableFuture<AlterPartitionReassignmentsResponseData>"
 , "c2" : "alterPartitionReassignments(ControllerRequestContext;AlterPartitionReassignmentsRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#115"
 , "c1" : "CompletableFuture<ListPartitionReassignmentsResponseData>"
 , "c2" : "listPartitionReassignments(ControllerRequestContext;ListPartitionReassignmentsRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00121"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#121"
 , "c1" : "CompletableFuture<Map<ConfigResource,ApiError>>"
 , "c2" : "legacyAlterConfigs(ControllerRequestContext;Map<ConfigResource,Map<String,String>>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#128"
 , "c1" : "CompletableFuture<BrokerHeartbeatReply>"
 , "c2" : "processBrokerHeartbeat(ControllerRequestContext;BrokerHeartbeatRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#134"
 , "c1" : "CompletableFuture<BrokerRegistrationReply>"
 , "c2" : "registerBroker(ControllerRequestContext;BrokerRegistrationRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#140"
 , "c1" : "CompletableFuture<Void>"
 , "c2" : "waitForReadyBrokers(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#143"
 , "c1" : "CompletableFuture<Map<ClientQuotaEntity,ApiError>>"
 , "c2" : "alterClientQuotas(ControllerRequestContext;Collection<ClientQuotaAlteration>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#150"
 , "c1" : "CompletableFuture<AllocateProducerIdsResponseData>"
 , "c2" : "allocateProducerIds(ControllerRequestContext;AllocateProducerIdsRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00156"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#156"
 , "c1" : "CompletableFuture<UpdateFeaturesResponseData>"
 , "c2" : "updateFeatures(ControllerRequestContext;UpdateFeaturesRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00162"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#162"
 , "c1" : "CompletableFuture<Long>"
 , "c2" : "beginWritingSnapshot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00165"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#165"
 , "c1" : "CompletableFuture<List<CreatePartitionsTopicResult>>"
 , "c2" : "createPartitions(ControllerRequestContext;List<CreatePartitionsTopic>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00172"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#172"
 , "c1" : "void"
 , "c2" : "beginShutdown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00175"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#175"
 , "c1" : "int"
 , "c2" : "curClaimEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00178"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#178"
 , "c1" : "boolean"
 , "c2" : "isActive()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00183"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#183"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
,
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.fct.svg" 

}
};
console.log('leListeStr 99 main end');
