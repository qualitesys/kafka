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
 , "c5" : "00065"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#65"
 , "c1" : "CompletableFuture<AlterPartitionResponseData>"
 , "c2" : "alterPartition(ControllerRequestContext;AlterPartitionRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#79"
 , "c1" : "CompletableFuture<CreateTopicsResponseData>"
 , "c2" : "createTopics(ControllerRequestContext;CreateTopicsRequestData;Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#94"
 , "c1" : "CompletableFuture<Void>"
 , "c2" : "unregisterBroker(ControllerRequestContext;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#106"
 , "c1" : "CompletableFuture<Map<String,ResultOrError<Uuid>>>"
 , "c2" : "findTopicIds(ControllerRequestContext;Collection<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#118"
 , "c1" : "CompletableFuture<Map<String,Uuid>>"
 , "c2" : "findAllTopicIds(ControllerRequestContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00129"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#129"
 , "c1" : "CompletableFuture<Map<Uuid,ResultOrError<String>>>"
 , "c2" : "findTopicNames(ControllerRequestContext;Collection<Uuid>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#142"
 , "c1" : "CompletableFuture<Map<Uuid,ApiError>>"
 , "c2" : "deleteTopics(ControllerRequestContext;Collection<Uuid>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#157"
 , "c1" : "CompletableFuture<Map<ConfigResource,ResultOrError<Map<String,String>>>>"
 , "c2" : "describeConfigs(ControllerRequestContext;Map<ConfigResource,Collection<String>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00170"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#170"
 , "c1" : "CompletableFuture<ElectLeadersResponseData>"
 , "c2" : "electLeaders(ControllerRequestContext;ElectLeadersRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00182"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#182"
 , "c1" : "CompletableFuture<FinalizedControllerFeatures>"
 , "c2" : "finalizedFeatures(ControllerRequestContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00195"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#195"
 , "c1" : "CompletableFuture<Map<ConfigResource,ApiError>>"
 , "c2" : "incrementalAlterConfigs(ControllerRequestContext;Map<ConfigResource,Map<String,Map.Entry<AlterConfigOp.OpType,String>>>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00209"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#209"
 , "c1" : "CompletableFuture<AlterPartitionReassignmentsResponseData>"
 , "c2" : "alterPartitionReassignments(ControllerRequestContext;AlterPartitionReassignmentsRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00222"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#222"
 , "c1" : "CompletableFuture<ListPartitionReassignmentsResponseData>"
 , "c2" : "listPartitionReassignments(ControllerRequestContext;ListPartitionReassignmentsRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00236"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#236"
 , "c1" : "CompletableFuture<Map<ConfigResource,ApiError>>"
 , "c2" : "legacyAlterConfigs(ControllerRequestContext;Map<ConfigResource,Map<String,String>>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00250"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#250"
 , "c1" : "CompletableFuture<BrokerHeartbeatReply>"
 , "c2" : "processBrokerHeartbeat(ControllerRequestContext;BrokerHeartbeatRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00263"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#263"
 , "c1" : "CompletableFuture<BrokerRegistrationReply>"
 , "c2" : "registerBroker(ControllerRequestContext;BrokerRegistrationRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00276"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#276"
 , "c1" : "CompletableFuture<Void>"
 , "c2" : "waitForReadyBrokers(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00287"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#287"
 , "c1" : "CompletableFuture<Map<ClientQuotaEntity,ApiError>>"
 , "c2" : "alterClientQuotas(ControllerRequestContext;Collection<ClientQuotaAlteration>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00301"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#301"
 , "c1" : "CompletableFuture<AllocateProducerIdsResponseData>"
 , "c2" : "allocateProducerIds(ControllerRequestContext;AllocateProducerIdsRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00314"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#314"
 , "c1" : "CompletableFuture<UpdateFeaturesResponseData>"
 , "c2" : "updateFeatures(ControllerRequestContext;UpdateFeaturesRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00325"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#325"
 , "c1" : "CompletableFuture<Long>"
 , "c2" : "beginWritingSnapshot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00335"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#335"
 , "c1" : "CompletableFuture<List<CreatePartitionsTopicResult>>"
 , "c2" : "createPartitions(ControllerRequestContext;List<CreatePartitionsTopic>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00345"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#345"
 , "c1" : "void"
 , "c2" : "beginShutdown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00351"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#351"
 , "c1" : "int"
 , "c2" : "curClaimEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00356"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#356"
 , "c1" : "boolean"
 , "c2" : "isActive()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00363"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.html#363"
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
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/Controller.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
