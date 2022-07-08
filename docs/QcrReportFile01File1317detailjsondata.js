console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/QuorumController.java 408 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Controller"
 , "c2" : "org.apache.kafka.controller.QuorumController"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.QuorumController" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NotControllerException"
 , "c2" : "newNotControllerException()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "exceptionToApparentController(NotControllerException)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleEventEnd(String;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Throwable"
 , "c2" : "handleEventException(String;OptionalLong;Throwable)"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "appendControlEvent(String;Runnable)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ReplicationControlManager"
 , "c2" : "replicationControl()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ClusterControlManager"
 , "c2" : "clusterControl()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeCompleteAuthorizerInitialLoad()"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isActiveController()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateWriteOffset(long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateLastCommittedState(long;int;long)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "renounce()"
 , "c3" : "3"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "rescheduleMaybeFenceStaleBrokers()"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cancelMaybeFenceReplicas()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeScheduleNextBalancePartitionLeaders()"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cancelMaybeBalancePartitionLeaders()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeScheduleNextWriteNoOpRecord()"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cancelNextWriteNoOpRecord()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleFeatureControlChange()"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(ApiMessage;Optional<OffsetAndEpoch>;long)"
 , "c3" : "19"
 , "c4" : "36"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeGenerateSnapshot(long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetState()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "QuorumController"
 , "c2" : "QuorumController(LogContext;int;String;KafkaEventQueue;Time;KafkaConfigSchema;RaftClient<ApiMessageAndVersion>;QuorumFeatures;short;int;ReplicaPlacer;long;OptionalLong;OptionalLong;long;ControllerMetrics;Optional<CreateTopicPolicy>;Optional<AlterConfigPolicy>;ConfigurationValidator;Optional<ClusterMetadataAuthorizer>;Map<String,Object>;BootstrapMetadata)"
 , "c3" : "1"
 , "c4" : "31"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<AlterPartitionResponseData>"
 , "c2" : "alterPartition(ControllerRequestContext;AlterPartitionRequestData)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<CreateTopicsResponseData>"
 , "c2" : "createTopics(ControllerRequestContext;CreateTopicsRequestData;Set<String>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Void>"
 , "c2" : "unregisterBroker(ControllerRequestContext;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Map<String,ResultOrError<Uuid>>>"
 , "c2" : "findTopicIds(ControllerRequestContext;Collection<String>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Map<String,Uuid>>"
 , "c2" : "findAllTopicIds(ControllerRequestContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Map<Uuid,ResultOrError<String>>>"
 , "c2" : "findTopicNames(ControllerRequestContext;Collection<Uuid>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Map<Uuid,ApiError>>"
 , "c2" : "deleteTopics(ControllerRequestContext;Collection<Uuid>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Map<ConfigResource,ResultOrError<Map<String,String>>>>"
 , "c2" : "describeConfigs(ControllerRequestContext;Map<ConfigResource,Collection<String>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<ElectLeadersResponseData>"
 , "c2" : "electLeaders(ControllerRequestContext;ElectLeadersRequestData)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<FinalizedControllerFeatures>"
 , "c2" : "finalizedFeatures(ControllerRequestContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Map<ConfigResource,ApiError>>"
 , "c2" : "incrementalAlterConfigs(ControllerRequestContext;Map<ConfigResource,Map<String,Entry<OpType,String>>>;boolean)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<AlterPartitionReassignmentsResponseData>"
 , "c2" : "alterPartitionReassignments(ControllerRequestContext;AlterPartitionReassignmentsRequestData)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<ListPartitionReassignmentsResponseData>"
 , "c2" : "listPartitionReassignments(ControllerRequestContext;ListPartitionReassignmentsRequestData)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Map<ConfigResource,ApiError>>"
 , "c2" : "legacyAlterConfigs(ControllerRequestContext;Map<ConfigResource,Map<String,String>>;boolean)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<BrokerHeartbeatReply>"
 , "c2" : "processBrokerHeartbeat(ControllerRequestContext;BrokerHeartbeatRequestData)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<BrokerRegistrationReply>"
 , "c2" : "registerBroker(ControllerRequestContext;BrokerRegistrationRequestData)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Map<ClientQuotaEntity,ApiError>>"
 , "c2" : "alterClientQuotas(ControllerRequestContext;Collection<ClientQuotaAlteration>;boolean)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<AllocateProducerIdsResponseData>"
 , "c2" : "allocateProducerIds(ControllerRequestContext;AllocateProducerIdsRequestData)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<UpdateFeaturesResponseData>"
 , "c2" : "updateFeatures(ControllerRequestContext;UpdateFeaturesRequestData)"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<List<CreatePartitionsTopicResult>>"
 , "c2" : "createPartitions(ControllerRequestContext;List<CreatePartitionsTopic>;boolean)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Long>"
 , "c2" : "beginWritingSnapshot()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<List<AclCreateResult>>"
 , "c2" : "createAcls(ControllerRequestContext;List<AclBinding>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<List<AclDeleteResult>>"
 , "c2" : "deleteAcls(ControllerRequestContext;List<AclBindingFilter>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Void>"
 , "c2" : "waitForReadyBrokers(int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginShutdown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "nodeId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "clusterId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "curClaimEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MetadataVersion"
 , "c2" : "metadataVersion()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CountDownLatch"
 , "c2" : "pause()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Time"
 , "c2" : "time()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "41"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "51"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "188"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "62"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00111] The class QuorumController contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00113] The class Builder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method setTime arguments Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method setThreadNamePrefix arguments String  threadNamePrefix"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method setLogContext arguments LogContext  logContext"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method setConfigSchema arguments KafkaConfigSchema  configSchema"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method setRaftClient arguments RaftClient&lt;ApiMessageAndVersion &gt;  logManager"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method setQuorumFeatures arguments QuorumFeatures  quorumFeatures"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method setDefaultReplicationFactor arguments short  defaultReplicationFactor"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method setDefaultNumPartitions arguments int  defaultNumPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method setReplicaPlacer arguments ReplicaPlacer  replicaPlacer"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00191] For method setSnapshotMaxNewRecordBytes arguments long  value"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method setLeaderImbalanceCheckIntervalNs arguments OptionalLong  value"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method setMaxIdleIntervalNs arguments OptionalLong  value"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#206"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00206] For method setSessionTimeoutNs arguments long  sessionTimeoutNs"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method setMetrics arguments ControllerMetrics  controllerMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#216"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00216] For method setBootstrapMetadata arguments BootstrapMetadata  bootstrapMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method setCreateTopicPolicy arguments Optional&lt;CreateTopicPolicy &gt;  createTopicPolicy"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method setAlterConfigPolicy arguments Optional&lt;AlterConfigPolicy &gt;  alterConfigPolicy"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#231"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00231] For method setConfigurationValidator arguments ConfigurationValidator  configurationValidator"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method setAuthorizer arguments ClusterMetadataAuthorizer  authorizer"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00241] For method setStaticConfig arguments Map&lt;String ,Object &gt;  staticConfig"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  'You must set a raft client.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  'You must specify an initial metadata.version using the kafka-storage tool.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  'You must specify the quorum features' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  'Node%d_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  '[Controller %d] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  'org.apache.kafka.controller.MockControllerMetrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  'QuorumController' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.controller.QuorumController.Builder.build@POLYN422132 the MagicNumber/String  'event queue' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00146] Public method setTime is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00151] Public method setThreadNamePrefix is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00156] Public method setLogContext is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00161] Public method setConfigSchema is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#166"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00166] Public method setRaftClient is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00171] Public method setQuorumFeatures is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00176] Public method setDefaultReplicationFactor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00181] Public method setDefaultNumPartitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00186] Public method setReplicaPlacer is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00191] Public method setSnapshotMaxNewRecordBytes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#196"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00196] Public method setLeaderImbalanceCheckIntervalNs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00201] Public method setMaxIdleIntervalNs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00206] Public method setSessionTimeoutNs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00211] Public method setMetrics is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00216] Public method setBootstrapMetadata is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00221] Public method setCreateTopicPolicy is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00226] Public method setAlterConfigPolicy is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00231] Public method setConfigurationValidator is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00236] Public method setAuthorizer is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#241"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00241] Public method setStaticConfig is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00302] The class ConfigResourceExistenceChecker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00304] For method accept arguments ConfigResource  configResource"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#304"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00304] The argument configResource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.controller.QuorumController.ConfigResourceExistenceChecker.accept@POLYN424407 the MagicNumber/String  'Invalid broker name ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.controller.QuorumController.ConfigResourceExistenceChecker.accept@POLYN424407 the MagicNumber/String  'No broker with id ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.controller.QuorumController.ConfigResourceExistenceChecker.accept@POLYN424407 the MagicNumber/String  ' found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.controller.QuorumController.ConfigResourceExistenceChecker.accept@POLYN424407 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.controller.QuorumController.ConfigResourceExistenceChecker.accept@POLYN424407 the MagicNumber/String  'The topic '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00328"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.controller.QuorumController.ConfigResourceExistenceChecker.accept@POLYN424407 the MagicNumber/String  '' does not exist.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.controller.QuorumController.newNotControllerException@POLYN425804 the MagicNumber/String  'No controller appears to be active.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#352"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00352] For method exceptionToApparentController arguments NotControllerException  e"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.controller.QuorumController.exceptionToApparentController@POLYN426234 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#361"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00361] For method handleEventEnd arguments String  name|long  startProcessingTimeNs"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.controller.QuorumController.handleEventEnd@POLYN426626 the MagicNumber/String  'Processed {} in {} us' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00369] For method handleEventException arguments String  name|OptionalLong  startProcessingTimeNs|Throwable  exception"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#370"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00370] The argument startProcessingTimeNs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#371"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00371] The argument exception is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162 the MagicNumber/String  '{}: unable to start processing because of {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162 the MagicNumber/String  '{}: failed with {} in {} us' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162 the MagicNumber/String  '{}: failed with unknown server exception {} at epoch {} in {} us.  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162 the MagicNumber/String  'Reverting to last committed offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00399] The class ControlEvent contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00416] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.controller.QuorumController.ControlEvent.run@POLYN429331 the MagicNumber/String  'Executing {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#421"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00421] For method handleException arguments Throwable  exception"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#431"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00431] For method appendControlEvent arguments String  name|Runnable  handler"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00440] The class SnapshotGeneratorManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#443"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00443] For method createSnapshotGenerator arguments long  committedOffset|int  committedEpoch|long  committedTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'Snapshot generator already exists.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'Cannot generate a snapshot at committed offset %d because it does not exists in the snapshot registry.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'features' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00467"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00467] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'cluster' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'replication' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00469] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'configuration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'clientQuotas' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'producerIds' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'acls' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.createSnapshotGenerator@POLYN430773 the MagicNumber/String  'Skipping generation of snapshot for committed offset {} and epoch {} since it already exists' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.cancel@POLYN432773 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.cancel@POLYN432773 the MagicNumber/String  'Cancelling snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.cancel@POLYN432773 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#498"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00498] For method reschedule arguments long  delayNs"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00517] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.run@POLYN433659 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.run@POLYN433659 the MagicNumber/String  'No snapshot is in progress.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.run@POLYN433659 the MagicNumber/String  'Error while generating snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.run@POLYN433659 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00520"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#520"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00520] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.run@POLYN433659 the MagicNumber/String  'Finished generating snapshot {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00522] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.run@POLYN433659 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.controller.QuorumController.SnapshotGeneratorManager.snapshotLastOffsetFromLog@POLYN434808 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00541] The class ControllerReadEvent contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#569"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00569] For method handleException arguments Throwable  exception"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.controller.QuorumController.ControllerReadEvent.toString@POLYN436889 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.controller.QuorumController.ControllerReadEvent.toString@POLYN436889 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#592"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00592] The argument deadlineNs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00614] The class ControllerWriteEvent contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00626"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#626"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00626] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.ControllerWriteEvent@POLYN439334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00634"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#634"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00634] For method run list of called methods Object monObjet|java.util.OptionalLong purgatory_highestPendingOffsetN440679"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#638"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00638] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00652"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00653"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#653"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00653] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  'Completing read-only operation {} immediately because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  'the purgatory is empty.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  'Read-only operation {} will be completed when the log ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00661"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#661"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00661] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  'reaches offset {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00682"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#682"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00682] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  'Read-write operation {} will be completed when the log ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00683"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#683"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00683] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.run@POLYN439855 the MagicNumber/String  'reaches offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#697"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00697] For method handleException arguments Throwable  exception"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#702"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00702] For method complete arguments Throwable  exception"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.complete@POLYN442956 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00714"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#714"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00714] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.toString@POLYN443496 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00714"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#714"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00714] In method org.apache.kafka.controller.QuorumController.ControllerWriteEvent.toString@POLYN443496 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00719"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#719"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00719] The argument deadlineNs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00730"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#730"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00730] The class QuorumMetaLogListener contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#732"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00732] For method handleCommit arguments BatchReader&lt;ApiMessageAndVersion &gt;  reader"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#732"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00732] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00738"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#738"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00738] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00741] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00770"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#770"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00770] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  'handleCommit[baseOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00736"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#736"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00736] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00746"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#746"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00746] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  'Completing purgatory items up to offset {} and epoch {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00761"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#761"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00761] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  'Replaying commits from the active node up to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00762] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  'offset {} and epoch {}: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00764"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#764"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00764] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00766"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#766"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00766] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  'Replaying commits from the active node up to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00767"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#767"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00767] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleCommit@POLYN444424 the MagicNumber/String  'offset {} and epoch {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00787"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#787"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00787] For method handleSnapshot arguments SnapshotReader&lt;ApiMessageAndVersion &gt;  reader"
}} 
,
{ "ligne" : {
   "c1" : "00787"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#787"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00787] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00805"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#805"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00805] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00807"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00807] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00829"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#829"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00829] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00788"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleSnapshot@POLYN446805 the MagicNumber/String  'handleSnapshot[snapshotId=%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#793"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00793] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleSnapshot@POLYN446805 the MagicNumber/String  'Asked to load snapshot (%s) when it is the active controller (%d)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00799"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#799"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00799] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleSnapshot@POLYN446805 the MagicNumber/String  'Starting to replay snapshot ({}), from last commit offset ({}) and epoch ({})' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00812"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00812] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleSnapshot@POLYN446805 the MagicNumber/String  'Replaying snapshot ({}) batch with last offset of {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00818"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#818"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00818] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleSnapshot@POLYN446805 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00822"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#822"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00822] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleSnapshot@POLYN446805 the MagicNumber/String  'Replaying snapshot ({}) batch with last offset of {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00847"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#847"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00847] For method handleLeaderChange arguments LeaderAndEpoch  newLeader"
}} 
,
{ "ligne" : {
   "c1" : "00847"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#847"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00847] For method handleLeaderChange list of called methods Object monObjet|MetadataVersion bootstrapMetadata_metadataVersionN450798"
}} 
,
{ "ligne" : {
   "c1" : "00847"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#847"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00847] The argument newLeader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00850"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'handleLeaderChange[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00850"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00852"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#852"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00852] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#853"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00853] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Tried to claim controller epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00854"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#854"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00854] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  ', but we never renounced controller epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00860"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#860"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00860] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00874"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#874"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00874] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Cannot become leader without a KRaft supported version. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00875"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#875"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00875] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Got ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00878"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#878"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00878] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'bootstrapMetadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00880"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#880"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00880] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Initializing metadata.version to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00882"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#882"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00882] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Upgrading KRaft cluster and initializing metadata.version to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00885"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#885"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00885] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00889"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#889"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00889] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00890"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#890"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00890] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Failed to bootstrap metadata.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00891"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#891"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00891] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'bootstrapMetadata[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00891"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#891"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00891] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00892"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#892"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00892] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Renouncing the leadership at oldEpoch {} since we could not bootstrap ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00893"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'metadata. Reverting to last committed offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00905"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Becoming the active controller at epoch {}, committed offset {}, committed epoch {}, and metadata.version {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00922"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00922] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'handleRenounce[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00922"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00922] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00923"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#923"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00923] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'Renouncing the leadership at oldEpoch {} due to a metadata ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00924"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#924"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00924] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.handleLeaderChange@POLYN449228 the MagicNumber/String  'log event. Reverting to last committed offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00933"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#933"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00933] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.beginShutdown@POLYN452955 the MagicNumber/String  'MetaLogManager.Listener' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00936"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#936"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00936] For method appendRaftEvent arguments String  name|Runnable  runnable"
}} 
,
{ "ligne" : {
   "c1" : "00936"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#936"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00936] The argument runnable is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00942"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#942"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00942] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00937"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#937"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00937] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00939"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#939"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00939] In method org.apache.kafka.controller.QuorumController.QuorumMetaLogListener.appendRaftEvent@POLYN453069 the MagicNumber/String  'Ignoring {} raft event from an old registration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00955"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#955"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00955] In method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00956"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#956"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00956] In method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String  'maybeCompleteAuthorizerInitialLoad: completing authorizer ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00957"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#957"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00957] In method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String  'initial load at last committed offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#959"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00959] In method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00961"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#961"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00961] In method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String  'maybeCompleteAuthorizerInitialLoad: can't proceed because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00962] In method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String  'lastCommittedOffset  = {}, but highWatermark = {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00966] In method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String  'maybeCompleteAuthorizerInitialLoad: highWatermark not set.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00971"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#971"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00971] In method org.apache.kafka.controller.QuorumController.isActiveController@POLYN454473 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00974"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#974"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00974] For method updateWriteOffset arguments long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00990"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#990"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00990] For method updateLastCommittedState arguments long  offset|int  epoch|long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "01003"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01003] In method org.apache.kafka.controller.QuorumController.renounce@POLYN455649 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01004"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01004] In method org.apache.kafka.controller.QuorumController.renounce@POLYN455649 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01008"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1008"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01008] In method org.apache.kafka.controller.QuorumController.renounce@POLYN455649 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01018"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1018"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01018] In method org.apache.kafka.controller.QuorumController.renounce@POLYN455649 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1030"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01030] The same method call e.getCause() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1030"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01030] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01032"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1032"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01032] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  'Cancelling deferred write event {} because the event queue ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01033"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01033] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  'is now closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1034"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01034] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01036"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1036"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01036] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  'Cancelling deferred write event {} because this controller ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1037"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01037] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  'is no longer active.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01038"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1040"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01040] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  'Unexpected exception while executing deferred write event {}. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  'Rescheduling for a minute from now.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1043"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01043] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1044"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01044] In method org.apache.kafka.controller.QuorumController the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1077"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01077] In method org.apache.kafka.controller.QuorumController.maybeScheduleNextBalancePartitionLeaders@POLYN459151 the MagicNumber/String  'Scheduling write event for {} because scheduled ({}), checkIntervalNs ({}) and isImbalanced ({})' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01109] In method org.apache.kafka.controller.QuorumController.maybeScheduleNextBalancePartitionLeaders@POLYN459151 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01131] In method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String  'Scheduling write event for {} because maxIdleIntervalNs ({}) and metadataVersion ({})' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01138] In method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01142"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01142] In method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01143] In method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01149"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01149] In method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01154"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01154] In method org.apache.kafka.controller.QuorumController.cancelNextWriteNoOpRecord@POLYN462103 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01171] For method replay arguments ApiMessage  message|Optional&lt;OffsetAndEpoch &gt;  snapshotId|long  offset"
}} 
,
{ "ligne" : {
   "c1" : "01171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1171"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01171] The argument message is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1171"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01171] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01225"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01225] In method org.apache.kafka.controller.QuorumController.replay@POLYN462620 the MagicNumber/String  'Unhandled record type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01229"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01229] In method org.apache.kafka.controller.QuorumController.replay@POLYN462620 the MagicNumber/String  'Error replaying record {} from snapshot {} at last offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01232"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01232] In method org.apache.kafka.controller.QuorumController.replay@POLYN462620 the MagicNumber/String  'Error replaying record {} at last offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01238"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1238"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01238] For method maybeGenerateSnapshot arguments long  batchSizeInBytes"
}} 
,
{ "ligne" : {
   "c1" : "01241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01241] In method org.apache.kafka.controller.QuorumController.maybeGenerateSnapshot@POLYN465764 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01250"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01250] In method org.apache.kafka.controller.QuorumController.maybeGenerateSnapshot@POLYN465764 the MagicNumber/String  'Generating a snapshot that includes (epoch={}, offset={}) after {} committed bytes since the last snapshot.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01254"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01254] In method org.apache.kafka.controller.QuorumController.maybeGenerateSnapshot@POLYN465764 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01263"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01263] In method org.apache.kafka.controller.QuorumController.resetState@POLYN466513 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01264"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01264] In method org.apache.kafka.controller.QuorumController.resetState@POLYN466513 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01264"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01264] In method org.apache.kafka.controller.QuorumController.resetState@POLYN466513 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01264"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01264] In method org.apache.kafka.controller.QuorumController.resetState@POLYN466513 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01375"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1375"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01375] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1381"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01381] The argument raftClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01394"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1394"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01394] The argument authorizer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01455"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01455] In method org.apache.kafka.controller.QuorumController.QuorumController@POLYN471133 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01457"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01457] In method org.apache.kafka.controller.QuorumController.QuorumController@POLYN471133 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01461"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01461] In method org.apache.kafka.controller.QuorumController.QuorumController@POLYN471133 the MagicNumber/String  'Creating new QuorumController with clusterId {}, authorizer {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01467"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1467"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01467] For method alterPartition arguments ControllerRequestContext  context|AlterPartitionRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01468"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1468"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01468] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01469"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1469"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01469] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01474"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01474] In method org.apache.kafka.controller.QuorumController.alterPartition@POLYN475659 the MagicNumber/String  'alterPartition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01479"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1479"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01479] For method createTopics arguments ControllerRequestContext  context|CreateTopicsRequestData  request|Set&lt;String &gt;  describable"
}} 
,
{ "ligne" : {
   "c1" : "01480"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1480"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01480] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01481"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1481"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01481] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01486"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01486] In method org.apache.kafka.controller.QuorumController.createTopics@POLYN476197 the MagicNumber/String  'createTopics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01491"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1491"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01491] For method unregisterBroker arguments ControllerRequestContext  context|int  brokerId"
}} 
,
{ "ligne" : {
   "c1" : "01492"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1492"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01492] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01495"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01495] In method org.apache.kafka.controller.QuorumController.unregisterBroker@POLYN476781 the MagicNumber/String  'unregisterBroker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01500"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1500"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01500] For method findTopicIds arguments ControllerRequestContext  context|Collection&lt;String &gt;  names"
}} 
,
{ "ligne" : {
   "c1" : "01501"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1501"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01501] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01502"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1502"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01502] The argument names is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01506"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01506] In method org.apache.kafka.controller.QuorumController.findTopicIds@POLYN477172 the MagicNumber/String  'findTopicIds' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01511"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1511"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01511] For method findAllTopicIds arguments ControllerRequestContext  context"
}} 
,
{ "ligne" : {
   "c1" : "01512"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1512"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01512] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01514"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01514] In method org.apache.kafka.controller.QuorumController.findAllTopicIds@POLYN477731 the MagicNumber/String  'findAllTopicIds' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01519"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1519"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01519] For method findTopicNames arguments ControllerRequestContext  context|Collection&lt;Uuid &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "01520"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1520"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01520] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01521"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1521"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01521] The argument ids is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01525"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01525] In method org.apache.kafka.controller.QuorumController.findTopicNames@POLYN478097 the MagicNumber/String  'findTopicNames' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01530"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1530"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01530] For method deleteTopics arguments ControllerRequestContext  context|Collection&lt;Uuid &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "01531"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1531"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01531] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01532"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1532"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01532] The argument ids is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01536"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01536] In method org.apache.kafka.controller.QuorumController.deleteTopics@POLYN478656 the MagicNumber/String  'deleteTopics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01541"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1541"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01541] For method describeConfigs arguments ControllerRequestContext  context|Map&lt;ConfigResource ,Collection&lt;String &gt; &gt;  resources"
}} 
,
{ "ligne" : {
   "c1" : "01542"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1542"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01542] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01545"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01545] In method org.apache.kafka.controller.QuorumController.describeConfigs@POLYN479251 the MagicNumber/String  'describeConfigs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01550"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1550"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01550] For method electLeaders arguments ControllerRequestContext  context|ElectLeadersRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01551"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1551"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01551] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01552"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1552"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01552] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01556"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01556] The same method call request.topicPartitions() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01556"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01556] In method org.apache.kafka.controller.QuorumController.electLeaders@POLYN479664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01559"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01559] In method org.apache.kafka.controller.QuorumController.electLeaders@POLYN479664 the MagicNumber/String  'electLeaders' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01564"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1564"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01564] For method finalizedFeatures arguments ControllerRequestContext  context"
}} 
,
{ "ligne" : {
   "c1" : "01565"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1565"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01565] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01567"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01567] In method org.apache.kafka.controller.QuorumController.finalizedFeatures@POLYN480246 the MagicNumber/String  'getFinalizedFeatures' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01572"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1572"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01572] For method incrementalAlterConfigs arguments ControllerRequestContext  context|Map&lt;ConfigResource ,Map&lt;String ,Entry&lt;OpType ,String &gt; &gt; &gt;  configChanges|boolean  validateOnly"
}} 
,
{ "ligne" : {
   "c1" : "01572"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1572"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01572] For method incrementalAlterConfigs list of called methods Object monObjet|org.apache.kafka.controller.ControllerResult&lt;Map&lt;ConfigResource,ApiError&gt;&gt; configurationControl_incrementalAlterConfigsN481212"
}} 
,
{ "ligne" : {
   "c1" : "01573"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1573"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01573] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01574"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1574"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01574] The argument configChanges is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01580"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01580] In method org.apache.kafka.controller.QuorumController.incrementalAlterConfigs@POLYN480591 the MagicNumber/String  'incrementalAlterConfigs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01582"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01582] In method org.apache.kafka.controller.QuorumController.incrementalAlterConfigs@POLYN480591 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01592"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1592"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01592] For method alterPartitionReassignments arguments ControllerRequestContext  context|AlterPartitionReassignmentsRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01593"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1593"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01593] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01594"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1594"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01594] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01599"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01599] In method org.apache.kafka.controller.QuorumController.alterPartitionReassignments@POLYN481509 the MagicNumber/String  'alterPartitionReassignments' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01604"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1604"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01604] For method listPartitionReassignments arguments ControllerRequestContext  context|ListPartitionReassignmentsRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01605"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1605"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01605] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01606"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1606"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01606] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01608"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01608] The same method call request.topics() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01608"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01608] In method org.apache.kafka.controller.QuorumController.listPartitionReassignments@POLYN482025 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01610"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01610] In method org.apache.kafka.controller.QuorumController.listPartitionReassignments@POLYN482025 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01612"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01612] In method org.apache.kafka.controller.QuorumController.listPartitionReassignments@POLYN482025 the MagicNumber/String  'listPartitionReassignments' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01617"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1617"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01617] For method legacyAlterConfigs arguments ControllerRequestContext  context|Map&lt;ConfigResource ,Map&lt;String ,String &gt; &gt;  newConfigs|boolean  validateOnly"
}} 
,
{ "ligne" : {
   "c1" : "01617"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1617"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01617] For method legacyAlterConfigs list of called methods Object monObjet|org.apache.kafka.controller.ControllerResult&lt;Map&lt;ConfigResource,ApiError&gt;&gt; configurationControl_legacyAlterConfigsN483289"
}} 
,
{ "ligne" : {
   "c1" : "01618"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1618"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01618] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01619"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1619"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01619] The argument newConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01624"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01624] In method org.apache.kafka.controller.QuorumController.legacyAlterConfigs@POLYN482705 the MagicNumber/String  'legacyAlterConfigs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01626"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1626"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01626] In method org.apache.kafka.controller.QuorumController.legacyAlterConfigs@POLYN482705 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01636"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1636"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01636] For method processBrokerHeartbeat arguments ControllerRequestContext  context|BrokerHeartbeatRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01636"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1636"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01636] For method processBrokerHeartbeat list of called methods Object monObjet|java.util.concurrent.CompletableFuture&lt;org.apache.kafka.metadata.BrokerHeartbeatReply&gt; replicationControl_processBrokerHeartbeatN484142"
}} 
,
{ "ligne" : {
   "c1" : "01637"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1637"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01637] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01638"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1638"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01638] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01640"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01640] In method org.apache.kafka.controller.QuorumController.processBrokerHeartbeat@POLYN483586 the MagicNumber/String  'processBrokerHeartbeat' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01643"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1643"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01643] In method org.apache.kafka.controller.QuorumController.processBrokerHeartbeat@POLYN483586 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01665"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1665"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01665] For method registerBroker arguments ControllerRequestContext  context|BrokerRegistrationRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01665"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1665"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01665] For method registerBroker list of called methods Object monObjet|java.util.concurrent.CompletableFuture&lt;org.apache.kafka.metadata.BrokerRegistrationReply&gt; clusterControl_registerBrokerN484980"
}} 
,
{ "ligne" : {
   "c1" : "01666"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1666"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01666] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01669"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01669] In method org.apache.kafka.controller.QuorumController.registerBroker@POLYN484696 the MagicNumber/String  'registerBroker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01671"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01671] In method org.apache.kafka.controller.QuorumController.registerBroker@POLYN484696 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01679"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1679"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01679] For method alterClientQuotas arguments ControllerRequestContext  context|Collection&lt;ClientQuotaAlteration &gt;  quotaAlterations|boolean  validateOnly"
}} 
,
{ "ligne" : {
   "c1" : "01679"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1679"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01679] For method alterClientQuotas list of called methods Object monObjet|org.apache.kafka.controller.ControllerResult&lt;Map&lt;ClientQuotaEntity,ApiError&gt;&gt; clientQuotaControlManager_alterClientQuotasN485856"
}} 
,
{ "ligne" : {
   "c1" : "01680"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1680"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01680] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01681"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1681"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01681] The argument quotaAlterations is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01687"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1687"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01687] In method org.apache.kafka.controller.QuorumController.alterClientQuotas@POLYN485325 the MagicNumber/String  'alterClientQuotas' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01699"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1699"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01699] For method allocateProducerIds arguments ControllerRequestContext  context|AllocateProducerIdsRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01700"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1700"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01700] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01701"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1701"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01701] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01703"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01703] In method org.apache.kafka.controller.QuorumController.allocateProducerIds@POLYN486129 the MagicNumber/String  'allocateProducerIds' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01711"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1711"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01711] For method updateFeatures arguments ControllerRequestContext  context|UpdateFeaturesRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01712"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1712"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01712] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01713"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1713"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01713] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01715"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1715"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01715] In method org.apache.kafka.controller.QuorumController.updateFeatures@POLYN486726 the MagicNumber/String  'updateFeatures' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01738"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1738"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01738] For method createPartitions arguments ControllerRequestContext  context|List&lt;CreatePartitionsTopic &gt;  topics|boolean  validateOnly"
}} 
,
{ "ligne" : {
   "c1" : "01738"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1738"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01738] For method createPartitions list of called methods Object monObjet|java.util.concurrent.CompletableFuture&lt;List&lt;CreatePartitionsTopicResult&gt;&gt; replicationControl_createPartitionsN489112"
}} 
,
{ "ligne" : {
   "c1" : "01739"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1739"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01739] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01740"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1740"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01740] The argument topics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01747"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1747"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01747] In method org.apache.kafka.controller.QuorumController.createPartitions@POLYN488592 the MagicNumber/String  'createPartitions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01750"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1750"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01750] In method org.apache.kafka.controller.QuorumController.createPartitions@POLYN488592 the MagicNumber/String  'Validate-only CreatePartitions result(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01753"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1753"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01753] In method org.apache.kafka.controller.QuorumController.createPartitions@POLYN488592 the MagicNumber/String  'CreatePartitions result(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01762"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01762] In method org.apache.kafka.controller.QuorumController.beginWritingSnapshot@POLYN489615 the MagicNumber/String  'beginWritingSnapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01763"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1763"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01763] In method org.apache.kafka.controller.QuorumController.beginWritingSnapshot@POLYN489615 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01776"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1776"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01776] For method createAcls arguments ControllerRequestContext  context|List&lt;AclBinding &gt;  aclBindings"
}} 
,
{ "ligne" : {
   "c1" : "01777"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1777"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01777] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01780"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1780"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01780] In method org.apache.kafka.controller.QuorumController.createAcls@POLYN490267 the MagicNumber/String  'createAcls' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01785"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1785"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01785] For method deleteAcls arguments ControllerRequestContext  context|List&lt;AclBindingFilter &gt;  filters"
}} 
,
{ "ligne" : {
   "c1" : "01786"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1786"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01786] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01789"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1789"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01789] In method org.apache.kafka.controller.QuorumController.deleteAcls@POLYN490642 the MagicNumber/String  'deleteAcls' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01794"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1794"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01794] For method waitForReadyBrokers arguments int  minBrokers"
}} 
,
{ "ligne" : {
   "c1" : "01796"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1796"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01796] In method org.apache.kafka.controller.QuorumController.waitForReadyBrokers@POLYN490996 the MagicNumber/String  'waitForReadyBrokers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01804"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1804"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01804] In method org.apache.kafka.controller.QuorumController.beginShutdown@POLYN491420 the MagicNumber/String  'QuorumController#beginShutdown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01833"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1833"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01833] In method org.apache.kafka.controller.QuorumController.pause@POLYN492081 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01834"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1834"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01834] In method org.apache.kafka.controller.QuorumController.pause@POLYN492081 the MagicNumber/String  'pause' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01838"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1838"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01838] In method org.apache.kafka.controller.QuorumController.pause@POLYN492081 the MagicNumber/String  'Interrupted while waiting for unpause.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.handleEventEnd@POLYN426626"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.replay@POLYN462620"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.maybeGenerateSnapshot@POLYN465764"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.rescheduleMaybeFenceStaleBrokers@POLYN458385"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.QuorumController@POLYN471133"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.maybeScheduleNextBalancePartitionLeaders@POLYN459151"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.alterClientQuotas@POLYN485325"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.beginShutdown@POLYN491420"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.close@POLYN491921"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.createPartitions@POLYN488592"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.incrementalAlterConfigs@POLYN480591"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.legacyAlterConfigs@POLYN482705"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.newNotControllerException@POLYN425804"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.QuorumController.pause@POLYN492081"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00373] In the recursive method org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162 the MagicNumber/String '{}: unable to start processing because of {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00385] In the recursive method org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162 the MagicNumber/String '{}: failed with {} in {} us' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00389] In the recursive method org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162 the MagicNumber/String '{}: failed with unknown server exception {} at epoch {} in {} us.  ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00390] In the recursive method org.apache.kafka.controller.QuorumController.handleEventException@POLYN427162 the MagicNumber/String 'Reverting to last committed offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#364"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00364] In the recursive method org.apache.kafka.controller.QuorumController.handleEventEnd@POLYN426626 the MagicNumber/String 'Processed {} in {} us' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00955"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#955"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00955] In the recursive method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00956"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#956"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00956] In the recursive method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String 'maybeCompleteAuthorizerInitialLoad: completing authorizer ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00957"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#957"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00957] In the recursive method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String 'initial load at last committed offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00959] In the recursive method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00961"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#961"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00961] In the recursive method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String 'maybeCompleteAuthorizerInitialLoad: can't proceed because ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#962"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00962] In the recursive method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String 'lastCommittedOffset  = {}, but highWatermark = {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#966"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00966] In the recursive method org.apache.kafka.controller.QuorumController.maybeCompleteAuthorizerInitialLoad@POLYN453583 the MagicNumber/String 'maybeCompleteAuthorizerInitialLoad: highWatermark not set.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01225"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01225] In the recursive method org.apache.kafka.controller.QuorumController.replay@POLYN462620 the MagicNumber/String 'Unhandled record type ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01229"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01229] In the recursive method org.apache.kafka.controller.QuorumController.replay@POLYN462620 the MagicNumber/String 'Error replaying record {} from snapshot {} at last offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01232"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01232] In the recursive method org.apache.kafka.controller.QuorumController.replay@POLYN462620 the MagicNumber/String 'Error replaying record {} at last offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01131] In the recursive method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String 'Scheduling write event for {} because maxIdleIntervalNs -{}- and metadataVersion -{}-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01138] In the recursive method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01142"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01142] In the recursive method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01143] In the recursive method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01149"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01149] In the recursive method org.apache.kafka.controller.QuorumController.maybeScheduleNextWriteNoOpRecord@POLYN460891 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1241"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01241] In the recursive method org.apache.kafka.controller.QuorumController.maybeGenerateSnapshot@POLYN465764 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01250"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01250] In the recursive method org.apache.kafka.controller.QuorumController.maybeGenerateSnapshot@POLYN465764 the MagicNumber/String 'Generating a snapshot that includes -epoch={}, offset={}- after {} committed bytes since the last snapshot.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01254"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01254] In the recursive method org.apache.kafka.controller.QuorumController.maybeGenerateSnapshot@POLYN465764 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01455"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01455] In the recursive method org.apache.kafka.controller.QuorumController.QuorumController@POLYN471133 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01457"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1457"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01457] In the recursive method org.apache.kafka.controller.QuorumController.QuorumController@POLYN471133 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01461"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01461] In the recursive method org.apache.kafka.controller.QuorumController.QuorumController@POLYN471133 the MagicNumber/String 'Creating new QuorumController with clusterId {}, authorizer {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01077] In the recursive method org.apache.kafka.controller.QuorumController.maybeScheduleNextBalancePartitionLeaders@POLYN459151 the MagicNumber/String 'Scheduling write event for {} because scheduled -{}-, checkIntervalNs -{}- and isImbalanced -{}-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01109] In the recursive method org.apache.kafka.controller.QuorumController.maybeScheduleNextBalancePartitionLeaders@POLYN459151 the MagicNumber/String 10 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01687"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1687"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01687] In the recursive method org.apache.kafka.controller.QuorumController.alterClientQuotas@POLYN485325 the MagicNumber/String 'alterClientQuotas' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01804"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1804"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01804] In the recursive method org.apache.kafka.controller.QuorumController.beginShutdown@POLYN491420 the MagicNumber/String 'QuorumController#beginShutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01747"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1747"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01747] In the recursive method org.apache.kafka.controller.QuorumController.createPartitions@POLYN488592 the MagicNumber/String 'createPartitions' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01750"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1750"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01750] In the recursive method org.apache.kafka.controller.QuorumController.createPartitions@POLYN488592 the MagicNumber/String 'Validate-only CreatePartitions result-s-: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01753"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1753"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01753] In the recursive method org.apache.kafka.controller.QuorumController.createPartitions@POLYN488592 the MagicNumber/String 'CreatePartitions result-s-: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01580"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01580] In the recursive method org.apache.kafka.controller.QuorumController.incrementalAlterConfigs@POLYN480591 the MagicNumber/String 'incrementalAlterConfigs' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01582"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1582"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01582] In the recursive method org.apache.kafka.controller.QuorumController.incrementalAlterConfigs@POLYN480591 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01624"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1624"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01624] In the recursive method org.apache.kafka.controller.QuorumController.legacyAlterConfigs@POLYN482705 the MagicNumber/String 'legacyAlterConfigs' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01626"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1626"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01626] In the recursive method org.apache.kafka.controller.QuorumController.legacyAlterConfigs@POLYN482705 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#348"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00348] In the recursive method org.apache.kafka.controller.QuorumController.newNotControllerException@POLYN425804 the MagicNumber/String 'No controller appears to be active.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01833"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01833] In the recursive method org.apache.kafka.controller.QuorumController.pause@POLYN492081 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01834"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1834"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01834] In the recursive method org.apache.kafka.controller.QuorumController.pause@POLYN492081 the MagicNumber/String 'pause' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01838"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/QuorumController.java.html#1838"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01838] In the recursive method org.apache.kafka.controller.QuorumController.pause@POLYN492081 the MagicNumber/String 'Interrupted while waiting for unpause.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
